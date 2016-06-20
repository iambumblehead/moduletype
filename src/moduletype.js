// Filename: moduletype.js  
// Timestamp: 2016.04.03-17:56:34 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>

require('array.prototype.find');

var moduletype_iscjs = require('./moduletype_iscjs'),
    moduletype_isamd = require('./moduletype_isamd'),
    moduletype_isumd = require('./moduletype_isumd'),    
    moduletype_isesm = require('./moduletype_isesm');

var moduletype = module.exports = (function (o) {

  o = Object.create({
    is : function (filestr) {
      if (typeof filestr !== 'string') {
        throw new Error('filestr must be a string');
      }

      return Object.keys(o).find(function (typefn) {
        return o[typefn](filestr);
      });
    }
  });

  o.umd = moduletype_isumd;
  o.cjs = moduletype_iscjs;
  o.amd = moduletype_isamd;
  o.esm = moduletype_isesm;

  return o;

}());
