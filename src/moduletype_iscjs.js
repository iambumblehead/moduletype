// Filename: moduletype_iscjs.js  
// Timestamp: 2016.06.20-13:38:10 (last modified)
// Author(s): Guy Bedford <guybedford@gmail.com>, bumblehead <chris@bumblehead.com>  

// https://github.com/systemjs/systemjs/blob/master/lib/cjs.js
//
// require('...') || exports[''] = ... || exports.asd = ... || module.exports = ...
// RegEx adjusted from https://github.com/jbrantly/yabble/blob/master/lib/yabble.js#L339

module.exports = ((exportsRe, exportstightRe, requireRe) => {

  exportsRe = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])(exports\s*(\[['"]|\.)|module(\.exports|\['exports'\]|\["exports"\])\s*(\[['"]|[=,\.])|typeof exports)/;
  requireRe = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF."'])require\s*\(\s*("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*')\s*\)/g;  
  
  return filestr => {
    exportsRe.lastIndex = 0;        
    requireRe.lastIndex = 0;

    return Boolean(
      requireRe.exec(filestr) || exportsRe.exec(filestr));
  };
})();
