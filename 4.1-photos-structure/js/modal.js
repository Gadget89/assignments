//Require $
var $ = require("jquery");
//Jquery dom ready
$(function(){
  //Add data-js to html
  //Create var referencing each data-js attribute
  var $body = $("body");
  var $backButton = $body.find("[data-js='backButton']");
  var $modal = $body.find("[data-js='modal']");
  var $albumPage = $body.find("[data-js='albumPage']")
  var $button1 = $body.find("[data-js='button1']");
  var $button2 = $body.find("[data-js='button2']");
  var $button3 = $body.find("[data-js='button3']");
  var $button4 = $body.find("[data-js='button4']");
  var $button5 = $body.find("[data-js='button5']");
  var $button6 = $body.find("[data-js='button6']");
  var modalImg = $body.find("[data-js='modalImg']");

  //Click event on photo elements variable
  //Inside of click event open modal
  $button1.on("click", function(e){
    $modal.removeClass("hide");
    $albumPage.addClass("hide");
// Trying to inject image into HTML using JS but not able to get
    // it working quite right yet. An alternative way to make this
    // work is to put the image in a seperate modal for each photo
    // but that seems to reppetative. Moving on for now.
    // var $image1 = $("<img>")
    //   .attr({
    //     alt: "Cave by the beach",
    //     class: "showImage",
    //     src: "assets/cave.jpg"
    //   });
    //   var imgHTML = $("modalImg")
    //     .append($image1);
    });
    // This click event closes the modal and returns to album page
    $backButton.on("click", function(e){
    $modal.addClass("hide");
    $albumPage.removeClass("hide");
  });
  $button2.on("click", function(e){
    $modal.removeClass("hide");
    $albumPage.addClass("hide");
  });
    $backButton.on("click", function(e){
    $modal.addClass("hide");
    $albumPage.removeClass("hide");
  });
  $button3.on("click", function(e){
    $modal.removeClass("hide");
    $albumPage.addClass("hide");
  });
    $backButton.on("click", function(e){
    $modal.addClass("hide");
    $albumPage.removeClass("hide");
  });
  $button4.on("click", function(e){
    $modal.removeClass("hide");
    $albumPage.addClass("hide");
  });
    $backButton.on("click", function(e){
    $modal.addClass("hide");
    $albumPage.removeClass("hide");
  });
  $button5.on("click", function(e){
    $modal.removeClass("hide");
    $albumPage.addClass("hide");
  });
    $backButton.on("click", function(e){
    $modal.addClass("hide");
    $albumPage.removeClass("hide");
  });
  $button6.on("click", function(e){
    $modal.removeClass("hide");
    $albumPage.addClass("hide");
  });
    $backButton.on("click", function(e){
    $modal.addClass("hide");
    $albumPage.removeClass("hide");
  });
});
