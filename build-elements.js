const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const jsFiles = [
    './dist/ng-element/runtime.js',
    './dist/ng-element/polyfills.js',
    './dist/ng-element/scripts.js',
    './dist/ng-element/main.js'
  ];
  const cssFiles = ['./dist/ng-element/styles.css'];

  await fs.ensureDir('elements');
  await concat(jsFiles, 'elements/card-element.js');
  await concat(cssFiles, 'elements/style.css');
})();
