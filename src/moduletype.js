// Filename: moduletype.js  
// Timestamp: 2018.03.30-03:52:00 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>

const cjs = require('./moduletype_iscjs'),
      amd = require('./moduletype_isamd'),
      umd = require('./moduletype_isumd'),    
      esm = require('./moduletype_isesm');

let o = module.exports = {
  umd,
  cjs,
  amd,
  esm,

  is : filestr => {
    if (typeof filestr !== 'string')
      throw new Error('filestr must be a string');

    return [ 'umd', 'esm', 'cjs', 'amd' ].find(fn => o[fn](filestr));
  }
};
