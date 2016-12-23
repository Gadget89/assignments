// Require $
var $ = require("jquery");
// Jquery dom ready
$(function() {
  // Add data-js to html
  // Var(s) to reference (.find) each data-js attribute
  var $body = $("body");
  var $displayWindow = $body.find("[data-js='display']");
  var $clearButton = $body.find("[data-js='clearButton']");
  var $buttonElement = $body.find("[data-js='button']");
  var $equalButton = $body.find("[data-js='equalButton']")
  // Click event on button element variables
  $buttonElement.on("click", function(e){
  // Inside of this anonymous callback function 'this'
   //specific button was clicked
  // Find what was clicked and use jquery
  // With the from above... fidn reference to button that
    // was clicked
  var $clickedButtonElement = $(this);
  var outputString = $displayWindow.text();
  var numberClicked = $clickedButtonElement.text();

  $displayWindow.text(outputString + numberClicked);
  });
  // Create eval
  $equalButton.on("click", function(){
    var answer = eval($displayWindow.text());
  $displayWindow.html(answer);
  });
  $clearButton.on("click", function(){
    var $this = $displayWindow.html("");
  });
 });
