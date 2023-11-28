#プログラミング #Obsidian/プラグイン自作 
はてなブログの記事の投稿・編集を Obsidian 上で完結させるためのプラグインを作りたい
## 基本仕様
以下のコマンドを追加する
- `Fetch existing posts`
	- モーダル上で指定した既存の投稿を取得し、Obsidian vault 上にコピーを作成する
	- 各コピーは、その後投稿内容を編集して同期するのに用いる
	- Frontmatter に、同期のために必要な情報 (記事 ID、リビジョン、公開状況等) を保存しておく
- `Sync posts`
	- Obsidian vault 上の同期中の各投稿を、はてなブログ側と同期する
	- はてなブログ側の内容のほうが新しい場合は、その内容で Obsidian vault 側の投稿を更新する
	- Obsidian vault 上の投稿のほうが新しい場合は、その内容ではてなブログ側の投稿を更新する
	- 双方の最終更新日時を比較して、競合している場合はどう対応するかモーダル上で選択肢を提示する
		- はてなブログ側の内容で上書きする
		- Obsidian vault 側の内容で上書きする
		- Obsidian vault 側に、はてなブログ側の内容のコピーを別途一時ファイルとして保存し、後ほど改めて同期する
	- はてなブログ側で対応する記事が見つからない or 削除済みの場合はエラー

上記の機能で初回リリースとしては十分であり、記事の削除については初回リリースでは実装しないことにする
## 調査
- はてなブログと記事情報をやり取りする際に用いる Web API