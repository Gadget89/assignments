// Create DOM
document.addEventListener("DOMContentLoaded", function(){
  // Find elemements to modify later
  var movieSectionElement = document.querySelector("[data-js='body']")
  // Crate instance of XHR object
  var xhr = new XMLHttpRequest();
  // Open specific URL
  xhr.open("GET", "http://www.omdbapi.com/?t=machete&y=&plot=short&r=json");
  // Listen for the "load event"
  xhr.addEventListener("load", function(e){
    // Type casting
    var xhrData = this.response;
    var JSONData = JSON.parse(xhrData);
    // Create reference to array inside of of results
      var movieInfo = "<article class=New>";
      movieInfo += "<h1 class=Title>";
      movieInfo += JSONData.Title + " "+ JSONData.Year;
      movieInfo += "</h1>";
      movieInfo += "<img src='";
      movieInfo += JSONData.Poster;
      movieInfo += "'/>";
      movieInfo += "<ul>";
      movieInfo += "<li>";
      movieInfo += "Released: " + JSONData.Released;
      movieInfo += "<li>";
      movieInfo += "Rated: " + JSONData.Rated;
      movieInfo += "<li>";
      movieInfo += "Directed by: " + JSONData.Director;
      movieInfo += "<li>";
      movieInfo += "Cast: "+ JSONData.Actors;
      movieInfo += "</ul>"
      movieInfo += "<p>";
      movieInfo += JSONData.Plot;
      movieInfo += "</p>";
      movieInfo += "</article>";

      movieSectionElement.innerHTML += movieInfo;
  })
  xhr.send();
})
