const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const jsFiles = [
    './dist/card-element/runtime.js',
    './dist/card-element/polyfills.js',
    './dist/card-element/scripts.js',
    './dist/card-element/main.js'
  ];
  const cssFiles = [
    './dist/card-element/styles.css'
  ];

  await fs.ensureDir('elements');
  await concat(jsFiles, 'elements/card-element.js');
  await concat(cssFiles, 'elements/style.css');
})();