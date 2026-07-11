# その他の図（ER・gantt・mindmap・requirementDiagram）

## この教材で身につくこと

- erDiagramでのデータ構造表現
- ganttでのスケジュール表現
- mindmapでのアイデア整理
- requirementDiagramでの要件・実装要素の対応表現

## 概要

Mermaidにはflowchart/sequence/class/state以外にも、目的に応じた
図の種類が用意されています。ここでは代表的な4種を扱います。

## 位置づけ

これらは頻度は低いものの、要件定義・スケジュール調整・
アイデア出しなど、Skill開発の周辺工程で役立ちます。

## 基本文法・プロパティ解説

### 主な要素

| 図の種類 | 主なキーワード | 用途 |
|---|---|---|
| erDiagram | `\|\|--o{`, `}o--\|\|` | データ構造・関連 |
| gantt | `dateFormat`, `section` | スケジュール |
| mindmap | `root((...))` | アイデア整理 |
| requirementDiagram | `requirement`, `element`, `satisfies` | 要件と実装の対応 |

## 実ソースコード

```mermaid
erDiagram
    SKILL ||--o{ TOOL_CALL : invokes
    TOOL_CALL }o--|| TOOL : targets
    SKILL {
        string name
        string description
    }
    TOOL {
        string name
        string endpoint
    }
```

```mermaid
gantt
    title Skill開発スケジュール
    dateFormat YYYY-MM-DD
    section 設計
    要件整理 :a1, 2026-07-01, 3d
    図表設計 :a2, after a1, 2d
    section 実装
    Skill実装 :a3, after a2, 5d
    テスト :a4, after a3, 3d
```

```mermaid
mindmap
  root((AI Skill開発))
    設計
      要件定義
      図表化
    実装
      SKILL.md
      ツール連携
    検証
      テスト
      レビュー
```

```mermaid
requirementDiagram
    requirement SkillDoc {
      id: 1
      text: SkillはSKILL.mdで説明される
      risk: medium
      verifymethod: inspection
    }

    functionalRequirement DiagramSupport {
      id: 2
      text: SKILL.mdは図表を含められる
      risk: low
      verifymethod: inspection
    }

    element SkillMdFile {
      type: document
    }

    SkillDoc - satisfies -> DiagramSupport
    DiagramSupport - traces -> SkillMdFile
```

## 演習課題

1. SkillとToolの1対多関係をerDiagramで書け
2. 自分のSkill開発タスクを3つ、mindmapで整理せよ

## 理解度チェック

- [ ] erDiagramの多重度記法（`\|\|`, `o{`）が説明できる
- [ ] ganttでタスクの依存関係（`after`）を表現できる
- [ ] requirementDiagramで要件と実装要素の対応が書ける

---

[← 前へ: class/stateDiagram](03-state-and-class-diagram.md) | [次へ: 02. Graphviz基礎 →](../02-graphviz-basics/00-README.md)
