(function (win, doc) {
  "use strict";

  var $inputUsername = doc.querySelector("#username");
  var $inputPassword = doc.querySelector("#password");
  var $button = doc.querySelector("#button");

  $button.addEventListener(
    "su",
    function (event) {
      event.preventDefault();
      console.log("Click no botão");
    },
    false
  );
})(window, document);
