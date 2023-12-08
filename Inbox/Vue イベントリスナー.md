#vuejs 
prev: [[Vue 属性バインディング]]
next: [[Vue フォームバインディング]]

`v-on` ディレクティブを用いることで DOM イベントを購読できる。
```html
<button v-on:click="increment">{{ count }}</button>
```
`v-on` ディレクティブもまた頻繁に使われるため、省略記法が用意されている。
```html
<button @click="increment">{{ count }}</button>
```
ここで `increment` は `methods` オプション内で宣言された関数を参照している。
```typescript
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      // コンポーネントの状態を更新する
      this.count++;
    },
  },
};
```
メソッド内では、`this` を介してコンポーネントインスタンスにアクセスできる。
コンポーネントインスタンスは `data` で宣言されたデータプロパティを公開しており、これらのプロパティ値を変更することで、コンポーネントの状態を更新できる。
イベントハンドラにはインラインの式も指定できる。
## 参考
```embed
title: "イベントハンドリング | Vue.js"
image: "https://vuejs.org/images/logo.png"
description: "Vue.js - The Progressive JavaScript Framework"
url: "https://ja.vuejs.org/guide/essentials/event-handling"
```
