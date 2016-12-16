// Main JS
$(function() {
  var $body = $("body");

  var $textArea = $body.find("[data-js='postForm__text']");
  var $submitButton = $body.find("[data-js='postForm__submit']");
  var $postsElement = $body.find("[data-js='posts']");

  $submitButton.on("click", function(e){
    e.preventDefault();
    var textAreaValue = $textArea.val();

    var $newItem = $("<p>")
      .text(textAreaValue)
      .attr({
        class: "inputText",
      })
    ;
    var $checkButton = $("<button>")
      .attr({
        class: "checkButton",
        type: "button",
        value: "line",
        onclick: "lineThrough"
      });

    var $articleHTML = $("<article>")
      .append($checkButton)
      .append($newItem)
    ;

    $postsElement.prepend($articleHTML)
  });
});
