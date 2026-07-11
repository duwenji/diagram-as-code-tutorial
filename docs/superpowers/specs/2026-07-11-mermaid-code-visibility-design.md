# Mermaidコード可視化・コード解説追記 設計書

- 日付: 2026-07-11
- 対象: `diagram-as-code-tutorial/docs` 配下の全教材（既存17レッスンファイル）
- 背景メモ: `diagram-as-code-tutorial/docs/superpowers/specs/2026-07-11-diagram-as-code-tutorial-design.md`

## 1. 目的

`diagram-as-code-tutorial` を電子書籍（EPUB/PDF）化した際、Mermaidの実ソースコードが
画像に置き換えられて消えてしまう問題を解消する。あわせて、全教材の実ソースコード例に
「コードのポイント」箇条書き解説を追加し、読者がコードの意味を理解しやすくする。

## 2. 問題の詳細

- `.github/skills-config/ebook-build/diagram-as-code-tutorial.build.json` は
  `mermaidMode: "required"` を指定しており、ビルド時に \`\`\`mermaid フェンスは
  `mmdc`（Mermaid CLI）でSVG画像に変換され、**原稿内のMermaidブロックは画像参照に
  置換される**（`shared-copilot-skills/ebook-build/SKILL.md` 58-62行目）。
- 結果として、EPUB/PDF版では図は見えるがMermaidのソースコードのテキストが失われる。
- Graphviz（\`\`\`dot）は自動変換の対象外のため、コードと画像（`.png`）が両方
  本文に残っており、この問題は発生していない。
- また、現状どの教材も構文表（記法と意味の対応表）はあるが、実際の実ソースコード例を
  行・要素単位で解説する記述がない。

## 3. 適用パターン

### パターンA: Mermaidの実ソースコード（電子書籍で消える箇所）

対象: `## 実ソースコード` セクション内の、トップレベルの \`\`\`mermaid フェンス
（構文解説セクション内の断片例は対象外）。

既存の強調ラベル規約（`**修正前:**`, `**プロンプト（Mermaid）:**` 等）に合わせ、
次の3点セットに変更する。

```markdown
**ソースコード:**

​```text
flowchart TD
    Start([開始]) --> Input[/入力受付/]
​```

​```mermaid
flowchart TD
    Start([開始]) --> Input[/入力受付/]
​```

**コードのポイント:**

- `Start([開始])` は開始ノード（楕円形）
- `Input[/入力受付/]` は入出力ノード（平行四辺形）
```

- 1つ目の \`\`\`text ブロックは `mmdc` の変換対象外（言語タグが `mermaid` ではないため）
  なので、EPUB/PDFでも文字としてそのまま残る。
- 2つ目の \`\`\`mermaid ブロックは従来どおりGitHub/VS Codeでライブ描画され、
  電子書籍では画像に変換される。
- \`\`\`text ブロックと \`\`\`mermaid ブロックの中身は完全に同一（1文字単位で一致）とする。
- 「コードのポイント」は重要な行・要素ごとの箇条書き（目安2〜4行、多くても6行）。

既にレッスン内に「〜を表現する例です。」のような1文リード文がある場合は、
その直後に **ソースコード:** ラベルを置く形で違和感なく統合する。

### パターンB: Graphvizの実ソースコード（既にコード+画像が残っている箇所）

対象: `## 実ソースコード` セクション内の \`\`\`dot フェンス（既存のコード+画像表示）。

コード複製は不要（\`\`\`dot は自動変換されないため電子書籍でも消えない）。
既存の コードブロック → 画像 の直後に「**コードのポイント:**」の箇条書きのみを追加する。

`04-ai-skill-workflows/02-prompting-ai-to-generate-diagrams.md` の \`\`\`dot
出力例（対応する`.png`が存在しない、プロンプト例示用のコード）も同様に
箇条書きのみ追加する。

### パターンC: ネストされた例（SKILL.md想定サンプル内の入れ子フェンス）

対象:
- `04-ai-skill-workflows/01-documenting-skill-md-with-diagrams.md`
  （\`\`\`markdown 内にエスケープされた \`\`\`mermaid を含む1例）
- `05-real-world-examples/03-skill-development-doc-sample.md`
  （\`\`\`markdown 内にエスケープされた \`\`\`dot と \`\`\`mermaid ×2 を含む1例）

これらは既にエスケープされた入れ子フェンスとして文字のまま保持されており、
`mermaidMode` の変換対象にもならないため複製は不要。
サンプル全体（\`\`\`markdown ブロック）の直後に、含まれる各セクション
（全体構造・処理フロー・やり取り等）を要約する「**コードのポイント:**」の
箇条書きを1つ追加する。

### 対象外

- `## 基本文法・プロパティ解説` セクション内の構文説明用コード断片
  （実行可能な「実ソースコード」ではなく、記法パターンの例示のため）
- `00-README.md` などカテゴリ目次ファイル、`00-COVER.md`、`01-cover-prompt.md`

## 4. 対象範囲

全17レッスンファイル、実ソースコード計28箇所（パターンA: 20箇所、
パターンB: 6箇所、パターンC: 2箇所）。

| カテゴリ | ファイル | パターンA(Mermaid複製) | パターンB(Graphviz箇条書きのみ) | パターンC(ネスト) |
|---|---|---|---|---|
| 01-mermaid-basics | 01-flowchart.md | 2 | - | - |
| | 02-sequence-diagram.md | 2 | - | - |
| | 03-state-and-class-diagram.md | 2 | - | - |
| | 04-other-diagrams.md | 4 | - | - |
| 02-graphviz-basics | 01-dot-language-basics.md | - | 1 | - |
| | 02-node-edge-attributes.md | - | 1 | - |
| | 03-layout-and-rankdir.md | - | 2 | - |
| 03-diagram-patterns | 01-mermaid-vs-graphviz.md | 1 | - | - |
| | 02-choosing-the-right-diagram.md | 1 | - | - |
| | 03-complex-diagram-organization.md | 2 | - | - |
| 04-ai-skill-workflows | 01-documenting-skill-md-with-diagrams.md | - | - | 1 |
| | 02-prompting-ai-to-generate-diagrams.md | 1 | 1 | - |
| | 03-workflow-and-decision-diagrams-for-skills.md | 2 | - | - |
| | 04-iterative-refinement-with-ai.md | 2 | - | - |
| 05-real-world-examples | 01-skill-architecture-diagram.md | - | 1 | - |
| | 02-multi-agent-sequence-diagram.md | 1 | - | - |
| | 03-skill-development-doc-sample.md | - | - | 1 |

## 5. 付随更新

- `00_STYLE_GUIDE.md`: 「6. 図表教材固有ルール」に、このコード複製+解説パターンを
  今後の執筆規約として追記する（「Mermaidコード例は\`\`\`text複製とセットで書く」
  「実ソースコード直後に『コードのポイント』箇条書きを置く」の2点）。
- `CHANGELOG.md`: 今回の改訂を1エントリ追記する。

## 6. 検証方法

1. Node製の簡易チェックスクリプト（一時スクリプト、リポジトリに残さない）で
   各 `## 実ソースコード` セクション内の \`\`\`mermaid ブロックに対応する
   \`\`\`text 複製が直前にあり、内容が1文字単位で一致することを確認する。
2. `npm run ebook:step1` でmanuscriptを再生成し、\`\`\`text ブロックが
   変換されずそのまま残り、\`\`\`mermaid ブロックのみ画像参照に置換されることを
   生成された `diagram-as-code-tutorial.manuscript.md` で目視確認する。
   （フルビルド`step3`によるEPUB/PDF確認は任意、本タスクの必須要件ではない）
3. 各レッスンファイルで「**コードのポイント:**」が実ソースコード直後
   （演習課題セクションより前）に存在することをgrep確認する。
4. `00_STYLE_GUIDE.md`のレビュー用チェックリストに矛盾がないか確認する。

## 7. 未確定・将来課題

- なし（本設計はスコープが明確な既存教材への追記のみ）
