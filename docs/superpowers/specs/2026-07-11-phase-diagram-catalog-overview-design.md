# 06カテゴリ「全体マッピング表」の電子教材反映 設計書

- 日付: 2026-07-11
- 対象: `docs/06-project-phase-diagrams/`

## 1. 背景・課題

電子書籍ビルド設定（`diagram-as-code-tutorial.build.json`）は、
`chapterFilePattern: "^(?!00-README\\.md$).+\\.md$"` により
すべてのカテゴリの `00-README.md` をビルド対象から除外している。

`docs/06-project-phase-diagrams/00-README.md` には「フェーズ×成果物×図
全体マッピング表」（20行の参照表）が置かれているが、この表は他のどの
教材ファイルにも複製されていない。一方で、同カテゴリの教材ファイル
01〜06はすべて「位置づけ」節で `00-README.md` の全体マッピング表を
名指しで参照し、`06-agile-artifacts.md` の演習課題2は読者に直接その表を
参照するよう指示している。

結果として、電子書籍（EPUB/PDF）では読者が一度も見たことのない表への
言及・演習指示に複数回遭遇する。これは索引の欠落ではなく、教材の
内容的な整合性が壊れている欠陥である。

他カテゴリ（01, 03, 04, 05）の `00-README.md` は学習目標・教材一覧・
学習の進め方のみで、各教材ファイル冒頭の「この教材で身につくこと」や
電子書籍の自動目次と重複するため、反映不要と判断する。
`02-graphviz-basics/00-README.md` の「図の確認方法」（`npm run
graphviz:render`）はスタイルガイド上コントリビューター向けの運用ルール
であり、読者向け教材内容ではないため、これも反映不要と判断する。

## 2. 対応方針

`00-README.md` は他カテゴリと同じ「学習目標＋教材一覧」の体裁を維持し、
全体マッピング表の本体は、標準見出し順に従う新規教材ファイルへ移設する。
新規ファイルは `00-README.md` という特別なファイル名ではないため、
自動的に電子書籍ビルド対象に含まれる。

## 3. 変更内容

### 3.1 新規ファイル

`docs/06-project-phase-diagrams/01-diagram-catalog-overview.md`

標準見出し順（`00_STYLE_GUIDE.md` 2節）に従う。

| 見出し | 内容 |
|---|---|
| この教材で身につくこと | 開発フェーズ別成果物とMermaid/Graphvizの対応関係を一望できる |
| 概要 | 本カテゴリの全体像、01〜06の位置づけ |
| 位置づけ | 03カテゴリ（伝えたいこと起点）との違いを説明（現行00-READMEの記述を踏襲） |
| 基本文法・プロパティ解説 | 現行の「フェーズ×成果物×図 全体マッピング表」（20行）をそのまま移設 |
| 実ソースコード | 表内の代表例（例: 要件定義のflowchart）を1つ、既存教材から抜粋して示す |
| 演習課題 | 表から2〜3件選び、Mermaid/Graphvizのどちらで書けるか判断させる課題 |
| 理解度チェック | 表の読み方・「非対応」項目の扱いを説明できるか |

### 3.2 既存ファイルの連番繰り下げ

| 旧 | 新 |
|---|---|
| `01-requirements-phase.md` | `02-requirements-phase.md` |
| `02-basic-design-phase.md` | `03-basic-design-phase.md` |
| `03-detailed-design-phase.md` | `04-detailed-design-phase.md` |
| `04-implementation-testing-phase.md` | `05-implementation-testing-phase.md` |
| `05-release-operations-phase.md` | `06-release-operations-phase.md` |
| `06-agile-artifacts.md` | `07-agile-artifacts.md` |

### 3.3 `00-README.md` の変更

- 「フェーズ×成果物×図 全体マッピング表」節を削除し、
  「詳細は[01-diagram-catalog-overview.md](01-diagram-catalog-overview.md)を参照」という
  短い案内に置き換える
- 教材一覧テーブルを01〜07の7行に更新（新規01を追加、既存を繰り下げ）
- 学習の進め方の記述（「01→06の順」）を「01→07の順」に更新

### 3.4 相互参照の更新

- 新02〜07（旧01〜06）の「位置づけ」節: `00-README.md`の全体マッピング表 →
  `01-diagram-catalog-overview.md`のマッピング表 へのリンクに変更
- 新07（旧06-agile-artifacts）演習課題2のリンク先を同様に変更
- 各ファイル末尾の前後リンク（連番のずれに合わせて更新、新規01の前後リンクも追加）
- `MASTER-INDEX.md` の06カテゴリ節を7行に更新
- `CHANGELOG.md` の `[Unreleased]` に変更内容を追記（「06カテゴリに全体マッピング表の
  教材ファイルを追加し、電子書籍に反映されるよう修正」等）

### 3.5 影響を受けないもの

- `docs/03-diagram-patterns/02-choosing-the-right-diagram.md` から
  `../06-project-phase-diagrams/00-README.md` へのリンク（カテゴリ入口への
  リンクであり、ファイル名変更なし）
- `.github/workflows/validate.yml`（ファイル数・ファイル名のハードコードなし）
- `README.md` トップレベルの学習ガイド（カテゴリ入口へのリンクのみで、
  カテゴリ内の連番には言及していない）

## 4. 検証方法

1. `npm run ebook:step1` を実行し、生成された manuscript に
   「フェーズ×成果物×図 全体マッピング表」が含まれることを確認する
2. `docs/06-project-phase-diagrams/*.md` 内に `00-README.md` への
   マッピング表参照リンクが残っていないことを `grep` で確認する
   （`00-README.md`自体からの自己参照を除く）
3. 各ファイルの前後リンクを目視でたどり、01→07が一直線につながることを確認する
4. `npm run ebook:step2` → `step3` を実行し、EPUB/PDFが正常に生成されることを確認する

## 5. 未確定・将来課題

- 新規ファイルの「実ソースコード」節に載せる代表例の具体的な選定
  （実装計画作成時に確定する）
