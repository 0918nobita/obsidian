#vuejs/options
prev: [[Vue ウォッチャー]]

`components` オプションを用いて、子コンポーネントとしてレンダリングしたい別のコンポーネントを予め名前付きで登録する。
```typescript
import ChildComp from './ChildComp.vue';

export default {
  components: {
    ChildComp,
  },
};
```
登録済みをコンポーネントはテンプレート内に記述することで子コンポーネントとして実際にレンダリングできる。
```html
<ChildComp />
```
