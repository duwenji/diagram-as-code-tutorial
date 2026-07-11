# クイック参照

## Mermaid 図の種類早見表

| 図の種類 | キーワード | 参照 |
|---|---|---|
| flowchart | `flowchart TD` / `flowchart LR` | [01-flowchart.md](docs/01-mermaid-basics/01-flowchart.md) |
| sequenceDiagram | `participant` / `actor` / `->>` | [02-sequence-diagram.md](docs/01-mermaid-basics/02-sequence-diagram.md) |
| classDiagram | `class` / `-->` | [03-state-and-class-diagram.md](docs/01-mermaid-basics/03-state-and-class-diagram.md) |
| stateDiagram | `stateDiagram-v2` / `[*]` | [03-state-and-class-diagram.md](docs/01-mermaid-basics/03-state-and-class-diagram.md) |
| erDiagram | `\|\|--o{` | [04-other-diagrams.md](docs/01-mermaid-basics/04-other-diagrams.md) |
| gantt | `dateFormat` / `section` | [04-other-diagrams.md](docs/01-mermaid-basics/04-other-diagrams.md) |
| mindmap | `root((...))` | [04-other-diagrams.md](docs/01-mermaid-basics/04-other-diagrams.md) |
| requirementDiagram | `requirement` / `satisfies` | [04-other-diagrams.md](docs/01-mermaid-basics/04-other-diagrams.md) |

## Graphviz 属性早見表

| 属性 | 対象 | 例 |
|---|---|---|
| `shape` | ノード | `box`, `ellipse`, `diamond` |
| `style` | ノード/エッジ | `filled`, `rounded`, `dashed` |
| `fillcolor` | ノード | `"#eef2ff"` |
| `rankdir` | グラフ全体 | `TB`, `LR`, `BT`, `RL` |
| `cluster_*` | subgraph名 | 枠付きグルーピング |

## コマンド早見表

| コマンド | 用途 |
|---|---|
| `npm run graphviz:render` | `.dot`ファイルを`.png`に一括変換 |
| `npm run ebook:step1` | 原稿レビュー用manuscript生成 |
| `npm run ebook:step3` | EPUB/PDF生成 |
