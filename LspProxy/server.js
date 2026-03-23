import express from 'express';
import { WebSocketServer } from 'ws';
import { createServerProcess, createWebSocketConnection, forward } from 'vscode-ws-jsonrpc/server';

const app = express();
const port = 3000;

const server = app.listen(port, () => {
    console.log(`LSP Proxy Server läuft auf Port ${port}`);
});

const wss = new WebSocketServer({
    server,
    path: '/lsp'
});

wss.on('connection', (socket, request) => {
    // Extrahiere Sprache aus dem Query-Parameter (z.B. ?lang=cpp)
    const url = new URL(request.url, `http://${request.headers.host}`);
    const lang = url.searchParams.get('lang');

    if (!lang) {
        socket.close(1008, 'Sprache nicht angegeben');
        return;
    }

    // Mapping von Sprache zu Sprachserver-Befehl
    const serverMap = {
        'java': { command: 'jdtls', args: [] },
        'cpp': { command: 'clangd', args: ['--background-index', '--log=verbose'] },
        'c': { command: 'clangd', args: ['--background-index'] },
        'go': { command: 'gopls', args: [] },
        'rust': { command: 'rust-analyzer', args: [] },
        'typescript': { command: 'typescript-language-server', args: ['--stdio'] },
        'javascript': { command: 'typescript-language-server', args: ['--stdio'] },
        'css': { command: 'css-languageserver', args: ['--stdio'] },
        'html': { command: 'html-languageserver', args: ['--stdio'] }
    };

    const serverInfo = serverMap[lang];
    if (!serverInfo) {
        socket.close(1008, `Kein Sprachserver für ${lang} verfügbar`);
        return;
    }

    console.log(`Starte Sprachserver für ${lang}: ${serverInfo.command}`);

    // Wrap the WebSocket for vscode-ws-jsonrpc
    const webSocket = {
        send: content => socket.send(content, error => {
            if (error) {
                console.error(`Error sending message: ${error}`);
            }
        }),
        onMessage: cb => socket.on('message', data => cb(data.toString())),
        onError: cb => socket.on('error', cb),
        onClose: cb => socket.on('close', cb),
        dispose: () => socket.close()
    };

    // Create the WebSocket connection for LSP
    const clientConnection = createWebSocketConnection(webSocket);
    
    // Create the Server process connection for LSP
    const serverConnection = createServerProcess(lang, serverInfo.command, serverInfo.args);

    if (serverConnection) {
        // Link client and server
        forward(clientConnection, serverConnection, (message) => message);
        console.log(`LSP-Verbindung für ${lang} erfolgreich hergestellt.`);
    } else {
        console.error(`Fehler beim Starten des Sprachservers für ${lang}.`);
        socket.close(1011, 'Sprachserver konnte nicht gestartet werden');
    }
});
