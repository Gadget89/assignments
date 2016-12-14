// Main JS //
// This is an anonymous function that is called when all DOM elements have been loaded
$(function(){
  // This is a reference for the sections
  var $sectionElements = $("[data-js='listItem']");
  // This is a reference listener
  $sectionElements.on("click", function(e){
    // This finds the the section that has been clicked
    var $clickedSection = $(this);
    // This removes class of expand
    $sectionElements.filter(".expand").removeClass("expand");
    // This will expand the element
    $clickedSection.addClass("expand");
  });
});
