# Skill開発ドキュメントのサンプル

## この教材で身につくこと

- 複数の図を1つのドキュメントにまとめる構成力
- SKILL.md相当の完成ドキュメントを組み立てる流れ

## 概要

これまでの教材で作った図を1つのSkill開発ドキュメントとして
統合します。全体構造・処理フロー・エージェント間のやり取りを
1つのドキュメントで示す例です。

## 位置づけ

本チュートリアルの総仕上げです。01-04カテゴリすべての
知識を1つのサンプルとして統合します。

## 基本文法・プロパティ解説

サンプルドキュメントの構成は次の順序にしています。

| セクション | 使う図 |
|---|---|
| 全体構造 | Graphviz（アーキテクチャ図） |
| 処理フロー | Mermaid flowchart |
| エージェント間のやり取り | Mermaid sequenceDiagram |

## 実ソースコード

```markdown
---
name: multi-agent-review
description: 複数エージェントでコードレビューを行うSkill
---

# multi-agent-review Skill

## 全体構造

\`\`\`dot
digraph Architecture {
  rankdir=LR;
  User -> Orchestrator -> ReviewAgent;
  Orchestrator -> FixAgent;
}
\`\`\`

## 処理フロー

\`\`\`mermaid
flowchart TD
    Input[レビュー依頼] --> Review[ReviewAgentが指摘]
    Review --> HasIssue{指摘があるか}
    HasIssue -->|Yes| Fix[FixAgentが修正案を作成]
    HasIssue -->|No| Done[完了]
    Fix --> Done
\`\`\`

## エージェント間のやり取り

\`\`\`mermaid
sequenceDiagram
    participant Orchestrator
    participant ReviewAgent
    participant FixAgent

    Orchestrator->>ReviewAgent: レビュー依頼
    ReviewAgent-->>Orchestrator: 指摘一覧
    Orchestrator->>FixAgent: 修正依頼
    FixAgent-->>Orchestrator: 修正案
\`\`\`
```

**コードのポイント:**

- 「全体構造」はGraphviz、「処理フロー」「エージェント間のやり取り」はMermaidと使い分けている
- 全体構造（依存関係）→処理フロー（分岐）→やり取り（時系列）の順で、抽象度の高い図から詳細な図へ展開している
- 3つの図はすべて同じSkill（`multi-agent-review`）を異なる視点で説明しており、互いに矛盾しない構成になっている

## 演習課題

1. 自分のSkillについて、上記と同じ3セクション構成の
   ドキュメントを作成せよ

## 理解度チェック

- [ ] Graphviz・Mermaid flowchart・sequenceDiagramを
      1つのドキュメントに使い分けて配置できる
- [ ] 全体構造から詳細への流れでドキュメントを構成できる

---

[← 前へ: マルチエージェントのシーケンス図](02-multi-agent-sequence-diagram.md) | [次へ: 06. プロジェクト開発フェーズと図 →](../06-project-phase-diagrams/00-README.md)
