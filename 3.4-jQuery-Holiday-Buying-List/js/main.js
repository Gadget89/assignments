// Main JS
$(function() {
  var $body = $("body");

  var $textArea = $body.find("[data-js='postForm__text']");
  var $submitButton = $body.find("[data-js='postForm__submit']");
  var $postsElement = $body.find("[data-js='posts']");

  $submitButton.on("click", function(e){
    e.preventDefault();
    var textAreaValue = $textArea.val();
    var textAreaArray = textAreaValue.split(",");
    var textOnly = textAreaArray [0];
    var priceOnly = textAreaArray [1];

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

    var $checkButton = $("<button>")
      .attr({
        class: "checkButton",
        type: "button",
        value: "line",
      });

    var $articleHTML = $("<article>")
      .append($checkButton)
      .append($newItem)
      .append($newItemPrice)
    ;

    $postsElement.prepend($articleHTML)
  });
});
