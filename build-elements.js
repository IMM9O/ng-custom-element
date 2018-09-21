const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/card-element/runtime.js',
    './dist/card-element/polyfills.js',
    './dist/card-element/scripts.js',
    './dist/card-element/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/card-element.js');
})();