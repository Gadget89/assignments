// Require $
var $ = require("jquery");
// Jquery dom ready
$(function() {
  // Add data-js to html
  // Var(s) to reference (.find) each data-js attribute
  var body = $("body");
  // Click event on button element variables
  $buttonElement.on("click", function(e){
  // Inside of this anonymous callback function 'this'
   //specific button was clicked

  // Find what was clicked and use jquery
  // With the from above... fidn reference to button that
    // was clicked
  var $clickedButtonElement = $(this);
  var $clickedButton = $clickedButtonElement.find("[data-js='']")
  // Create...

  })
})
