(function () {
  "use strict";

  function is(obj) {
    return Object.prototype.toString.call(obj);
  }

  function isArray(obj) {
    return is(obj) === "[object Array]";
  }

  function isObject(obj) {
    return is(obj) === "[object Object]";
  }

  function isFunction(obj) {
    return is(obj) === "[object Function]";
  }

  function isNumber(obj) {
    return is(obj) === "[object Number]";
  }

  console.log(isArray(1));
})();
