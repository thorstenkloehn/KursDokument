import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export class LessonProvider implements vscode.TreeDataProvider<LessonItem> {
    private _onDidChangeTreeData: vscode.EventEmitter<LessonItem | undefined | null | void> = new vscode.EventEmitter<LessonItem | undefined | null | void>();
    readonly onDidChangeTreeData: vscode.Event<LessonItem | undefined | null | void> = this._onDidChangeTreeData.event;

    constructor(private workspaceRoot: string | undefined) {}

    refresh(): void {
        this._onDidChangeTreeData.fire();
    }

    getTreeItem(element: LessonItem): vscode.TreeItem {
        return element;
    }

    getChildren(element?: LessonItem): Thenable<LessonItem[]> {
        if (!this.workspaceRoot) {
            return Promise.resolve([]);
        }

        if (element) {
            // Wenn ein Ordner (Kurs) ausgewählt ist, zeige die Lektionen darin
            const dirPath = element.filePath;
            if (fs.lstatSync(dirPath).isDirectory()) {
                const files = fs.readdirSync(dirPath);
                return Promise.resolve(files
                    .filter(file => file.endsWith('.md'))
                    .map(file => new LessonItem(
                        file, 
                        path.join(dirPath, file), 
                        vscode.TreeItemCollapsibleState.None,
                        {
                            command: 'lms-lessons.openFile',
                            title: 'Lektion öffnen',
                            arguments: [path.join(dirPath, file)]
                        }
                    ))
                );
            }
        } else {
            // Zeige alle Kurs-Ordner im Verzeichnis "Kurse"
            const kursePath = path.join(this.workspaceRoot, 'Kurse');
            if (fs.existsSync(kursePath)) {
                const dirs = fs.readdirSync(kursePath);
                return Promise.resolve(dirs
                    .filter(d => fs.lstatSync(path.join(kursePath, d)).isDirectory())
                    .map(d => new LessonItem(d, path.join(kursePath, d), vscode.TreeItemCollapsibleState.Collapsed))
                );
            }
        }
        return Promise.resolve([]);
    }
}

class LessonItem extends vscode.TreeItem {
    constructor(
        public readonly label: string,
        public readonly filePath: string,
        public readonly collapsibleState: vscode.TreeItemCollapsibleState,
        public readonly command?: vscode.Command
    ) {
        super(label, collapsibleState);
        this.tooltip = `${this.label}`;
        this.description = path.basename(filePath);
        this.contextValue = fs.lstatSync(filePath).isDirectory() ? 'folder' : 'file';
        
        if (!fs.lstatSync(filePath).isDirectory()) {
            this.iconPath = new vscode.ThemeIcon('markdown');
        } else {
            this.iconPath = new vscode.ThemeIcon('folder');
        }
    }
}
