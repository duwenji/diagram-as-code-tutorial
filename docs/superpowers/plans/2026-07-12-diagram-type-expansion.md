# 図の種類拡張(quadrantChart/timeline/gitGraph/kanban/C4Context/block-beta) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `diagram-as-code-tutorial` の既存6ファイルに、未収録の6図種
(quadrantChart / timeline / gitGraph / kanban / C4Context / block-beta) を
「開発フェーズの成果物」という既存パターンに沿って追記する。

**Architecture:** 本プロジェクトはMarkdown教材（コードなし）。「テストサイクル」は
自動テストではなく、(1) 追記後にファイルへgrepをかけて挿入内容を確認、
(2) `00_STYLE_GUIDE.md`の見出し順序・コードブロックルールに沿っているか確認、
(3) Mermaidコードのプレビュー確認（VS Code/GitHub）、の3点で代替する。
各タスクは1ファイルへの追記+検証+コミットを1単位とする。

**Tech Stack:** Markdown, Mermaid（`mermaid`コードフェンス）, Bash(grep)によるテキスト検証

## Global Constraints

- Mermaidの実ソースコードは常に ` ```text ` 複製 → ` ```mermaid ` の順でセットにする
  （`00_STYLE_GUIDE.md` 6節）
- 実ソースコードの直後に「**コードのポイント:**」を2〜4行（多くても6行）で置く
- 個別教材ファイルの見出し順序は「この教材で身につくこと→概要→位置づけ→
  基本文法・プロパティ解説→実ソースコード→演習課題→理解度チェック」を維持する
  （`00_STYLE_GUIDE.md` 2節）
- 実験的機能（timeline, C4Context）は本文中に「実験的機能」である旨を明記する
  （設計書 4節）
- 各タスクの完了時に該当ファイルをコミットする（頻繁なコミット）
- 対象リポジトリは `c:\Dev\tutorials\diagram-as-code-tutorial`（gitリポジトリ）

---

## Task 1: 02-requirements-phase.md に quadrantChart を追加

**Files:**
- Modify: `docs/06-project-phase-diagrams/02-requirements-phase.md`

**Interfaces:**
- Produces: 見出し「要件優先度マトリクス」（Task 2のマッピング表から参照される）

- [ ] **Step 1: 「この教材で身につくこと」に1行追加**

`docs/06-project-phase-diagrams/02-requirements-phase.md` の7行目
(`- ユースケース図（Mermaid非対応）の代替表現を選べる`) の直後に追加:

```markdown
- quadrantChartで要件の優先順位を可視化できる
```

- [ ] **Step 2: 対応表に行を追加**

29行目 `| ユースケース図 | 非対応（flowchartで代替） | 専用記法はないが、アクターと機能をノードで表現できる |`
の直後に追加:

```markdown
| 要件優先度マトリクス | quadrantChart | 影響度×工数の2軸で要件の優先順位を可視化できる |
```

- [ ] **Step 3: 実ソースコード例を追加**

ユースケース図の代替表現の「コードのポイント」（165行目付近、
`- 汎化・包含・拡張などUML特有の関係線は表現できない点に注意する` の後）と
「## 演習課題」の間に、以下をまるごと挿入:

```markdown
要件優先度マトリクスの例です。影響度×工数の2軸で要件を配置し、
着手順序の合意形成に使います。

**ソースコード:**

\```text
quadrantChart
    title 要件優先度マトリクス
    x-axis 低工数 --> 高工数
    y-axis 低影響度 --> 高影響度
    quadrant-1 最優先で着手
    quadrant-2 計画的に着手
    quadrant-3 保留
    quadrant-4 効率化を検討
    会員登録の多要素認証化: [0.7, 0.9]
    注文履歴のCSV出力: [0.2, 0.4]
    決済手段の追加: [0.8, 0.8]
    UIの微調整: [0.15, 0.2]
\```

\```mermaid
quadrantChart
    title 要件優先度マトリクス
    x-axis 低工数 --> 高工数
    y-axis 低影響度 --> 高影響度
    quadrant-1 最優先で着手
    quadrant-2 計画的に着手
    quadrant-3 保留
    quadrant-4 効率化を検討
    会員登録の多要素認証化: [0.7, 0.9]
    注文履歴のCSV出力: [0.2, 0.4]
    決済手段の追加: [0.8, 0.8]
    UIの微調整: [0.15, 0.2]
\```

**コードのポイント:**

- `x-axis 低工数 --> 高工数` / `y-axis 低影響度 --> 高影響度` で軸のラベルと向きを定義する
- `quadrant-1`〜`quadrant-4` で各象限（右上/左上/左下/右下の順）に名前を付ける
- `会員登録の多要素認証化: [0.7, 0.9]` は `[x座標, y座標]`（0〜1の範囲）で要件を配置する
- quadrantChartは早期のMermaidバージョン（v10.4系）から利用可能な安定機能
```

（`\```` はMarkdown内でコードフェンスを二重にしないための表記。実際のファイルには
バッククォート3つのフェンスとして書く。）

- [ ] **Step 4: 演習課題に1件追加**

「## 演習課題」内、既存2項目の後に追加:

```markdown
3. 自分が担当する要件を3件選び、影響度×工数でquadrantChartにプロットせよ
```

- [ ] **Step 5: 理解度チェックに1件追加**

「## 理解度チェック」内、既存3項目の後に追加:

```markdown
- [ ] quadrantChartで要件を影響度×工数の2軸に配置できる
```

- [ ] **Step 6: 挿入内容を検証**

Run:
```bash
grep -n "quadrantChart" "docs/06-project-phase-diagrams/02-requirements-phase.md"
```
Expected: `quadrantChart` を含む行が3件以上（```text版・```mermaid版・コードのポイント内）
ヒットする。

VS CodeまたはGitHubでファイルをプレビューし、quadrantChartが正しくレンダリングされる
ことを目視確認する（`00_STYLE_GUIDE.md` 6節）。

- [ ] **Step 7: Commit**

```bash
git add docs/06-project-phase-diagrams/02-requirements-phase.md
git commit -m "$(cat <<'EOF'
docs(06): 要件定義フェーズにquadrantChart(要件優先度マトリクス)を追加
EOF
)"
```

---

## Task 2: 01-diagram-catalog-overview.md に timeline とマッピング表4行を追加

**Files:**
- Modify: `docs/06-project-phase-diagrams/01-diagram-catalog-overview.md`

**Interfaces:**
- Consumes: Task 1の見出し「要件優先度マトリクス」、Task 3の見出し
  「システムコンテキスト図」、Task 4の見出し「ブランチ戦略図」、Task 5の見出し
  「カンバンボード」（すべてリンク先アンカーとして参照）
- Produces: 見出し「プロジェクト全体ロードマップ」

- [ ] **Step 1: 「この教材で身につくこと」に1行追加**

7行目 `- Mermaid/Graphvizで表現できない成果物とその代替手段を把握する` の直後に追加:

```markdown
- timelineで開発フェーズ全体を俯瞰するロードマップを書ける
```

- [ ] **Step 2: 全体マッピング表に4行を追加**

46行目 `| アジャイル | バーンダウンチャート | Mermaid（制約あり） | xychart-beta | ... |`
の直後（表の最終行の後）に追加:

```markdown
| 要件定義 | 要件優先度マトリクス | Mermaid | quadrantChart | 詳細は[要件定義フェーズ](02-requirements-phase.md)参照 |
| 基本設計 | システムコンテキスト図 | Mermaid | C4Context | 実験的機能。詳細は[基本設計フェーズ](03-basic-design-phase.md)参照 |
| リリース・運用 | ブランチ戦略図 | Mermaid | gitGraph | 詳細は[リリース・運用保守フェーズ](06-release-operations-phase.md)参照 |
| アジャイル | カンバンボード | Mermaid | kanban | 詳細は[アジャイル開発での当てはめ](07-agile-artifacts.md)参照 |
```

- [ ] **Step 3: timelineの実ソースコード例を追加**

「## 実ソースコード」内、既存のflowchart例の「コードのポイント」
（77行目 `- 「非対応」の行は隠さず、代替手段を検討する分岐として明示する`）の後、
「## 演習課題」の前に、以下を挿入:

```markdown
開発フェーズ全体を俯瞰するロードマップの例です。個々のフェーズに属さない
「全体像」を示す図として、timelineを使います。

**ソースコード:**

\```text
timeline
    title Skill開発プロジェクト 全体ロードマップ
    要件定義 : 業務フロー整理 : 要件優先度マトリクス作成
    基本設計 : システム構成図作成 : 画面遷移図作成
    詳細設計 : クラス図作成 : 詳細シーケンス図作成
    実装・テスト : モジュール実装 : テストケース検証
    リリース・運用 : インフラ構築 : 障害対応フロー整備
\```

\```mermaid
timeline
    title Skill開発プロジェクト 全体ロードマップ
    要件定義 : 業務フロー整理 : 要件優先度マトリクス作成
    基本設計 : システム構成図作成 : 画面遷移図作成
    詳細設計 : クラス図作成 : 詳細シーケンス図作成
    実装・テスト : モジュール実装 : テストケース検証
    リリース・運用 : インフラ構築 : 障害対応フロー整備
\```

**コードのポイント:**

- `要件定義 : 業務フロー整理 : 要件優先度マトリクス作成` の1行が1つの期間（フェーズ）を表し、
  `:`区切りで複数のイベントを時系列に並べられる
- ganttと異なり日付や期間の長さは指定せず、順序だけを表現する
- timelineはMermaid公式ドキュメントで今も「実験的な機能」と明記されている点に注意する
```

- [ ] **Step 4: 演習課題に1件追加**

「## 演習課題」内、既存2項目の後に追加:

```markdown
3. 自分が担当するプロジェクトの主要マイルストーンを3〜5個、timelineで書け
```

- [ ] **Step 5: 理解度チェックに1件追加**

「## 理解度チェック」内、既存3項目の後に追加:

```markdown
- [ ] timelineで開発フェーズ全体のロードマップを表現できる
```

- [ ] **Step 6: 挿入内容を検証**

Run:
```bash
grep -n "timeline\|quadrantChart\|C4Context\|gitGraph\|kanban" "docs/06-project-phase-diagrams/01-diagram-catalog-overview.md"
```
Expected: マッピング表の4行、timelineのコード例（```text/```mermaid各1回）が
すべてヒットする。

Run:
```bash
grep -c "^|" "docs/06-project-phase-diagrams/01-diagram-catalog-overview.md"
```
Expected: 表の行数が追加前より4行分（ヘッダー・区切り行を除く実データ行換算）増えている。

- [ ] **Step 7: Commit**

```bash
git add docs/06-project-phase-diagrams/01-diagram-catalog-overview.md
git commit -m "$(cat <<'EOF'
docs(06): 全体マッピング表に4図種を追加し、timeline(全体ロードマップ)を新設
EOF
)"
```

---

## Task 3: 03-basic-design-phase.md の脚注をC4Contextの正式教材に格上げ

**Files:**
- Modify: `docs/06-project-phase-diagrams/03-basic-design-phase.md`

**Interfaces:**
- Produces: 見出し「システムコンテキスト図」（Task 2から参照される）

- [ ] **Step 1: ファイル冒頭を確認**

Run:
```bash
grep -n "この教材で身につくこと\|成果物別の対応表\|補足" "docs/06-project-phase-diagrams/03-basic-design-phase.md"
```
既存の「この教材で身につくこと」見出し行番号と、対応表の位置、脚注
（`> **補足:** ...`）の行番号（103行目付近）を確認する。

- [ ] **Step 2: 「この教材で身につくこと」に1行追加**

既存の箇条書き（システム構成図・画面遷移図・ER図・シーケンス概要図に関する行）の
最後に追加:

```markdown
- C4Contextで標準化されたシステムコンテキスト図を書ける
```

- [ ] **Step 3: 成果物別の対応表に行を追加**

既存の「成果物別の対応表」（システム構成図/画面遷移図/ER図/シーケンス概要図の4行）の
末尾に追加:

```markdown
| システムコンテキスト図 | C4Context | 標準化された記法でシステム境界と外部関係者の関係を表現できる（実験的機能） |
```

- [ ] **Step 4: 脚注を削除し、実ソースコード例に置き換え**

以下の既存ブロック（103〜106行目）を削除する:

```markdown
> **補足:** Mermaidにはアーキテクチャ専用記法の`C4Context`もあります。
> コンテキスト図（システムと利用者・外部システムの関係を示す図）を
> 標準化された記法で書きたい場合の選択肢です。本教材では扱わず、
> 詳細は[ROADMAP.md](../../ROADMAP.md)の将来拡張候補を参照してください。
```

削除箇所に、以下を挿入する（Graphviz複雑版の直後、画面遷移図の例の前）:

```markdown
システムコンテキスト図の例です。C4Contextは、システムと利用者・外部システムの
関係を標準化された記法（Person/System/Rel）で表現します。

**ソースコード:**

\```text
C4Context
    title システムコンテキスト図（ECサイト）

    Person(customer, "顧客", "商品を注文する利用者")
    System(ecSystem, "ECサイト", "商品検索・注文・決済を提供する")
    System_Ext(paymentGateway, "決済代行サービス", "外部の決済処理基盤")
    System_Ext(mailService, "メール配信サービス", "注文確認メールを送信する")

    Rel(customer, ecSystem, "商品を注文する")
    Rel(ecSystem, paymentGateway, "決済を依頼する")
    Rel(ecSystem, mailService, "注文確認を送信する")
\```

\```mermaid
C4Context
    title システムコンテキスト図（ECサイト）

    Person(customer, "顧客", "商品を注文する利用者")
    System(ecSystem, "ECサイト", "商品検索・注文・決済を提供する")
    System_Ext(paymentGateway, "決済代行サービス", "外部の決済処理基盤")
    System_Ext(mailService, "メール配信サービス", "注文確認メールを送信する")

    Rel(customer, ecSystem, "商品を注文する")
    Rel(ecSystem, paymentGateway, "決済を依頼する")
    Rel(ecSystem, mailService, "注文確認を送信する")
\```

**コードのポイント:**

- `Person(customer, "顧客", "...")` / `System(ecSystem, "ECサイト", "...")` は
  `要素ID, 表示名, 説明` の順で宣言する
- `System_Ext` は自システムの外部にある関連システムを表す（`System`と区別する）
- `Rel(customer, ecSystem, "商品を注文する")` で要素間の関係とラベルを表現する
- C4Contextは公式ドキュメントで今も「実験的な機能」と明記されており、
  構文が将来変更される可能性がある点に注意する
- Graphvizの`subgraph cluster_external`（自由なグルーピング）と異なり、
  C4Contextは`Person`/`System`/`System_Ext`という役割が固定された標準記法である
```

- [ ] **Step 5: 演習課題に1件追加**

「## 演習課題」内の既存項目の後に追加:

```markdown
3. 自分のシステムの利用者・外部連携先を洗い出し、C4Contextでシステム
   コンテキスト図を書け
```

- [ ] **Step 6: 理解度チェックに1件追加**

「## 理解度チェック」内の既存項目の後に追加:

```markdown
- [ ] C4Contextで`Person`/`System`/`System_Ext`/`Rel`を使い分けられる
```

- [ ] **Step 7: 挿入内容を検証**

Run:
```bash
grep -n "C4Context\|本教材では扱わず" "docs/06-project-phase-diagrams/03-basic-design-phase.md"
```
Expected: `本教材では扱わず` はヒットしない（脚注削除の確認）。`C4Context` は
複数回ヒットする（対応表・```text・```mermaid・コードのポイント）。

VS CodeまたはGitHubでC4Contextのレンダリングを目視確認する。

- [ ] **Step 8: Commit**

```bash
git add docs/06-project-phase-diagrams/03-basic-design-phase.md
git commit -m "$(cat <<'EOF'
docs(06): C4Contextを脚注から正式な成果物(システムコンテキスト図)に格上げ
EOF
)"
```

---

## Task 4: 06-release-operations-phase.md に gitGraph を追加

**Files:**
- Modify: `docs/06-project-phase-diagrams/06-release-operations-phase.md`

**Interfaces:**
- Produces: 見出し「ブランチ戦略図」（Task 2から参照される）

- [ ] **Step 1: 「この教材で身につくこと」に1行追加**

7行目 `- インフラ構成図をMermaid（architecture-beta）またはGraphvizで書ける` の
直後に追加:

```markdown
- gitGraphでブランチ戦略・リリースタイミングを可視化できる
```

- [ ] **Step 2: 成果物別の対応表に行を追加**

28行目 `| 障害対応フロー | flowchart | 検知から復旧までの対応手順・エスカレーションを表現できる |`
の直後に追加:

```markdown
| ブランチ戦略図 | gitGraph | ブランチの分岐・マージ・リリースタイミングを可視化できる |
```

- [ ] **Step 3: 実ソースコード例を追加**

障害対応フローの例（「## 演習課題」の直前、211行目付近の
`- 軽微・重大どちらの経路も最終的に\`Report\`（報告書作成）へ合流する` の後）に、
以下を挿入:

```markdown
ブランチ戦略図の例です。リリースブランチの運用と、緊急修正（hotfix）の
分岐・マージタイミングを可視化します。

**ソースコード:**

\```text
gitGraph
    commit id: "初期リリース"
    branch develop
    checkout develop
    commit id: "機能A実装"
    branch feature/payment
    checkout feature/payment
    commit id: "決済機能実装"
    checkout develop
    merge feature/payment
    checkout main
    merge develop tag: "v1.1.0"
    branch hotfix/urgent-fix
    checkout hotfix/urgent-fix
    commit id: "緊急バグ修正"
    checkout main
    merge hotfix/urgent-fix tag: "v1.1.1"
\```

\```mermaid
gitGraph
    commit id: "初期リリース"
    branch develop
    checkout develop
    commit id: "機能A実装"
    branch feature/payment
    checkout feature/payment
    commit id: "決済機能実装"
    checkout develop
    merge feature/payment
    checkout main
    merge develop tag: "v1.1.0"
    branch hotfix/urgent-fix
    checkout hotfix/urgent-fix
    commit id: "緊急バグ修正"
    checkout main
    merge hotfix/urgent-fix tag: "v1.1.1"
\```

**コードのポイント:**

- `branch feature/payment` → `checkout feature/payment` で作業用ブランチに切り替える
- `merge feature/payment` で`develop`に機能ブランチを取り込み、
  `merge develop tag: "v1.1.0"` でmainへのリリースにタグを付ける
- `branch hotfix/urgent-fix` のように、mainから直接切る緊急修正ブランチも表現できる
- gitGraphの基本機能はMermaidの早期バージョンから安定して利用できる
```

- [ ] **Step 4: 演習課題に1件追加**

「## 演習課題」内の既存3項目の後に追加:

```markdown
4. featureブランチ2本とhotfixブランチ1本を含むブランチ戦略図を、
   自分のプロジェクトを想定して書け
```

- [ ] **Step 5: 理解度チェックに1件追加**

「## 理解度チェック」内の既存4項目の後に追加:

```markdown
- [ ] gitGraphでブランチの分岐・マージ・タグ付けを表現できる
```

- [ ] **Step 6: 挿入内容を検証**

Run:
```bash
grep -n "gitGraph" "docs/06-project-phase-diagrams/06-release-operations-phase.md"
```
Expected: 3件以上ヒット（```text・```mermaid・コードのポイント）。

VS CodeまたはGitHubでgitGraphのレンダリングを目視確認する。

- [ ] **Step 7: Commit**

```bash
git add docs/06-project-phase-diagrams/06-release-operations-phase.md
git commit -m "$(cat <<'EOF'
docs(06): リリース・運用保守フェーズにgitGraph(ブランチ戦略図)を追加
EOF
)"
```

---

## Task 5: 07-agile-artifacts.md に kanban を追加

**Files:**
- Modify: `docs/06-project-phase-diagrams/07-agile-artifacts.md`

**Interfaces:**
- Produces: 見出し「カンバンボード」（Task 2から参照される）

- [ ] **Step 1: 「この教材で身につくこと」の文言を1件拡張**

6行目 `- 02〜06で学んだ図のカタログを、アジャイルの反復サイクルに当てはめられる`
の直後に追加:

```markdown
- kanbanでスプリント中のタスク状態（Todo/Doing/Done）を可視化できる
```

- [ ] **Step 2: 成果物別の対応表に行を追加**

30行目 `| バーンダウンチャート | xychart-beta（制約あり） | ... |` の直後に追加:

```markdown
| カンバンボード | kanban | Todo/Doing/Doneのタスク状態遷移を可視化できる |
```

- [ ] **Step 3: 実ソースコード例を追加**

バーンダウンチャートの例（「## 演習課題」の直前、140行目付近の
`- スプリントを跨ぐ複数スプリント分の推移や、日次の自動更新が必要な場合は表計算/BIツールを使う`
の後）に、以下を挿入:

```markdown
カンバンボードの例です。スプリント内のタスクを状態別に管理します。

**ソースコード:**

\```text
kanban
    Todo
        task1[要件整理]
        task2[画面設計]
    Doing
        task3[決済機能実装]
    Done
        task4[ログイン機能実装]
        task5[DB設計]
\```

\```mermaid
kanban
    Todo
        task1[要件整理]
        task2[画面設計]
    Doing
        task3[決済機能実装]
    Done
        task4[ログイン機能実装]
        task5[DB設計]
\```

**コードのポイント:**

- `Todo`/`Doing`/`Done`のように見出し（コロンなし）を書くと列（レーン）になる
- `task1[要件整理]` のように `id[表示ラベル]` でタスクカードを表現する
- ganttがスケジュール（期間）、kanbanが状態（進捗）を表す点で役割が異なる
- kanbanはMermaid v11.4.0で追加された比較的新しい機能
```

- [ ] **Step 4: 演習課題に1件追加**

「## 演習課題」内の既存2項目の後に追加:

```markdown
3. 現在進行中のタスクを5件洗い出し、kanbanでTodo/Doing/Doneに分類せよ
```

- [ ] **Step 5: 理解度チェックに1件追加**

「## 理解度チェック」内の既存4項目の後に追加:

```markdown
- [ ] kanbanでTodo/Doing/Doneのタスク状態を表現できる
```

- [ ] **Step 6: 挿入内容を検証**

Run:
```bash
grep -n "kanban" "docs/06-project-phase-diagrams/07-agile-artifacts.md"
```
Expected: 3件以上ヒット（```text・```mermaid・コードのポイント）。

VS CodeまたはGitHubでkanbanのレンダリングを目視確認する。

- [ ] **Step 7: Commit**

```bash
git add docs/06-project-phase-diagrams/07-agile-artifacts.md
git commit -m "$(cat <<'EOF'
docs(06): アジャイル開発での当てはめにkanban(カンバンボード)を追加
EOF
)"
```

---

## Task 6: 05-real-world-examples/01-skill-architecture-diagram.md に block-beta を追加

**Files:**
- Modify: `docs/05-real-world-examples/01-skill-architecture-diagram.md`

**Interfaces:**
- なし（他タスクから参照されない独立追記）

- [ ] **Step 1: 「この教材で身につくこと」に1行追加**

6行目 `- クラスタを使った関心事の分離` の直後に追加:

```markdown
- Mermaidのネイティブ記法（block-beta）とGraphvizの使い分けを判断できる
```

- [ ] **Step 2: 「基本文法・プロパティ解説」の表に行を追加**

既存の3行表（`rankdir=LR` / `subgraph cluster_tools` / `fillcolor`）の後に追加:

```markdown
| `block:id["..."]...end`（block-beta） | ブロックのグルーピング（Mermaidネイティブ版） |
```

- [ ] **Step 3: block-beta版のソースコード例を追加**

既存のGraphvizコード例の「コードのポイント」（61行目
`- \`fillcolor\`で役割ごとに色分け（User/Skill/生成AI）している` の後）、
「## 演習課題」の前に、以下を挿入:

```markdown
同じ構成をMermaidの`block-beta`で書いた例です。依存パッケージなしで
GitHub上にそのままプレビューできます。

**ソースコード:**

\```text
block-beta
  columns 1
  User(("利用者"))
  Skill["Skill\n(SKILL.md)"]
  LLM["生成AI"]
  block:tools["外部ツール群"]
    Mermaid["Mermaid CLI"]
    Graphviz["Graphviz dot"]
  end

  User --> Skill
  Skill --> LLM
  LLM --> Mermaid
  LLM --> Graphviz
\```

\```mermaid
block-beta
  columns 1
  User(("利用者"))
  Skill["Skill\n(SKILL.md)"]
  LLM["生成AI"]
  block:tools["外部ツール群"]
    Mermaid["Mermaid CLI"]
    Graphviz["Graphviz dot"]
  end

  User --> Skill
  Skill --> LLM
  LLM --> Mermaid
  LLM --> Graphviz
\```

**コードのポイント:**

- `block:tools["外部ツール群"] ... end` でGraphvizの`subgraph cluster_tools`と
  同じグルーピングを表現する
- `columns 1`で縦方向のレイアウトを指定する（列数を変えると横並びにできる）
- Graphviz版と比べ、`dot`コマンドのインストールが不要でGitHub上に直接
  プレビューできる一方、レイアウトの自由度（`rankdir`のような細かい制御）は劣る
- block-betaは導入時はベータ機能として追加された（本教材ではv11.3系以降を目安とする）
```

- [ ] **Step 4: 演習課題に1件追加**

「## 演習課題」内の既存1項目の後に追加:

```markdown
2. 同じ構成図をblock-betaで書き、Graphviz版との書きやすさの違いを比較せよ
```

- [ ] **Step 5: 理解度チェックに1件追加**

「## 理解度チェック」内の既存2項目の後に追加:

```markdown
- [ ] block-betaとGraphvizの使い分け基準（依存関係・レイアウト自由度）を説明できる
```

- [ ] **Step 6: 挿入内容を検証**

Run:
```bash
grep -n "block-beta" "docs/05-real-world-examples/01-skill-architecture-diagram.md"
```
Expected: 4件以上ヒット（表・```text・```mermaid・コードのポイント）。

VS CodeまたはGitHubでblock-betaのレンダリングを目視確認する。

- [ ] **Step 7: Commit**

```bash
git add docs/05-real-world-examples/01-skill-architecture-diagram.md
git commit -m "$(cat <<'EOF'
docs(05): Skillアーキテクチャ図にblock-beta版を追加しGraphvizとの使い分けを補足
EOF
)"
```

---

## Task 7: QUICK-REFERENCE.md の早見表を拡張

**Files:**
- Modify: `QUICK-REFERENCE.md`

**Interfaces:**
- Consumes: Task 1〜6で追加した各セクションのファイルパス

- [ ] **Step 1: Mermaid早見表に7行を追加**

`QUICK-REFERENCE.md` 14行目
`| requirementDiagram | \`requirement\` / \`satisfies\` | [04-other-diagrams.md](...) |`
の直後に追加:

```markdown
| architecture-beta | `service` / `group` / `:T`/`:B`/`:L`/`:R` | [06-release-operations-phase.md](docs/06-project-phase-diagrams/06-release-operations-phase.md) |
| quadrantChart | `x-axis` / `y-axis` / `quadrant-1`〜`4` | [02-requirements-phase.md](docs/06-project-phase-diagrams/02-requirements-phase.md) |
| timeline | `title` / `期間 : イベント` | [01-diagram-catalog-overview.md](docs/06-project-phase-diagrams/01-diagram-catalog-overview.md) |
| C4Context | `Person` / `System` / `Rel` | [03-basic-design-phase.md](docs/06-project-phase-diagrams/03-basic-design-phase.md) |
| gitGraph | `branch` / `checkout` / `merge` | [06-release-operations-phase.md](docs/06-project-phase-diagrams/06-release-operations-phase.md) |
| kanban | `Todo` / `Doing` / `Done` | [07-agile-artifacts.md](docs/06-project-phase-diagrams/07-agile-artifacts.md) |
| block-beta | `block:id[...]...end` / `columns` | [01-skill-architecture-diagram.md](docs/05-real-world-examples/01-skill-architecture-diagram.md) |
```

- [ ] **Step 2: 挿入内容を検証**

Run:
```bash
grep -c "^|" QUICK-REFERENCE.md
```
Expected: Mermaid早見表のデータ行が追加前(8行: ヘッダー+区切り+6種)から
15行（ヘッダー+区切り+13種）に増えている。

Run:
```bash
grep -n "docs/06-project-phase-diagrams\|docs/05-real-world-examples" QUICK-REFERENCE.md
```
上記コマンドで表示された各リンク先ファイルが実在することを確認:

```bash
test -f docs/06-project-phase-diagrams/02-requirements-phase.md && \
test -f docs/06-project-phase-diagrams/01-diagram-catalog-overview.md && \
test -f docs/06-project-phase-diagrams/03-basic-design-phase.md && \
test -f docs/06-project-phase-diagrams/06-release-operations-phase.md && \
test -f docs/06-project-phase-diagrams/07-agile-artifacts.md && \
test -f docs/05-real-world-examples/01-skill-architecture-diagram.md && \
echo "OK: all link targets exist"
```
Expected: `OK: all link targets exist`

- [ ] **Step 3: Commit**

```bash
git add QUICK-REFERENCE.md
git commit -m "$(cat <<'EOF'
docs: クイック参照にarchitecture-betaと新規6図種を追加
EOF
)"
```

---

## Task 8: ROADMAP.md を更新（C4Contextを実装済みへ昇格）

**Files:**
- Modify: `ROADMAP.md`

**Interfaces:**
- なし

- [ ] **Step 1: 「現状のスコープ」を更新**

5行目
`- Mermaid基礎（flowchart / sequence / class / state / ER / gantt / mindmap / requirement）`
を以下に置き換え:

```markdown
- Mermaid基礎（flowchart / sequence / class / state / ER / gantt / mindmap / requirement）
- Mermaid応用（architecture-beta / quadrantChart / timeline / gitGraph / kanban / C4Context / block-beta）
```

- [ ] **Step 2: 「将来の拡張候補」からC4Contextの行を削除**

以下の行を削除する:

```markdown
- Mermaidの`C4Context`など、アーキテクチャ記法専用の図
```

- [ ] **Step 3: 挿入内容を検証**

Run:
```bash
grep -n "C4Context" ROADMAP.md
```
Expected: 「現状のスコープ」内の1件のみヒットする（将来拡張候補からは消えている）。

- [ ] **Step 4: Commit**

```bash
git add ROADMAP.md
git commit -m "$(cat <<'EOF'
docs: ROADMAP.mdのC4Context等を将来拡張候補から現状スコープへ更新
EOF
)"
```

---

## Task 9: CHANGELOG.md に今回の変更を記録

**Files:**
- Modify: `CHANGELOG.md`

**Interfaces:**
- なし

- [ ] **Step 1: `[Unreleased]` の `### Added` に追記**

10行目 `- 06-project-phase-diagramsカテゴリ（プロジェクト開発フェーズ別の図カタログ、全8ファイル）`
の直後に追加:

```markdown
- 06-project-phase-diagramsおよび05-real-world-examplesに、quadrantChart /
  timeline / gitGraph / kanban / C4Context / block-betaの6図種を追加
  （02-requirements-phase.md, 01-diagram-catalog-overview.md,
  03-basic-design-phase.md, 06-release-operations-phase.md,
  07-agile-artifacts.md, 05-real-world-examples/01-skill-architecture-diagram.md）
```

- [ ] **Step 2: `### Changed` に追記**

既存の`### Changed`セクション最終行の後に追加:

```markdown
- QUICK-REFERENCE.mdのMermaid早見表にarchitecture-betaと新規6図種を追加
- ROADMAP.mdのC4Contextを将来拡張候補から現状スコープへ移動
- 03-basic-design-phase.mdのC4Context脚注を正式な成果物セクションに格上げ
```

- [ ] **Step 3: 挿入内容を検証**

Run:
```bash
grep -n "quadrantChart\|C4Context\|block-beta" CHANGELOG.md
```
Expected: `[Unreleased]`内に今回追加した図種名がすべてヒットする。

- [ ] **Step 4: Commit**

```bash
git add CHANGELOG.md
git commit -m "$(cat <<'EOF'
docs: CHANGELOGに図の種類拡張(quadrantChart等6種)を記録
EOF
)"
```

---

## Task 10: 全体整合性の最終確認

**Files:**
- なし（検証のみ、変更なし）

- [ ] **Step 1: 全体で見出し順序が崩れていないか確認**

Run:
```bash
for f in docs/06-project-phase-diagrams/02-requirements-phase.md \
         docs/06-project-phase-diagrams/01-diagram-catalog-overview.md \
         docs/06-project-phase-diagrams/03-basic-design-phase.md \
         docs/06-project-phase-diagrams/06-release-operations-phase.md \
         docs/06-project-phase-diagrams/07-agile-artifacts.md \
         docs/05-real-world-examples/01-skill-architecture-diagram.md; do
  echo "== $f =="
  grep -n "^## " "$f"
done
```
Expected: 各ファイルとも `## この教材で身につくこと → ## 概要 → ## 位置づけ →
## 基本文法・プロパティ解説 → ## 実ソースコード → ## 演習課題 → ## 理解度チェック`
の順序が維持されている（Task 1〜6で新規`##`見出しを追加していないため、
既存の順序がそのまま保たれているはずである）。

- [ ] **Step 2: コードフェンス言語指定の欠落がないか確認**

Run:
```bash
grep -c '^```$' docs/06-project-phase-diagrams/02-requirements-phase.md \
                 docs/06-project-phase-diagrams/01-diagram-catalog-overview.md \
                 docs/06-project-phase-diagrams/03-basic-design-phase.md \
                 docs/06-project-phase-diagrams/06-release-operations-phase.md \
                 docs/06-project-phase-diagrams/07-agile-artifacts.md \
                 docs/05-real-world-examples/01-skill-architecture-diagram.md
```
Expected: 各ファイルとも `0`（言語指定なしの \`\`\` 単独行が存在しない。
すべて \`\`\`text または \`\`\`mermaid になっている）。

- [ ] **Step 3: `00_STYLE_GUIDE.md`「7. レビュー用チェックリスト」に沿ったセルフレビュー**

以下の6項目を目視確認する:
- 体系化: 各追加セクションに学習目標（この教材で身につくこと）が反映されている
- 簡潔: 既存セクションと重複する説明を追加していない
- 読みやすさ: 見出し順と用語が既存箇所と統一されている
- 実用性: 各コード例がコピペで動く最小構成になっている
- 整合性: 対応表の説明文とソースコード例が矛盾しない
- 図表: 全Mermaid例をVS Code/GitHubでプレビュー確認済み

- [ ] **Step 4: 全体の差分をレビュー**

Run:
```bash
git log --oneline -10
git diff master~9 master --stat
```
Expected: Task 1〜9の9コミットが積まれており、変更ファイルが計9件
（QUICK-REFERENCE.md, ROADMAP.md, CHANGELOG.md, および対象6教材ファイル）である。
