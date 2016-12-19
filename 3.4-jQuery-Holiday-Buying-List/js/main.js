// Main JS
//Code for DOM
$(function() {
  var $body = $("body");
  // Placeholders
  var $textArea = $body.find("[data-js='postForm__text']");
  var $submitButton = $body.find("[data-js='postForm__submit']");
  var $postsElement = $body.find("[data-js='posts']");
  var $total = $body.find("[data-js='total']");
  // When the "ADD" button is clicked it will execute all of this
  $submitButton.on("click", function(e){
    e.preventDefault();
    // This gets the value inputed into the form
    var textAreaValue = $textArea.val();
    // This splits the text and price seperated by ","
    var textAreaArray = textAreaValue.split(",");
    // This gets the text only by getting the first object in the array
    var textOnly = textAreaArray [0];
    // This gets the price only by getting the second object in the array
    var priceOnly = textAreaArray [1];
    // Set the attributes for functions
    var $newItem = $("<p>")
      .text(textOnly)
      .attr({
        class: "inputText",
      })
      ;
    var $newItemPrice = $("<p>")
      .text("$" + priceOnly)
      .attr({
        class: "inputPrice"
      })
      ;
    var $checkButton = $("<button>")
      .attr({
        class: "checkButton",
        type: "button",
        value: "line",
      })
      ;
    var $finalTotal = $("<p>")
      .text(priceOnly)
      .attr({
        class: "total",
        "data-js": "total"
      })
    // Append new output below form
    var $articleHTML = $("<article>")
      .append($checkButton)
      .append($newItem)
      .append($newItemPrice)
    // Send to HTML
    $postsElement.prepend($articleHTML)
    // Eval priceOnly array to output to total
    // Tried to eval the total price but was not able to do so, need
        // to keep looking for right way to make code to do this
    $finalTotal.text($finalTotal);
  });
  // Set checkButton to strikethrough item name and price once clicked
});
