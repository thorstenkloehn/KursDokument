"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonProvider = void 0;
const vscode = __importStar(require("vscode"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
class LessonProvider {
    workspaceRoot;
    _onDidChangeTreeData = new vscode.EventEmitter();
    onDidChangeTreeData = this._onDidChangeTreeData.event;
    constructor(workspaceRoot) {
        this.workspaceRoot = workspaceRoot;
    }
    refresh() {
        this._onDidChangeTreeData.fire();
    }
    getTreeItem(element) {
        return element;
    }
    getChildren(element) {
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
                    .map(file => new LessonItem(file, path.join(dirPath, file), vscode.TreeItemCollapsibleState.None, {
                    command: 'lms-lessons.openFile',
                    title: 'Lektion öffnen',
                    arguments: [path.join(dirPath, file)]
                })));
            }
        }
        else {
            // Zeige alle Kurs-Ordner im Verzeichnis "Kurse"
            const kursePath = path.join(this.workspaceRoot, 'Kurse');
            if (fs.existsSync(kursePath)) {
                const dirs = fs.readdirSync(kursePath);
                return Promise.resolve(dirs
                    .filter(d => fs.lstatSync(path.join(kursePath, d)).isDirectory())
                    .map(d => new LessonItem(d, path.join(kursePath, d), vscode.TreeItemCollapsibleState.Collapsed)));
            }
        }
        return Promise.resolve([]);
    }
}
exports.LessonProvider = LessonProvider;
class LessonItem extends vscode.TreeItem {
    label;
    filePath;
    collapsibleState;
    command;
    constructor(label, filePath, collapsibleState, command) {
        super(label, collapsibleState);
        this.label = label;
        this.filePath = filePath;
        this.collapsibleState = collapsibleState;
        this.command = command;
        this.tooltip = `${this.label}`;
        this.description = path.basename(filePath);
        this.contextValue = fs.lstatSync(filePath).isDirectory() ? 'folder' : 'file';
        if (!fs.lstatSync(filePath).isDirectory()) {
            this.iconPath = new vscode.ThemeIcon('markdown');
        }
        else {
            this.iconPath = new vscode.ThemeIcon('folder');
        }
    }
}
//# sourceMappingURL=lessonProvider.js.map