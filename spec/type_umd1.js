// Filename: type_umd1.js  
// Timestamp: 2015.12.19-16:56:02 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>

(function (root, factory) {
  if (typeof exports === "object" && exports) {
    factory(exports); // CommonJS
  } else {
    var mustache = {};
    factory(mustache);
    if (typeof define === "function" && define.amd) {
      define(mustache); // AMD
    } else {
      root.Mustache = mustache; // <script>
    }
  }
}(this, function (mustache) {

  mustache.isumd = true;
  
}));
