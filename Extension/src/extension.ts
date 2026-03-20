import * as vscode from 'vscode';
import { LessonProvider } from './lessonProvider';

export function activate(context: vscode.ExtensionContext) {
    const rootPath = (vscode.workspace.workspaceFolders && (vscode.workspace.workspaceFolders.length > 0))
		? vscode.workspace.workspaceFolders[0].uri.fsPath : undefined;

    const lessonProvider = new LessonProvider(rootPath);
    vscode.window.registerTreeDataProvider('lms-lessons', lessonProvider);

    vscode.commands.registerCommand('lms-lessons.refresh', () => lessonProvider.refresh());
    vscode.commands.registerCommand('lms-lessons.openFile', (filePath: string) => {
        vscode.workspace.openTextDocument(filePath).then(doc => {
            vscode.window.showTextDocument(doc);
        });
    });

    let disposable = vscode.commands.registerCommand('lms-helper.insertPlaceholder', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.selection;
            const text = editor.document.getText(selection);
            const placeholderText = `<Placeholder>${text}</Placeholder>`;
            editor.edit(editBuilder => {
                editBuilder.replace(selection, placeholderText);
            });
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
