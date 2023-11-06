import { style } from '@vanilla-extract/css';

export const container = style({
    display: 'flex',
});

export const copyButton = style({
    display: 'inline-block',
    fontSize: '0.8em',
    borderRadius: '5px',
    margin: '6px',
    padding: '6px 8px',
    ':hover': {
        backgroundColor: 'var(--background-modifier-hover)',
    },
});

export const sentence = style({
    flexGrow: '1',
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: '0.2em',
});

export const charBlock = style({
    display: 'inline-flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'end',
});

export const pinyin = style({
    fontSize: '0.8em',
    textAlign: 'center',
    transition: 'opacity .3s ease',
    opacity: '0',
    selectors: {
        [`${container}:hover &`]: {
            opacity: '1',
        }
    },
});

export const chineseChar = style({
    textAlign: 'center',
});
