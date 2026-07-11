# 検証チェックリスト

## コンテンツ

- [ ] 全カテゴリに `00-README.md` があり、教材一覧が最新である
- [ ] 全レッスンが00_STYLE_GUIDEの見出し順に従っている
- [ ] 全レッスンに前後リンクがある
- [ ] MASTER-INDEX.mdのリンクが全て存在するファイルを指している

## Graphviz

- [ ] `docs/**/examples/*.dot` すべてに対応する `.png` がある
- [ ] `npm run graphviz:render` が成功する（終了コード0）

## Mermaid

- [ ] 全Mermaidコードブロックが `mermaid` 言語タグ付きである
- [ ] VS Code等のプレビューでMermaid図が壊れずに表示される

## 電子書籍ビルド

- [ ] `npm run ebook:step1` が `ebook-output/diagram-as-code-tutorial.manuscript.md` を生成する
- [ ] `npm run ebook:step3` が `ebook-output/diagram-as-code-tutorial.epub` と `.pdf` を生成する
- [ ] 生成された `.epub` / `.pdf` のファイルサイズが0バイトでない
