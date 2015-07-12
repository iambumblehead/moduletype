moduletype
==========
**(c)[Guy Bedford][1]** [MIT](#license), edited by [Bumblehead][0]

Pass in the string representation of a file to get the file's module pattern. `moduletype` returns the module pattern type used by a script, for example 'cjs' or 'esm'. 

```javascript
moduletype.is("module.exports = require('dep');"); // 'cjs'
```

The regular expressions used here come from Guy Bedford's [systemjs][2]. Guy gives me permission to republish and use them here. Visit [Guy's website][1].

These formats are identified:

 * `"esm"`: ECMAScript Module (aka es6)
 * `"cjs"`: CommonJS
 * `"amd"`: Asynchronous Module Definition
 * `undefined`: unknown module format. probably a 'global' style script

```javascript
var amdfile = "define(['dep'] , function (d) { return function () {}; });",
    cjsfile = "module.exports = require('dep');",
    esmfile = "import {d} from './dep.js';",
    oldfile = "var global1 = dependency();";

moduletype.is(amdfile);  // 'amd'
moduletype.is(cjsfile);  // 'cjs'
moduletype.is(esmfile);  // 'esm'
moduletype.is(oldfile);  // undefined

moduletype.esm(esmfile); // true
moduletype.esm(amdfile); // false

moduletype.amd(cjsfile); // false
moduletype.amd(amdfile); // true

moduletype.cjs(esmfile); // false
moduletype.cjs(cjsfile); // true
```

[0]: http://bumblehead.com "bumblehead"
[1]: http://guybedford.com "guy bedford"
[2]: https://github.com/systemjs/systemjs "systemjs"

---------------------------------------------------------
#### <a id="license">License:
 ![scrounge](https://github.com/iambumblehead/scroungejs/raw/master/img/hand.png) 

(The MIT License)

Copyright (c) 2015 [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
