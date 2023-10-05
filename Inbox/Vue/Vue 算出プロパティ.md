#vuejs/options #vuejs/composition
prev: [[Vue リストレンダリング]]
next: [[Vue ライフサイクルとテンプレート参照]]

他のプロパティからリアクティブに算出されたプロパティを宣言できる。

算出プロパティはその計算のなかで依存しているリアクティブステートを追跡し、依存関係が変更されると自動で再計算される。
## Options API
```typescript
export default {
  ...
  computed: {
    filteredTodos() {
      return this.hideCompleted
        ? this.todos.filter((todo) => !todo.done)
        : this.todos;
    }
  },
};
```
## Composition API
```typescript
import { computed, ref } from 'vue';

const hideCompleted = ref(false);
const todos = ref([ /* ... */ ]);

const filteredTodos = computed(() => {
  return hideCompleted.value
    ? todos.value.filter((t) => !t.done)
    : todos.value;
});
```
