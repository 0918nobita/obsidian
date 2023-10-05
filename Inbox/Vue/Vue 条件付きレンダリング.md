#vuejs 
prev: [[Vue フォームバインディング]]
next: [[Vue リストレンダリング]]

`v-if` ディレクティブを用いて、条件付きでレンダリングできる。
```html
<h1 v-if="alice">ありすで良いです</h1>
```
この `<h1>` は `alice` の値が truthy である場合にのみレンダリングされる。
`cond` の値が falsy に変化した場合、この `<h1>` は DOM ツリーから削除される。
```html
<h1 v-if="alice">ありすで良いです</h1>
<h1 v-else>橘です</h1>
```
