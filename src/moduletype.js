// Filename: moduletype.js  
// Timestamp: 2015.07.12-13:11:54 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>

require('array.prototype.find');

var moduletype_iscjs = require('./moduletype_iscjs'),
    moduletype_isamd = require('./moduletype_isamd'),
    moduletype_isesm = require('./moduletype_isesm');

var moduletype = module.exports = (function (o) {

  o = Object.create({
    type : function (filestr) {
      return Object.keys(o).find(function (typefn) {
        return o[typefn](filestr);
      });
    },
    
    is : function (filestr) {
      if (typeof filestr !== 'string') {
        throw new Error('filestr must be a string');
      }

      return o.type(filestr);
    }
  });

  o.cjs = moduletype_iscjs;
  o.amd = moduletype_isamd;
  o.esm = moduletype_isesm;

  return o;

}());
