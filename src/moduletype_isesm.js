// Filename: moduletype_isesm.js  
// Timestamp: 2015.07.12-13:26:50 (last modified)
// Author(s): Guy Bedford <guybedford@gmail.com>, bumblehead <chris@bumblehead.com>

var moduletype_isesm = module.exports = (function (esmRe) {
  esmRe = /(^\s*|[}\);\n]\s*)(import\s+(['"]|(\*\s+as\s+)?[^"'\(\)\n;]+\s+from\s+['"]|\{)|export\s+\*\s+from\s+["']|export\s+(\{|default|function|class|var|const|let|async\s+function))/;    
    
  return function (filestr) {
    return esmRe.test(filestr);
  };
}());
