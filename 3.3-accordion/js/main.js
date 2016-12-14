// Main JS //
$(function(){
  var $itemElements = $("[data-js='item']");
  $itemElements.on("click", function(e){
    var $clickedItem = $(this);
    $itemElements.filter(".expand").removeClass("expand");
    $clickedItem.addClass("expand");
  });
});
