# 図の種類 拡張（quadrantChart / timeline / gitGraph / kanban / C4Context / block-beta）設計書

- 日付: 2026-07-12
- 対象: `diagram-as-code-tutorial` の既存6ファイルへの分散追記（新規カテゴリ・新規ファイルは作らない）
- 背景: 現状カバー済みの図種は flowchart / sequence / class / state / ER / gantt /
  mindmap / requirement / DOT(Graphviz) / architecture-beta。mermaid.ai公式チュートリアル
  ページ（<https://mermaid.ai/open-source/ecosystem/tutorials.html>）を起点に教材の
  図種カバレッジを見直した結果、実務でよく使われる6種が未収録・または脚注で
  見送られていることが判明した。本設計はこれらを追加し、教材の活用方法を広げる。

## 1. 目的

「未収録の図種を追加検討」「既存の図種の活用パターンを深掘り」「教材構成・導線の改善」の
3方向を、既存6ファイルへの分散追記という1つの作業単位で同時に達成する。

新規図種はいずれも「開発フェーズの成果物」という06章の既存パターンに乗せて導入し、
構文単体の紹介ではなく実務文脈の中で教える。

## 2. 現状分析（実施済み）

`grep`による全文検索で、対象6図種の収録状況を確認した。

| 図種 | 現状 |
|---|---|
| architecture-beta | **実装済み**（06-release-operations-phase.mdにGraphviz比較付きで実装） |
| C4Context | 03-basic-design-phase.md:103に脚注のみ。「本教材では扱わず、ROADMAP.md参照」と明記され意図的に見送り |
| quadrantChart / gitGraph / kanban / timeline / block-beta | 本文・脚注含め一切登場しない |

architecture-betaとC4Contextは役割が重なる（どちらもアーキテクチャ図）ため、
両方追加すると冗長になるとユーザーに指摘したが、ユーザーは両方の実装を選択した。
理由: C4Contextは標準化されたコンテキスト図記法として、architecture-betaとは
異なる粒度（システム境界と外部関係者の関係）を教える価値があるため。

## 3. ファイル別の追加内容

### 3.1 `docs/06-project-phase-diagrams/02-requirements-phase.md` — quadrantChart

- 成果物「要件優先度マトリクス」を新設（既存4成果物: 業務フロー図/概念データモデル/
  要件トレーサビリティ/ユースケース図 に追加、5番目）
- 対応表に行追加: `要件優先度マトリクス | quadrantChart | 影響度×工数の2軸で要件の優先順位を可視化できる`
- ソースコード例: 4〜5件の要件を影響度(y軸)×工数(x軸)でプロットする例
- 演習課題に1件追加（自分の要件を3件選びquadrantChartでプロットする）
- 理解度チェックに1件追加

### 3.2 `docs/06-project-phase-diagrams/01-diagram-catalog-overview.md` — timeline + マッピング表拡張

- 全体マッピング表に新規4行を追加（既存の20行に追加、リンクは各対応ファイルへ）:
  - `要件定義 | 要件優先度マトリクス | Mermaid | quadrantChart | 詳細は02-requirements-phase.md参照`
  - `基本設計 | システムコンテキスト図 | Mermaid | C4Context | 実験的機能。詳細は03-basic-design-phase.md参照`
  - `リリース・運用 | ブランチ戦略図 | Mermaid | gitGraph | 詳細は06-release-operations-phase.md参照`
  - `アジャイル | カンバンボード | Mermaid | kanban | 詳細は07-agile-artifacts.md参照`
- 「実ソースコード」セクションに、既存のflowchart例（表の読み方）の後段として
  timeline例を新設: 要件定義〜リリース・運用の全フェーズを俯瞰する年表
- この章は「全体像を示す索引」という位置づけのため、特定フェーズに属さない
  timelineの置き場所として適切
- 演習課題・理解度チェックに1件ずつ追加

### 3.3 `docs/06-project-phase-diagrams/03-basic-design-phase.md` — C4Context

- 103行目の脚注（`> **補足:** ...本教材では扱わず...`）を削除し、
  成果物「システムコンテキスト図」として正式な対応表の行・ソースコード例に格上げ
- 既存のシステム構成図（Graphviz、複雑版）の直後に配置し、
  「Graphvizの自由なクラスタ表現」と「C4Contextの標準化された記法
  （Person/System/Rel等）」を対比させる「コードのポイント」を書く
- C4Contextは公式ドキュメントで今も"experimental diagram"と明記されている点を
  本文に明示する（学習者が実務投入時に注意できるように）
- この教材で身につくこと・演習課題・理解度チェックに1件ずつ追加

### 3.4 `docs/06-project-phase-diagrams/06-release-operations-phase.md` — gitGraph

- 成果物「ブランチ戦略図」を新設（既存3成果物: デプロイフロー図/インフラ構成図/
  障害対応フロー に追加、4番目）
- 対応表に行追加: `ブランチ戦略図 | gitGraph | ブランチの分岐・マージ・リリースタイミングを可視化できる`
- ソースコード例: main/develop/feature/releaseブランチの分岐・マージ例
- 演習課題・理解度チェックに1件ずつ追加

### 3.5 `docs/06-project-phase-diagrams/07-agile-artifacts.md` — kanban

- 成果物別対応表に「カンバンボード」を追加（既存4成果物: スプリント計画/
  開発サイクル図/バックログ優先度/バーンダウンチャート に追加、5番目）
- 対応表に行追加: `カンバンボード | kanban | Todo/Doing/Doneのタスク状態遷移を可視化できる`
- ソースコード例: スプリント内のタスクをTodo/Doing/Doneで管理する例
- 演習課題・理解度チェックに1件ずつ追加

### 3.6 `docs/05-real-world-examples/01-skill-architecture-diagram.md` — block-beta

- 既存のGraphviz版Skillアーキテクチャ図の後段に、同じ構成をMermaidの
  `block-beta`で書いた版を追加
- 「基本文法・プロパティ解説」表に`block-beta`関連行を追加
- 「コードのポイント」で使い分け観点を明示: ネイティブ記法（依存パッケージ不要・
  GitHub上でそのままプレビュー可）vs Graphviz（自由なレイアウト制御・
  複雑な階層に強い）
- 「この教材で身につくこと」「演習課題」「理解度チェック」に1件ずつ追加

## 4. バージョン注記の方針

既存の`architecture-beta`（v11.1.0+）・`xychart-beta`（v10.6.0+）と同じ慣習に倣い、
各図の「コードのポイント」に対応バージョンを明記する。

| 図の種類 | 状態 | 記載方針 |
|---|---|---|
| quadrantChart | 安定版 | 実装時に公式リリースノートで最終確認のうえ`vX.Y.0以降が必要`と記載 |
| gitGraph | 安定版（成熟） | 基本機能は長期間安定と記載。並列コミット表示のみ`v10.8.0以降`と注記 |
| timeline | **実験的機能**（公式ドキュメントに明記、継続中） | 「実験的機能」である旨を本文に明示し、実装時にバージョンを最終確認 |
| kanban | 比較的新しい | `v11.4.0で追加`と記載（Mermaid公式ブログで確認済み） |
| C4Context | **実験的機能**（長期間、公式に構文変更の可能性ありと明記） | 導入時期の記載よりも「安定版化されていない」注意喚起を優先する |
| block-beta | ベータ（構文名に`-beta`が残る） | 実装時に公式リリースノートで最終確認のうえ`vX.Y.0以降が必要`と記載 |

「実装時に最終確認」とした図種は、実装フェーズで
[Mermaid公式リリースノート](https://github.com/mermaid-js/mermaid/releases)を
確認してから本文に反映する。timelineとC4Contextは「実験的機能」表記を必須とする。

## 5. 付随更新（ナビゲーション）

| ファイル | 変更内容 |
|---|---|
| `QUICK-REFERENCE.md` | 「Mermaid 図の種類早見表」に7行追加（新規6種 + 既存だが未掲載のarchitecture-beta）。既存表と同じ形式（図の種類/キーワード/参照リンク） |
| `ROADMAP.md` | 「将来の拡張候補」からC4Contextの行を削除し、「現状のスコープ」側に6種を追記（実装済みとして昇格） |
| `CHANGELOG.md` | `[Unreleased]`のAddedに今回追加した6図種を追記 |
| `MASTER-INDEX.md` | 変更不要（対象行の説明文は図種列挙スタイルではないため） |

## 6. 検証方法

1. 新規Mermaidコード例について、GitHub/VS CodeでのMermaidプレビュー確認を行う
   （`00_STYLE_GUIDE.md`「6. 図表教材固有ルール」準拠）。
2. 実装時に各図種のMermaid最小バージョンを公式リリースノートで確認し、
   本文の版数注記を確定させる。
3. `00_STYLE_GUIDE.md`「7. レビュー用チェックリスト」に沿って各ファイルをセルフレビューする。
4. `QUICK-REFERENCE.md`・`01-diagram-catalog-overview.md`のリンクが実在ファイルの
   該当セクションを指しているか確認する。
5. C4Context追加後、03-basic-design-phase.mdの「位置づけ」段落が矛盾なく
   読めるか確認する（脚注削除に伴う文脈の整合性チェック）。

## 7. 未確定・将来課題

- quadrantChart / block-beta の正確な導入バージョンは、Web調査で一次情報
  （GitHubリリースノート）まで確定できなかったため、実装フェーズで確認する。
- 電子書籍化時のtext複製ルール・コードのポイント箇条書きは、
  既存の規約（`2026-07-11-mermaid-code-visibility-design.md`）をそのまま適用する
  （新規スタイルルールの追加は不要）。
