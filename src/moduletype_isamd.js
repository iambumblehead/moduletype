// Filename: moduletype_isamd.js  
// Timestamp: 2016.06.20-13:33:16 (last modified)
// Author(s): Guy Bedford <guybedford@gmail.com>, bumblehead <chris@bumblehead.com>  
//
// https://github.com/systemjs/systemjs/blob/master/lib/amd.js#L10

module.exports = (amdRe => {
  amdRe = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])define\s*\(\s*("[^"]+"\s*,\s*|'[^']+'\s*,\s*)?\s*(\[(\s*(("[^"]+"|'[^']+')\s*,|\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*(\s*("[^"]+"|'[^']+')\s*,?)?(\s*(\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*\s*\]|function\s*|{|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*\))/;
  
  return filestr =>
    amdRe.test(filestr);
})();
