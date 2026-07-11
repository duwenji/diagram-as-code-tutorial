# SKILL.mdへの図の組み込み

## この教材で身につくこと

- SKILL.md内でMermaid図を使う典型パターン
- 図と本文説明を両立させる配置方法

## 概要

SKILL.mdはSkillの目的・使い方をAIエージェントと人間の両方に
伝えるドキュメントです。図を添えることで処理の全体像が伝わりやすくなります。

## 位置づけ

01-03カテゴリで学んだMermaid/Graphvizの構文を、実際のSKILL.md
というフォーマットに落とし込む最初の教材です。

## 基本文法・プロパティ解説

### 配置の基本方針

| 配置場所 | 目的 |
|---|---|
| 概要セクションの直後 | Skill全体の処理フローを示す |
| 個別手順の説明の直後 | その手順の詳細（分岐・ループ）を示す |
| トラブルシューティング欄 | エラー時の分岐を示す |

## 実ソースコード

SKILL.mdの一部を想定した例です。

```markdown
---
name: diagram-review
description: 図表付きドキュメントをレビューするSkill
---

# diagram-review Skill

## 処理の流れ

\`\`\`mermaid
flowchart TD
    Input[Markdown受領] --> Detect{図が含まれるか}
    Detect -->|Yes| Render[図の構文チェック]
    Detect -->|No| Skip[図なしとして通過]
    Render --> Report[レビュー結果を返す]
    Skip --> Report
\`\`\`

## 使い方

1. レビュー対象のMarkdownファイルを渡す
2. 図の構文エラーがあれば指摘される
```

**コードのポイント:**

- `---`で囲んだYAML frontmatterに`name`/`description`を書くのがSKILL.mdの決まり
- 見出し（`## 処理の流れ`）の直後に \`\`\`mermaid ブロックを置くと、処理全体が一目で伝わる
- 図の直後に「## 使い方」で具体的な手順を続けることで、図と文章が補完し合う

### この図を生成AIに作らせるプロンプト例

```markdown
diagram-review Skillの処理フローをflowchartで書いてください。
「Markdown受領→図が含まれるか判定→構文チェック or 通過→
レビュー結果を返す」の4ステップにし、日本語ラベルで
SKILL.mdにそのまま貼り付けられる形にしてください。
```

このプロンプトから得られる図が、上のSKILL.md例に埋め込まれている
flowchartです。

## 演習課題

1. 自分のSkillの処理フローをMermaidで書き、SKILL.mdに追記せよ

## 理解度チェック

- [ ] SKILL.md内のどこに図を置くと伝わりやすいか説明できる
- [ ] コードフェンスのネスト（```markdown内の```mermaid）を正しく書ける

---

[← 04. 生成AIでのSkill開発への適用 目次](00-README.md) | [次へ: 生成AIへの図生成プロンプト →](02-prompting-ai-to-generate-diagrams.md)
