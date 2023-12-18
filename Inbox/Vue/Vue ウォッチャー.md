#vuejs/options
prev: [[Vue ライフサイクルとテンプレート参照]]
next: [[Vue コンポーネント]]

`watch` オプションを用いて、特定のリアクティブステートが変化したタイミングで実行される副作用を記述できる。
```typescript
export default {
  data() {
    return {
      count: 0,
    };
  },
  watch: {
    count(newCount) {
      console.log(`new count is: ${newCount}`);
    },
  },
};
```
