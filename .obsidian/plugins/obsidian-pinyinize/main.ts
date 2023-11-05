import { Plugin } from 'obsidian';
import { html } from 'pinyin-pro';

export default class MyPlugin extends Plugin {
    async onload() {
        this.registerMarkdownCodeBlockProcessor('zh-cn', (source, element, _context) => {
            const container = element.createEl('div');
            container.className = 'pinyinize-container';

            const text = container.createEl('div');

            const pinyinBlock = html(source, {
                resultClass: 'pinyinize-result',
                pinyinClass: 'pinyinize-pinyin',
                chineseClass: 'pinyinize-chinese',
            });

            text.innerHTML = pinyinBlock;

            const button = container.createEl('button');
            button.className = 'pinyinize-copy-button';
            button.textContent = 'Copy';

            button.addEventListener('click', () => {
                void navigator.clipboard.writeText(source);
            });
        });
    }
}
