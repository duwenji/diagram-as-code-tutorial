/**
 * docs/<chapter>/examples/ 配下の全 .dot ファイルを
 * ローカルの `dot` コマンドでPNGにレンダリングするスクリプト。
 *
 * 使い方: node tools/render-graphviz.js
 * 前提: Graphviz (dot コマンド) がPATH上にインストールされていること。
 */

const { execFileSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const DOCS_DIR = path.resolve(__dirname, '../docs');

function collectDotFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let results = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      results = results.concat(collectDotFiles(fullPath));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.dot')) {
      const normalized = fullPath.replace(/\\/g, '/');
      if (normalized.includes('/docs/') && normalized.includes('/examples/')) {
        results.push(fullPath);
      }
    }
  }

  return results;
}

function renderAll() {
  const files = collectDotFiles(DOCS_DIR).sort();

  if (files.length === 0) {
    console.log('examples 配下に.dotファイルが見つかりません: ' + DOCS_DIR);
    process.exit(1);
  }

  console.log(`${files.length} 個の.dotファイルを処理します...\n`);

  let success = 0;
  let failed = 0;

  for (const dotPath of files) {
    const baseName = path.basename(dotPath, '.dot');
    const pngPath = path.join(path.dirname(dotPath), baseName + '.png');
    const displayPath = path.relative(DOCS_DIR, dotPath).replace(/\\/g, '/');

    console.log(`[${success + failed + 1}/${files.length}] ${displayPath} ...`);

    try {
      execFileSync('dot', ['-Tpng', dotPath, '-o', pngPath], { stdio: 'pipe' });
      success++;
    } catch (err) {
      console.error(`  失敗: ${err.message}`);
      failed++;
    }
  }

  console.log(`\n完了: 成功 ${success} / 失敗 ${failed}`);
  if (failed > 0) {
    process.exit(1);
  }
}

renderAll();
