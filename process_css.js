const postcss = require('postcss');
const prefixer = require('postcss-prefix-selector');
const fs = require('fs');

function processCss(filename, prefix) {
  const css = fs.readFileSync(filename, 'utf8');
  const out = postcss().use(prefixer({
    prefix: prefix,
    transform: function (prefix, selector, prefixedSelector, filePath, rule) {
      if (selector === 'body' || selector === 'html' || selector === ':root') {
        return prefix;
      }
      return prefixedSelector;
    }
  })).process(css).css;
  fs.writeFileSync(filename, out);
}

processCss('src/DesktopApp.css', '.desktop-view');
processCss('src/MobileApp.css', '.mobile-view');
