# 06. プロジェクト開発フェーズと図

このカテゴリでは、プロジェクト開発の各フェーズでよく作られる成果物を洗い出し、
それぞれをMermaidまたはGraphvizでどう表現するかを学びます。
既存の「03. 図の選び方と整理法」が「伝えたいこと」起点のマッピングであるのに対し、
このカテゴリは「開発フェーズ」起点のマッピングです。

## 学習目標

- 開発フェーズごとに、どんな成果物が作られるかを説明できる
- 各成果物をMermaid/Graphvizのどの図で表現するか選べる
- Mermaid/Graphvizで表現できない成果物を把握し、代替手段を判断できる

## 教材一覧

| # | 教材 | 内容 |
|---|------|------|
| 01 | [要件定義フェーズ](01-requirements-phase.md) | 業務フロー図・概念データモデル・要件トレーサビリティ |
| 02 | [基本設計フェーズ](02-basic-design-phase.md) | システム構成図・画面遷移図・ER図・シーケンス概要図 |
| 03 | [詳細設計フェーズ](03-detailed-design-phase.md) | クラス図・ステートマシン図・詳細シーケンス図・DFD |
| 04 | [実装・テストフェーズ](04-implementation-testing-phase.md) | モジュール依存図・テストケース分岐図・テストスケジュール |
| 05 | [リリース・運用保守フェーズ](05-release-operations-phase.md) | デプロイフロー図・インフラ構成図・障害対応フロー |
| 06 | [アジャイル開発での当てはめ](06-agile-artifacts.md) | スプリント計画・開発サイクル図・カタログのアジャイルへの対応付け |

## フェーズ×成果物×図 全体マッピング表

| フェーズ | 主な成果物 | 推奨ツール | 図の種類 | 備考 |
|---|---|---|---|---|
| 要件定義 | 業務フロー図 | Mermaid | flowchart | スイムレーンは`subgraph`で代用 |
| 要件定義 | 概念データモデル | Mermaid | erDiagram | 詳細化は基本設計のER図で行う |
| 要件定義 | 要件トレーサビリティ | Mermaid | requirementDiagram | [01-mermaid-basics/04](../01-mermaid-basics/04-other-diagrams.md)参照 |
| 要件定義 | ユースケース図 | ─ | 非対応 | 専用記法なし。flowchartでの代替表現を示す |
| 基本設計 | システム構成図 | Mermaid/Graphviz | flowchart / DOT | 外部連携が多い場合はGraphviz推奨 |
| 基本設計 | 画面遷移図 | Mermaid | stateDiagram | 画面を状態として表現 |
| 基本設計 | ER図（論理） | Mermaid | erDiagram | |
| 基本設計 | シーケンス概要図 | Mermaid | sequenceDiagram | |
| 詳細設計 | クラス図 | Mermaid | classDiagram | |
| 詳細設計 | ステートマシン図 | Mermaid | stateDiagram | 複合状態を扱う |
| 詳細設計 | 詳細シーケンス図 | Mermaid | sequenceDiagram | alt/loopを扱う |
| 詳細設計 | DFD（データフロー図） | Graphviz | DOT | Mermaid非対応のため代替 |
| 実装・テスト | モジュール依存図 | Graphviz | DOT | 複雑化時は[03-03](../03-diagram-patterns/03-complex-diagram-organization.md)の整理法を参照 |
| 実装・テスト | テストケース分岐図 | Mermaid | flowchart | デシジョンテーブルの可視化 |
| 実装・テスト | テストスケジュール | Mermaid | gantt | |
| リリース・運用 | デプロイフロー図 | Mermaid | flowchart | |
| リリース・運用 | インフラ構成図 | Graphviz | DOT | ネットワーク階層表現 |
| リリース・運用 | 障害対応フロー | Mermaid | flowchart | |
| アジャイル | スプリント計画 | Mermaid | gantt | |
| アジャイル | バーンダウンチャート | ─ | 非対応 | 他ツール（表計算/BIツール等）併用を明記 |

「非対応」の項目は隠さず明記しています。Mermaid/Graphvizの限界を理解した上で、
必要に応じて他ツールと併用してください。

## 学習の進め方

01 → 06 の順に進めることを推奨します。
ウォーターフォール型の開発フェーズ（01〜05）を通して図の使い分けを学んだあと、
06でアジャイル開発への当てはめ方を確認してください。
