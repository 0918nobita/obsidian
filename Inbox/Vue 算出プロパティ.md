#vuejs/options
prev: [[Vue リストレンダリング]]
next: [[Vue ライフサイクルとテンプレート参照]]

他のプロパティからリアクティブに算出されたプロパティを `computed` オプションで宣言できる。
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
算出プロパティは、その計算のなかで依存しているリアクティブステートを追跡し、依存関係が変更されると自動で再計算される。
