# diagram-as-code-tutorial 設計書

- 日付: 2026-07-11
- 対象: `tutorials/diagram-as-code-tutorial`(新規・単独Gitリポジトリ)
- 参照元: `tutorials/css-tutorial`(フォルダ・ファイル構成、教材スタイル、電子書籍化パイプラインの雛形)
- 関連メモ: `tutorials/ideas/mermaid-study-notes.md`(内容の一部を素材として吸収)

## 1. 目的

生成AIでSkill開発(SKILL.md作成、エージェント設計、ワークフロー定義など)を行う際に、
MermaidとGraphvizを使って図を書く力を体系的に身につける教材を作成する。
css-tutorialと同一のフォルダ・ファイル構成・スタイルガイドに従う。

## 2. スコープ

### 含むもの

- `docs/` 配下の連番カテゴリ構成による学習教材本体(5カテゴリ)
- トップレベルの索引・ガイド類(README, 00_STYLE_GUIDE, MASTER-INDEX, QUICK-REFERENCE, ROADMAP, CHANGELOG, CONTRIBUTING, LICENSE, PUBLISHING, VALIDATION_CHECKLIST, COMPLETION-REPORT)
- css-tutorialと同一の電子書籍化パイプライン一式(`package.json`, `.github/workflows`, `.github/skills-config/ebook-build/*`)
- Graphviz例のレンダリング用スクリプト(`tools/render-graphviz.js`)
- 実際に `winget` で Graphviz をインストールし、`dot` コマンドで例のPNGを生成
- 実際に ebook-build パイプライン(step1〜step3)を実行し、EPUB/PDFが生成できることを確認
- 新規フォルダを単独Gitリポジトリとしてinitし、ローカルコミットのみ行う(GitHubへのpushはしない)

### 含まないもの

- GitHubリモートリポジトリの作成・push
- KDP(Amazon)への実際の出品作業
- css-tutorial本体への変更
- Graphviz以外の図表記法(PlantUML等)の追加(将来拡張の余地として名前は"diagram-as-code"にしているが今回のスコープ外)

## 3. フォルダ・ファイル構成

```
diagram-as-code-tutorial/
├── .gitattributes, .gitignore
├── .github/
│   ├── ISSUE_TEMPLATE/{bug_report.yml, config.yml, feature_request.yml}
│   ├── copilot-instructions.md
│   ├── pull_request_template.md
│   ├── skills-config/ebook-build/
│   │   ├── diagram-as-code-tutorial.build.json
│   │   ├── diagram-as-code-tutorial.metadata.yaml
│   │   ├── diagram-as-code-tutorial.kdp.yaml
│   │   ├── invoke-build.ps1
│   │   ├── mermaid.epub.config.json
│   │   └── mermaid.puppeteer.config.json
│   └── workflows/{validate.yml, pages.yml}
├── 00_STYLE_GUIDE.md
├── CHANGELOG.md
├── COMPLETION-REPORT.md
├── CONTRIBUTING.md
├── LICENSE
├── MASTER-INDEX.md
├── PUBLISHING.md
├── QUICK-REFERENCE.md
├── README.md
├── ROADMAP.md
├── VALIDATION_CHECKLIST.md
├── package.json
├── tools/
│   └── render-graphviz.js
├── docs/
│   ├── 00-COVER.md
│   ├── 01-cover-prompt.md
│   ├── 01-mermaid-basics/
│   │   ├── 00-README.md
│   │   ├── 01-flowchart.md
│   │   ├── 02-sequence-diagram.md
│   │   ├── 03-state-and-class-diagram.md
│   │   └── 04-other-diagrams.md
│   ├── 02-graphviz-basics/
│   │   ├── 00-README.md
│   │   ├── 01-dot-language-basics.md
│   │   ├── 02-node-edge-attributes.md
│   │   ├── 03-layout-and-rankdir.md
│   │   └── examples/(*.dot, dotコマンドで生成した*.png)
│   ├── 03-diagram-patterns/
│   │   ├── 00-README.md
│   │   ├── 01-mermaid-vs-graphviz.md
│   │   ├── 02-choosing-the-right-diagram.md
│   │   └── 03-complex-diagram-organization.md
│   ├── 04-ai-skill-workflows/
│   │   ├── 00-README.md
│   │   ├── 01-documenting-skill-md-with-diagrams.md
│   │   ├── 02-prompting-ai-to-generate-diagrams.md
│   │   ├── 03-workflow-and-decision-diagrams-for-skills.md
│   │   └── 04-iterative-refinement-with-ai.md
│   └── 05-real-world-examples/
│       ├── 00-README.md
│       ├── 01-skill-architecture-diagram.md
│       ├── 02-multi-agent-sequence-diagram.md
│       └── 03-skill-development-doc-sample.md
└── ebook-output/(ビルド実行後に生成)
```

## 4. スタイルガイド適用方針

`css-tutorial/00_STYLE_GUIDE.md` の構成ルールをそのまま踏襲する。

- 個別教材の見出し順: この教材で身につくこと → 概要 → 位置づけ → 基本文法解説 → 実ソースコード → 演習課題 → 理解度チェック
- コードブロックは言語指定必須(`mermaid`, `dot`, `bash`, `json` 等)
- 1文60文字以内、良い例/悪い例の対比を入れる
- 各ファイル末尾に前後リンク、カテゴリREADMEに教材一覧を置く

差分として以下を追記する:

- Mermaidは`docs/**/*.md`内で直接```mermaid```フェンスとして記述し、GitHub/VS Codeのネイティブレンダリングに任せる(画像化しない)
- Graphvizは`dot`コマンドで自動レンダリングされないため、`examples/`配下に`.dot`ソースと対応する`.png`を並べて掲載する
- 04カテゴリ(ai-skill-workflows)は「生成AIへの指示文(プロンプト例)」と「その出力として得られる図」をセットで示す構成を必須とする

## 5. コンテンツ計画(章立て)

| # | カテゴリ | 学習目標 |
|---|---|---|
| 01 | Mermaid基礎 | flowchart / sequenceDiagram / classDiagram・stateDiagram / ER・gantt・mindmap・requirementDiagramの基本構文を書けるようになる |
| 02 | Graphviz基礎 | DOT言語の基本構文、ノード・エッジ属性、rankdir等によるレイアウト制御を書けるようになる |
| 03 | 図の選び方と整理法 | MermaidとGraphvizの使い分け基準、複雑な図の分割・整理手法を判断できるようになる |
| 04 | 生成AIでのSkill開発への適用 | SKILL.mdへの図の埋め込み、生成AIへの図生成プロンプト設計、ワークフロー/意思決定図の作成、AIとの反復修正ができるようになる |
| 05 | 実践例 | Skillアーキテクチャ図、マルチエージェントのシーケンス図、Skill開発ドキュメントのサンプル一式を作成できる |

各レッスンは`tutorials/ideas/mermaid-study-notes.md`の既存サンプル(flowchart, sequenceDiagram, requirementDiagram, ネットワーク構成図等)を土台として拡張・再構成する。

## 6. 電子書籍化パイプライン

- `shared-copilot-skills/ebook-build`を共有ビルド基盤として相対パス参照する(css-tutorialと同一の呼び出し方: `../shared-copilot-skills/ebook-build`、submodule不要)
- `diagram-as-code-tutorial.build.json` で `mermaidMode: "required"`, `mermaidFormat: "svg"` を指定し、Mermaidブロックをビルド時に自動画像化する(mmdc/npx経由)
- Graphvizのビルド時自動変換には対応しない。`docs/02-graphviz-basics/examples/*.png` を本文に画像として明示的に埋め込むことで担保する
- カバーは `coverMode: "ai-image"` を踏襲し、`docs/01-cover-prompt.md` にプロンプトを用意する(実画像生成は別途)

## 7. 環境準備・検証手順

1. `winget install Graphviz.Graphviz` を実行し `dot` コマンドを利用可能にする
2. `node tools/render-graphviz.js` で `docs/02-graphviz-basics/examples/*.dot` を `*.png` にレンダリングする
3. `npm install`(puppeteerは不要、mermaid-cliはnpx経由のため追加依存なし)
4. `npm run ebook:step1` → 生成された `diagram-as-code-tutorial.manuscript.md` をレビュー
5. `npm run ebook:step2` → カバー生成
6. `npm run ebook:step3` → EPUB/PDF/KDP登録メモの生成を確認
7. `git init` 済みのリポジトリに全ファイルをコミット(GitHubへのpushは行わない)

## 8. 未確定・将来課題

- カバー画像の実際のAI生成(プロンプトは用意するが、画像生成自体は今回のスコープ外)
- KDPへの実出品作業
- PlantUML等、他のDiagrams-as-Codeツールへの拡張(名称は将来拡張を見込み `diagram-as-code-tutorial` としている)
