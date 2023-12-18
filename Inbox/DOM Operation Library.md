```tsx
const container = (zhChar$, pinyin$) => {
	const zhChar = zhChar$.subscribe((z) => <span class={style.zhCharSpan} />);

	const pinyin = pinyin$.subscribe((p) => <span class={style.pinyinSpan} />);

	return (
	    <div class={style.container}>
	        <div class={style.pinyinLine}>
		        {pinyin}
	        </div>
	        <div class={style.zhCharLine}>
		        {zhChar}
	        </div>
	    </div>
	);
};

const app = document.getElementById('app')!;
render(container, app);
```
VDOM を使うほどでは無いが、Real DOM を素の JS から操作するのは煩雑な場合に有効なライブラリを作りたい
