#vuejs
prev: [[Vue イベントリスナー]]
next: [[Vue 条件付きレンダリング]]

`v-bind` と `v-on` を同時に用いることで双方向 (two-way) バインディングが実現する。
```html
<input v-bind:value="text" v-on:input="onInput">
<p>{{ text }}</p>
```
```typescript
export default {
  data() {
    return {
      text: '',
    };
  },
  methods: {
    // v-on ハンドラはネイティブDOMのイベントを引数に取る
    onInput(e) {
      this.text = e.target.value;
    }
  },
};
```
`<input>` に対する入力内容を更新するたびに、同じ内容が `<p>` で表示される。

双方向バインディングの記述を簡略化するために、糖衣構文として `v-model` ディレクティブが用意されている。
```html
<input v-model="text">
```
`v-model` は `<input>` の値をバインドされた状態と自動的に同期するため、イベントハンドラを別途用意して指定する必要がない。
