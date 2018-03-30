// Filename: moduletype.js  
// Timestamp: 2016.04.03-17:56:34 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>

const cjs = require('./moduletype_iscjs'),
      amd = require('./moduletype_isamd'),
      umd = require('./moduletype_isumd'),    
      esm = require('./moduletype_isesm');

module.exports = {
  umd,
  cjs,
  amd,
  esm,

  is : filestr => {
    if (typeof filestr !== 'string')
      throw new Error('filestr must be a string');

    return [ umd, esm, cjs, amd ].find(fn => fn(filestr));
  }
};
