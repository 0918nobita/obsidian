const fs = require('fs');

const { vanillaExtractPlugin } = require('@vanilla-extract/esbuild-plugin');
const { build } = require('esbuild');

/** @type {import('esbuild').Plugin} */
const renameCssPlugin = {
    name: 'rename-css-plugin',

    setup: (build) => {
        build.onEnd(() => {
            const oldCss = 'main.css';
            const newCss = 'styles.css';

            if (fs.existsSync(oldCss)) {
                console.log(`Renaming ${oldCss} to ${newCss}`);
                fs.renameSync(oldCss, newCss);
            }
        });
    },
}

build({
    bundle: true,
    entryPoints: ['main.ts'],
    external: [
        'obsidian',
    ],
    format: 'cjs',
    outfile: 'main.js',
    platform: 'browser',
    plugins: [
        vanillaExtractPlugin(),
        renameCssPlugin,
    ],
    target: 'es2018',
});
