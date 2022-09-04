const pug = require('pug');
const fs = require('fs');
const path = require('path');

const indexCompiler = pug.compileFile('index.pug');
fs.writeFileSync(
  path.join(__dirname, 'html', 'index.html'),
  indexCompiler({ aVariable: 'Christian' })
);
