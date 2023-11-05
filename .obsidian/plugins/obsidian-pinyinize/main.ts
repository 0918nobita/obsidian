import { Notice, Plugin } from 'obsidian';

export default class MyPlugin extends Plugin {
    async onload() {
        new Notice('Hello from my Obsidian plugin!');
    }

    onunload() {}
}
