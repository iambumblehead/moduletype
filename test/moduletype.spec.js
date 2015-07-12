// Filename: moduletype.spec.js  
// Timestamp: 2015.07.12-13:41:49 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>  
var fs = require('fs'),
    moduletype = require('../src/moduletype');

var read = function (filename) {
  return fs.readFileSync(filename, 'utf-8');  
};

var type_cjs_arr = [
  './test/type_cjs1.js'
].map(read);

var type_amd_arr = [
  './test/type_amd1.js'
].map(read);

var type_esm_arr = [
  './test/type_esm1.js'      
].map(read);

var type_global_arr = [
  './test/type_global1.js'
].map(read);

var type_is = function (type) {
  return function (file) {
    return moduletype.is(file) === type;
  };
};

describe("moduletype", function () {
  it("should identify the 'cjs' module pattern", function () {
    expect( type_cjs_arr.every( type_is('cjs')) ).toBe( true );
  });
  
  it("should identify the 'esm' module pattern", function () {
    expect( type_esm_arr.every( type_is('esm')) ).toBe( true );
  });

  it("should identify the 'amd' module pattern", function () {
    expect( type_amd_arr.every( type_is('amd')) ).toBe( true );
  });

  it("should return unidentified pattern as 'undefined'", function () {
    expect( type_global_arr.every( type_is(undefined)) ).toBe( true );
  });

  it("should correctly handle the example shown in the README", function () {
    var amdfile = "define(['dep'] , function (d) { return function () {}; });",
        cjsfile = "module.exports = require('dep');",
        esmfile = "import {d} from './dep.js';",
        oldfile = "var global1 = dependency();";

    console.log(moduletype.is(amdfile));  // 'amd'
    console.log(moduletype.is(cjsfile));  // 'cjs'
    console.log(moduletype.is(esmfile));  // 'esm'
    console.log(moduletype.is(oldfile));  // undefined    

    console.log(moduletype.esm(esmfile)); // true
    console.log(moduletype.esm(amdfile)); // false

    console.log(moduletype.amd(cjsfile)); // false
    console.log(moduletype.amd(amdfile)); // true    

    console.log(moduletype.cjs(esmfile)); // false
    console.log(moduletype.cjs(cjsfile)); // true
  });
});


