define("a/1.0.0/index-debug", ["b", "c", "d"], function(require, exports, module) {
  require("a/1.0.0/relative-debug");
  require("d/0.1.1/index-debug");
});
define("a/1.0.0/relative-debug", ["b", "c", "d"], function(require, exports, module) {
  console.log('relative');
  require('b');
  require("b/src/extra.js");
});
define("d/0.1.1/index-debug", [], function(require, exports, module) {
  exports.d = function() {
    console.log('0.1.1');
  };
});
