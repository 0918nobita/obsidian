import { Notice, Plugin } from 'obsidian';

function annotate(parentNode: Node, oldText: Text) {
    // const chineseSentence = oldText.textContent!.replace(/zn_(.*?)_ch/g, (_matched, group: string) => group.toUpperCase());
    // const newNode = document.createElement('span');
    // newNode.textContent = chineseSentence;
    // newNode.style.color = 'yellow';
    // parentNode.replaceChild(newNode, oldText);
    console.log(oldText.textContent!.match(/zn_(.*?)_ch/g));
}

export default class MyPlugin extends Plugin {
    async onload() {
        new Notice('Hello from my Obsidian plugin!');
        
        this.registerMarkdownPostProcessor((element, _context) => {
            const children = [...element.childNodes];

            for (const child of children) {
                // TODO: find text nodes recursively
                const nodes = [...child.childNodes];

                for (const node of nodes) {
                    if (node.nodeType === Node.TEXT_NODE) {
                        const text = node as Text;
                        annotate(child, text);
                    }
                }
            }
        });
    }

    onunload() {}
}
