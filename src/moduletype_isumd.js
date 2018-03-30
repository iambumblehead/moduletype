// Filename: moduletype_isumd.js  
// Timestamp: 2015.12.19-16:54:35 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>  

const moduletype_isamd = require('./moduletype_isamd'),
      moduletype_iscjs = require('./moduletype_iscjs');

module.exports = filestr =>
  moduletype_isamd(filestr) &&
  moduletype_iscjs(filestr, true);
