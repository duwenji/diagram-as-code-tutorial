# Changelog

## [Unreleased]

### Added

- 初版教材一式（01-mermaid-basics 〜 05-real-world-examples）
- 電子書籍化パイプライン（css-tutorialと同一構成）
- Graphviz例のPNGレンダリングスクリプト
- 06-project-phase-diagramsカテゴリ（プロジェクト開発フェーズ別の図カタログ、全8ファイル）
- 06-project-phase-diagramsおよび05-real-world-examplesに、quadrantChart /
  timeline / gitGraph / kanban / C4Context / block-betaの6図種を追加
  （02-requirements-phase.md, 01-diagram-catalog-overview.md,
  03-basic-design-phase.md, 06-release-operations-phase.md,
  07-agile-artifacts.md, 05-real-world-examples/01-skill-architecture-diagram.md）
- 01-mermaid-basicsに「05-release-history.md」（Mermaidのリリース履歴、
  timeline図によるバージョン年表）を追加
- 02-graphviz-basicsに「04-release-history.md」（Graphvizのリリース履歴、
  バージョン番号方式の変遷とクラスタ図例`05-release-history.dot`）を追加

### Changed

- 全教材の実ソースコードに「コードのポイント」箇条書き解説を追加
- Mermaidの実ソースコードに、電子書籍化しても消えない```text複製を追加
- 06-project-phase-diagramsの全体マッピング表を`00-README.md`から新規
  `01-diagram-catalog-overview.md`へ移設し、電子書籍に反映されるよう修正
  （既存教材は02〜07へ連番繰り下げ）
- `docs/00-COVER.md`に06カテゴリ（開発フェーズ別図カタログ）の記載を追加
  （表紙が06カテゴリ追加後も5カテゴリ分のままだったため）
- KDPメタデータ（`diagram-as-code-tutorial.metadata.yaml` /
  `diagram-as-code-tutorial.kdp.yaml`）の紹介文・キーワードに
  06カテゴリの内容を追加
- 05カテゴリ最終教材の「トップに戻る」リンクを、06カテゴリ追加に伴い
  「次へ: 06. プロジェクト開発フェーズと図」への前後リンクに修正
- 06カテゴリ最終教材（07-agile-artifacts.md）の末尾リンクを、
  真の最終教材として「トップに戻る」に修正
- QUICK-REFERENCE.mdのMermaid早見表にarchitecture-betaと新規6図種を追加
- ROADMAP.mdのC4Contextを将来拡張候補から現状スコープへ移動
- 03-basic-design-phase.mdのC4Context脚注を正式な成果物セクションに格上げ
