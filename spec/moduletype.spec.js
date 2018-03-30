// Filename: moduletype.spec.js  
// Timestamp: 2016.06.20-13:34:20 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>  
let fs = require('fs'),
    moduletype = require('../'),

    read = filename => fs.readFileSync(filename, 'utf-8'),
    type_is = type => file => moduletype[type](file) === true,
    
    type_cjs_arr = ['./spec/type_cjs1.js'].map(read),
    type_amd_arr = ['./spec/type_amd1.js'].map(read),
    type_esm_arr = ['./spec/type_esm1.js' ].map(read),
    type_umd_arr = ['./spec/type_umd1.js'].map(read),
    type_global_arr = ['./spec/type_global1.js'].map(read);

describe("moduletype", () => {
  it("should identify the 'cjs' module pattern", () => {
    expect( type_cjs_arr.every( type_is('cjs')) ).toBe( true );
  });
  
  it("should identify the 'esm' module pattern", () => {
    expect( type_esm_arr.every( type_is('esm')) ).toBe( true );
  });

  it("should identify the 'umd' module pattern", () => {
    expect( type_umd_arr.every( type_is('umd')) ).toBe( true );
  });  

  it("should identify the 'amd' module pattern", () => {
    expect( type_amd_arr.every( type_is('amd')) ).toBe( true );
  });

  it("should return unidentified pattern as 'undefined'", () => {
    expect( () => moduletype.is(undefined) ).toThrow( new Error('filestr must be a string') );
  });

  it("should correctly handle the example shown in the README", () => {
    var amdfile = "define(['dep'] , function (d) { return () => {}; });",
        //bjsfile = "Object.defineProperty(exports, '__esModule', {",
        cjsfile = "module.exports = require('dep');",
        esmfile = "import {d} from './dep.js';",
        oldfile = "var global1 = dependency();";
      /*
    console.log(moduletype.is(amdfile));  // 'amd'
    //console.log(moduletype.is(bjsfile));  // 'bjs'    
    console.log(moduletype.is(cjsfile));  // 'cjs'
    console.log(moduletype.is(esmfile));  // 'esm'
    console.log(moduletype.is(oldfile));  // undefined    

    console.log(moduletype.esm(esmfile)); // true
    console.log(moduletype.esm(amdfile)); // false

    console.log(moduletype.amd(cjsfile)); // false
    console.log(moduletype.amd(amdfile)); // true    

    console.log(moduletype.cjs(esmfile)); // false
    console.log(moduletype.cjs(cjsfile)); // true
       */
    //console.log(moduletype.bjs(esmfile)); // false
    //console.log(moduletype.bjs(bjsfile)); // true
  });
});


