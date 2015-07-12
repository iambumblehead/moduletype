// Filename: moduletype_iscjs.js  
// Timestamp: 2015.07.12-13:43:20 (last modified)
// Author(s): Guy Bedford <guybedford@gmail.com>, bumblehead <chris@bumblehead.com>  

// https://github.com/systemjs/systemjs/blob/master/lib/cjs.js
//
// require('...') || exports[''] = ... || exports.asd = ... || module.exports = ...
// RegEx adjusted from https://github.com/jbrantly/yabble/blob/master/lib/yabble.js#L339

var moduletype_iscjs = module.exports = (function (exportsRe, requireRe) {
  exportsRe = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.]|module\.)exports\s*(\[['"]|\.)|(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])module\.exports\s*[=,]/,
  requireRe = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF."'])require\s*\(\s*("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*')\s*\)/g;
  
  return function (filestr) {
    exportsRe.lastIndex = 0;
    requireRe.lastIndex = 0;

    return (requireRe.exec(filestr) || exportsRe.exec(filestr)) ? true : false;
  };
}());