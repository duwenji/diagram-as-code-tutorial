# プロジェクト開発フェーズ別 図カタログ 設計書

- 日付: 2026-07-11
- 対象: `diagram-as-code-tutorial` に新規カテゴリ `docs/06-project-phase-diagrams/` を追加
- 背景: 既存教材（01〜05）は「図の種類」起点の構成。本教材は「開発フェーズの成果物」起点で
  Mermaid/Graphvizの対応方法を整理し、実務での使い所を補完する。

## 1. 目的

プロジェクト開発の各フェーズでよく作られる成果物を洗い出し、それぞれをMermaidまたは
Graphvizでどう表現するかをカタログ化する。既存の「03-diagram-patterns」が
「伝えたいこと→図の種類」という目的軸のマッピングであるのに対し、本教材は
「開発フェーズ→成果物→図の種類」というプロジェクト工程軸のマッピングを提供し、
実務での適用イメージを補完する。

対応するツールが存在しない成果物（ユースケース図、バーンダウンチャート等）についても、
代替手段の有無を含めて正直に明記する。

## 2. 全体構成

新規カテゴリ `docs/06-project-phase-diagrams/` を追加し、既存のファイル構成ルール
（`00-README.md` + 連番教材）に従う。フェーズの背骨はウォーターフォール型とし、
最後にアジャイル特有の成果物を1ファイルでカバーする。

| # | ファイル | 内容 |
|---|---|---|
| 00 | `00-README.md` | 学習目標・教材一覧・フェーズ×成果物×図の全体マッピング表 |
| 01 | `01-requirements-phase.md` | 要件定義フェーズ |
| 02 | `02-basic-design-phase.md` | 基本設計フェーズ |
| 03 | `03-detailed-design-phase.md` | 詳細設計フェーズ |
| 04 | `04-implementation-testing-phase.md` | 実装・テストフェーズ |
| 05 | `05-release-operations-phase.md` | リリース・運用保守フェーズ |
| 06 | `06-agile-artifacts.md` | アジャイル開発での当てはめ |

## 3. 全体マッピング表（`00-README.md`）

| フェーズ | 主な成果物 | 推奨ツール | 図の種類 | 備考 |
|---|---|---|---|---|
| 要件定義 | 業務フロー図 | Mermaid | flowchart | スイムレーンは`subgraph`で代用 |
| 要件定義 | 概念データモデル | Mermaid | erDiagram | 詳細化は基本設計のER図で行う |
| 要件定義 | 要件トレーサビリティ | Mermaid | requirementDiagram | 01-mermaid-basics/04参照 |
| 要件定義 | ユースケース図 | ─ | 非対応 | 専用記法なし。flowchartでの代替表現を示す |
| 基本設計 | システム構成図 | Mermaid/Graphviz | flowchart / DOT | 外部連携が多い場合はGraphviz推奨 |
| 基本設計 | 画面遷移図 | Mermaid | stateDiagram | 画面を状態として表現 |
| 基本設計 | ER図（論理） | Mermaid | erDiagram | |
| 基本設計 | シーケンス概要図 | Mermaid | sequenceDiagram | |
| 詳細設計 | クラス図 | Mermaid | classDiagram | |
| 詳細設計 | ステートマシン図 | Mermaid | stateDiagram | 複合状態を扱う |
| 詳細設計 | 詳細シーケンス図 | Mermaid | sequenceDiagram | alt/loopを扱う |
| 詳細設計 | DFD（データフロー図） | Graphviz | DOT | Mermaid非対応のため代替 |
| 実装・テスト | モジュール依存図 | Graphviz | DOT | 複雑化時は03-03の整理法を参照 |
| 実装・テスト | テストケース分岐図 | Mermaid | flowchart | デシジョンテーブルの可視化 |
| 実装・テスト | テストスケジュール | Mermaid | gantt | |
| リリース・運用 | デプロイフロー図 | Mermaid | flowchart | |
| リリース・運用 | インフラ構成図 | Graphviz | DOT | ネットワーク階層表現 |
| リリース・運用 | 障害対応フロー | Mermaid | flowchart | |
| アジャイル | スプリント計画 | Mermaid | gantt | |
| アジャイル | バーンダウンチャート | ─ | 非対応 | 他ツール（表計算/BIツール等）併用を明記 |

「非対応」項目は隠さず明記する方針とする。

## 4. 各フェーズファイルの構成

既存教材（01〜05）と同じ見出し順序（スタイルガイド準拠）を踏襲する。
「基本文法・プロパティ解説」はフェーズ専用の成果物別詳細表に読み替える。

標準構成:

1. この教材で身につくこと
2. 概要
3. 位置づけ（`00-README.md`全体表のうち該当行を深掘りする教材、と明記）
4. 基本文法・プロパティ解説（成果物別の詳細表）
5. 実ソースコード（成果物ごとに1例、text複製+mermaidフェンスのセット。Graphvizは`examples/`配下に`.dot`+`.png`）
6. 演習課題
7. 理解度チェック
8. 前後リンク

### ファイル別のコード例内訳

| ファイル | コード例 | 例数 |
|---|---|---|
| 01-requirements-phase.md | 業務フロー図(flowchart) / 概念データモデル(erDiagram) / 要件トレーサビリティ(requirementDiagram) / ユースケース図の代替(flowchart) | 4 |
| 02-basic-design-phase.md | システム構成図(flowchart) / システム構成図・複雑版(Graphviz DOT) / 画面遷移図(stateDiagram) / ER図(erDiagram) | 4 |
| 03-detailed-design-phase.md | クラス図(classDiagram) / ステートマシン図(stateDiagram) / 詳細シーケンス図(sequenceDiagram) / DFD(Graphviz DOT) | 4 |
| 04-implementation-testing-phase.md | モジュール依存図(Graphviz DOT) / テストケース分岐図(flowchart) / テストスケジュール(gantt) | 3 |
| 05-release-operations-phase.md | デプロイフロー図(flowchart) / インフラ構成図(Graphviz DOT) / 障害対応フロー(flowchart) | 3 |
| 06-agile-artifacts.md | スプリント計画(gantt) / 開発サイクル図(flowchart) ＋ バックログ優先度表・フェーズ対応表（表のみ、コード例なし） | 2 |

合計 約20個のMermaid/Graphviz実ソースコード例を新規作成する。

`02-basic-design-phase.md`のシステム構成図はMermaid版とGraphviz版を両方示し、
複雑さに応じた選択基準（03-01「Mermaid vs Graphviz」参照）を実例で補強する。

## 5. 付随更新（ナビゲーション）

| ファイル | 変更内容 |
|---|---|
| `MASTER-INDEX.md` | 「06. プロジェクト開発フェーズと図」セクションを追加、7ファイルへのリンクを記載 |
| `README.md` | 学習の進め方に手順7を追加、カテゴリ入口に06のリンクを追加 |
| `ROADMAP.md` | 現状のスコープに「開発フェーズ別の図カタログ」を追加 |
| `CHANGELOG.md` | `[Unreleased]` の Added に今回追加分を記載 |
| `docs/03-diagram-patterns/02-choosing-the-right-diagram.md` | 末尾に「フェーズ別の詳細は06参照」の相互参照リンクを追加 |

`docs/06-project-phase-diagrams/00-README.md`自体にも、既存カテゴリと同様に
学習目標・教材一覧・学習の進め方を記載する。

## 6. 検証方法

1. 新規Mermaidコード例について、GitHub/VS CodeでのMermaidプレビュー確認を行う
   （スタイルガイド「6. 図表教材固有ルール」準拠）。
2. 新規Graphviz例（`examples/`配下の`.dot`）を追加後、`npm run graphviz:render`を実行し
   `.png`を最新化する。
3. `00_STYLE_GUIDE.md`「7. レビュー用チェックリスト」に沿って各ファイルをセルフレビューする。
4. `MASTER-INDEX.md`・`README.md`のリンクが実在ファイルを指しているか確認する。
5. 既存の`02-choosing-the-right-diagram.md`との内容重複がないか（軸が異なることを含め）確認する。

## 7. 未確定・将来課題

- C4Context等のアーキテクチャ専用記法は、ROADMAP.mdに既存の将来拡張候補として
  記載済みのため、本教材では深入りせず「基本設計フェーズ」内で選択肢として
  軽く言及するにとどめる。
- 電子書籍化時のtext複製ルール・コードのポイント箇条書きは、
  `2026-07-11-mermaid-code-visibility-design.md`で定義済みの規約をそのまま適用する
  （新規スタイルルールの追加は不要）。
