---
aliases:
  - 中国語学習支援ツールの開発
created: 2023-12-29
tags:
  - 技術/趣味プログラミング
  - 自然言語
  - Webフロントエンド
  - JavaScript
  - TypeScript
  - HTML
  - CSS
---
自分が Obsidian 上でノートを取りながら効率よく中国語を学ぶために、ノートアプリ Obsidian のための自作プラグイン「Zhongwen Block」を開発しています。今回は JavaScript/TypeScript, HTML, CSS にある程度馴染みのある人に向けて、このプラグインを開発するにあたって直面した問題やそれに対する自分なりの解決方法について紹介していきます。

## Obsidian についての基礎知識

### Obsidian とは

Markdown 形式でノートを取り、個人の知識を管理するのに使うツールで、Electron アプリとして実装されています。Windows, macOS, Linux, Android, iOS で利用できます。
ノート同士にリンクを張ることもでき、その関係をグラフ化する機能も備えています。
さらにサードパーティ製プラグインを配布する仕組み (Community plugins) もあり、豊富なプラグインを簡単にインストールして自分好みにカスタマイズできます。

### Obsidian Vault とは

Vault は「ノートの保管庫」を意味していて、実際には普通のディレクトリです。中にノートと対応する `.md` ファイルを配置します。`.obsidian` サブディレクトリには、設定を永続化するための `.json` ファイルやインストールされたプラグインが配置されています。

## 今回実装したプラグインの概要

今回実装した Obsidian プラグインは「`zh-cn` コードブロック内に記述した中国語の文に対して、自動でルビとしてピンイン (漢字に対する補助的な発音表記) を追加表示する」機能を持ちます。

![画面録画](https://github.com/0918nobita/obsidian-zhongwen-block/blob/main/images/screen-recording.gif?raw=true)

デフォルト設定ではピンインはマウスホバー時にのみ表示されます。これは、極力ピンインに頼らずに漢字だけを見て発音できるようになるべき、という考えに基づいた挙動です。もちろん設定を変更すればピンインを常時表示するようにもできます。

## Obsidian のプラグインの作り方

先述のとおり Web ベースで開発されているので、プラグインを JavaScript で実装して

- 独自のモーダルを追加する
- Markdown で書かれたメモをレンダリングする際の処理に介入する
- 設定画面に項目を追加してプラグインの挙動をユーザがカスタマイズできるようにする

等いろいろな機能を追加できます。

Web フロントエンド (HTML, CSS, JavaScript) の知識があれば簡単に開発を始められます。
プラグイン開発者向けのドキュメントが用意されています。

https://docs.obsidian.md/Home

プラグイン本体は、基本的には

- `manifest.json`：プラグインに関する情報 (プラグイン名、バージョン、説明等)
- `main.js`：プラグイン読み込み時に実行される JavaScript
- `styles.css`：プラグイン読み込み時に適用される CSS

で構成されています。

プラグイン開発のための API に関しては、 `obsidian` npm パッケージで TypeScript の型定義付きで提供されています。

サードパーティプラグインは [obsidianmd/obsidian-releases](https://github.com/obsidianmd/obsidian-releases) リポジトリで管理されており、ここに自分のプラグインの情報を追加するプルリクエストを投げてマージされれば、晴れて Obsidian のプラグイン管理画面から検索・インストールできるようになります。

## プラグインの具体的な実装について

### 何をしているかざっくり言うと

このプラグインの実際の挙動としては、言語を `zh-cn` に設定したコードブロックをレンダリングする際に、内容にピンインのルビを付けてレイアウト調整した要素がレンダリングされるように介入して DOM 操作をします。

### Plugin インスタンス

Obsidian プラグインを作るには、まず `Plugin` 抽象クラスを継承したクラスを定義します。
プラグインが読み込まれるタイミングで `onload` メソッドが呼び出されるため、初期化処理は `onload` 内に定義します。
そしてこのクラスをデフォルトエクスポートします。ここでは ES Module として記述していますが、`main.js` は CommonJS 形式であることが要求されるため、ビルドツールによっては設定を変更する必要があります。

```typescript
import { Plugin } from 'obsidian';

export default class MyPlugin extends Plugin {
  async onload() {
    // 読み込まれた時の処理
  }
}
```

Vite の場合のビルド設定：

```typescript
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/main.ts',
      formats: ['cjs'],
    },
    ...
  },
  ...
});
```

### コードブロックプロセッサの登録

今回は言語として `zh-cn` が指定されたコードブロックのレンダリング処理をこちらで定義したもので上書きする必要があるので、 `Plugin` 抽象クラスのインスタンスメソッド `registerMarkdownCodeBlockProcessor` を用いてレンダリング処理を登録します。

https://docs.obsidian.md/Reference/TypeScript+API/Plugin/registerMarkdownCodeBlockProcessor

第1引数で対象の言語を指定し、第2引数でレンダリングの際に呼び出されるコールバック関数を指定します。

コールバック関数の引数：

- 第1引数 `source`：コードブロック内に記述された内容 (`string`)
- 第2引数 `el`：コードブロックと対応する要素を描画する起点となる `HTMLElement`

```typescript
import { Plugin } from 'obsidian';

export default class MyPlugin extends Plugin {
  async onload() {
    this.registerMarkdownCodeBlockProcessor(
      'zh-cn',
      async (source, el) => {
        // レンダリング処理
      }
    );
  }
}
```

`HTMLElement` という型を見てわかる通り、この引数を通じて実行時の DOM 要素にアクセスできるようになっているので、`el.appendChild(...)` 等で子要素を自由に追加できるわけです。

※ プラグイン開発者向けガイドラインにおいて、セキュリティの観点から `.innerHTML` の利用は避けるように説明されています。

## 発生した問題1: DOM 操作を開始するタイミングの制御

## 発生した問題2: 素直にスタイリングするとコピーしたときに空白文字が混入する

漢字とピンインの左右の空白を調整して読みやすくするうえで、まずどうやって CSS でスタイリングするかが問題になりました。

## 発生した問題3: レンダリングが遅延される

## アクセシビリティ

## 今後の展望
