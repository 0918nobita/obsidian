#vuejs
prev: [[Vue 条件付きレンダリング]]

`v-for` ディレクティブを用いて、配列をもとにした要素のリストをレンダリングできる。
```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```
