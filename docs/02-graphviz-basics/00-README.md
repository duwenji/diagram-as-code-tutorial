# 02. Graphviz基礎

このカテゴリでは、DOT言語でグラフを記述し、Graphvizでレイアウトを
制御する基本を学びます。Mermaidより厳密な構文で、大規模・複雑な
構造図を描く力を養います。

## 学習目標

- digraph/graphの基本構文が書ける
- ノード・エッジの属性（形・色・ラベル）を制御できる
- rankdirとクラスタで見やすいレイアウトを設計できる

## 教材一覧

| # | 教材 | 内容 |
|---|------|------|
| 01 | [DOT言語の基本](01-dot-language-basics.md) | digraph・ノード・エッジ |
| 02 | [ノード・エッジ属性](02-node-edge-attributes.md) | shape・color・label |
| 03 | [レイアウト制御](03-layout-and-rankdir.md) | rankdir・クラスタ |

## 図の確認方法

このカテゴリの `.dot` ファイルは `examples/` 配下にあり、対応する
`.png` を同じフォルダに置いています。`.dot` を修正した場合は
リポジトリルートで次を実行してPNGを再生成してください。

```bash
npm run graphviz:render
```

## 学習の進め方

01 → 03 の順に進めることを推奨します。
