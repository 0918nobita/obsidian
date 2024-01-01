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

## Obsidian とは

Markdown 形式でノートを取り、個人の知識を管理するのに使うツールで、Electron アプリとして実装されています。Windows, macOS, Linux, Android, iOS で利用できます。
ノート同士にリンクを張ることもでき、その関係をグラフ化する機能も備えています。
さらにサードパーティ製プラグインを配布する仕組み (Community plugins) もあり、豊富なプラグインを簡単にインストールして自分好みにカスタマイズできます。

## Obsidian Vault とは

Vault は「ノートの保管庫」を意味していて、実際には普通のディレクトリです。中にノートと対応する `.md` ファイルを配置します。`.obsidian` サブディレクトリには、設定を永続化するための `.json` ファイルやインストールされたプラグインが配置されています。

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

- `manifest.json` : プラグインに関する情報 (プラグイン名、バージョン、説明等)
- `main.js` : プラグイン読み込み時に実行される JavaScript
- `styles.css` : プラグイン読み込み時に適用される CSS

で構成されています。

プラグイン開発のための API に関しては、 `obsidian` npm パッケージで TypeScript の型定義付きで提供されています。

## 今回実装したプラグインの概要

今回実装した Obsidian プラグインは「中国語の文に対して、自動でルビとしてピンインを追加表示する」機能を持ちます。実際の挙動としては、言語を `zh-cn` に設定したコードブロックをレンダリングする際に、内容にピンインのルビを付けてレイアウト調整した要素がレンダリングされるように介入して DOM 操作をします。

![画面録画](https://github.com/0918nobita/obsidian-zhongwen-block/blob/main/images/screen-recording.gif?raw=true)
