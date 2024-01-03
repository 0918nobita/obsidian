---
aliases:
  - Obsidian Git で conflict を防ぐ工夫
created: 2024-01-04
tags:
  - Obsidian
  - 技術/趣味プログラミング
---
そもそも複数端末(PC or モバイル)で同じデフォルトブランチ(`main` や `master`)に push したり pull したりするのはコンフリクトを起こしやすい。

端末ごとに対応する専用のブランチを用意し、それぞれをデフォルトブランチにマージすることなく均等に cherry-pick し続ける運用に変えてみるのはどうだろうか？
