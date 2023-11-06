import { style } from '@vanilla-extract/css';

export const container = style({});

export const control = style({});

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
    display: 'flex',
    flexWrap: 'wrap',
    columnGap: '0.5em',
});

export const charBlock = style({
    display: 'inline-flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'end',
});

export const pinyin = style({
    opacity: '0',
    fontSize: '0.8em',
    transition: 'opacity .3s ease',
    selectors: {
        [`${container}:hover &`]: {
            opacity: '1',
        }
    },
});

export const chineseChar = style({
    textAlign: 'center',
});
