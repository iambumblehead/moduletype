// Filename: moduletype_isumd.js  
// Timestamp: 2015.12.19-16:54:35 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>  

var moduletype_isamd = require('./moduletype_isamd'),
    moduletype_iscjs = require('./moduletype_iscjs');

var moduletype_isumd = module.exports = function (filestr) {
  return moduletype_isamd(filestr) && moduletype_iscjs(filestr, true);
};

