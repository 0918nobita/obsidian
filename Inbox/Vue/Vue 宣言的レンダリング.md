#vuejs/options #vuejs/composition
HTML を拡張したテンプレート構文を用いて、JavaScript の状態に基づいて HTML がどのように見えるかを記述することができる。

状態が変更されると、HTML は自動的に更新される。

変更されたときに更新のトリガーとなるような状態は**リアクティブ**とみなされる。
リアクティブステートはコンポーネントに保持される。
## Options API
`data` コンポーネントオプション(オブジェクトを返す関数)を通じてリアクティブステートを宣言できる。
```typescript
export default {
  data() {
    return {
      message: 'Hello, world!',
    };
  },
};
```
## Composition API
`reactive()` はオブジェクト (配列, `Map`, `Set` 等も含む) に対してのみ動作する。
```typescript
import { reactive } from 'vue';

const counter = reactive({
  count: 0,
});

console.log(counter.count); // 0
counter.count++;
```
`ref()` は任意の型の値を取り、`.value` プロパティの下で値を更新可能なオブジェクトを作成できる。
```typescript
import { ref } from 'vue';

const message = ref('Hello, world!');

console.log(message.value);
message.value = 'Changed';
```
