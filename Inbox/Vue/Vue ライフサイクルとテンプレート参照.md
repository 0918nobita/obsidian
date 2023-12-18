#vuejs/options #vuejs/composition
prev: [[Vue 算出プロパティ]]
next: [[Vue ウォッチャー]]

DOM を手動操作したい場合、`ref` 属性を用いてテンプレート参照を要求したうえで、`mounted` フックにマウント時の (DOM 操作等の) 処理を記述する。
```html
<p ref="pElementRef">Hello, world!</p>
```
**ライフサイクルフック**には `mounted` のほか、`created` , `updated` フックがあり、コンポーネントライフサイクルの特定のタイミングでそれぞれ呼び出される。

コンポーネントインスタンスからテンプレート参照へは、**コンポーネントがマウントされた後**にのみアクセスできる。
## Options API
```typescript
export default {
  mounted() {
    // コンポーネントがマウントされた時に実行される
    this.$refs.pElementRef.textContent = 'Hello, Vue!';
  },
};
```
## Composition API
```typescript
import { onMounted, ref } from 'vue';

const pElementRef = ref<HTMLParagraphElement | null>(null);

onMounted(() => {
  // コンポーネントがマウントされた時に実行される
  pElementRef.value!.textContent = 'Hello, Vue!';
});
```
## 参考
```embed
title: "ライフサイクルフック | Vue.js"
image: "https://vuejs.org/images/logo.png"
description: "Vue.js - The Progressive JavaScript Framework"
url: "https://ja.vuejs.org/guide/essentials/lifecycle#lifecycle-diagram"
```
