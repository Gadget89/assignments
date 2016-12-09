//TODO

// This is the 'addEventListener' for the document
document.addEventListener("DOMContentLoaded", function() {
  // This is event listener & callback for clearButton
  var clearButtonElement = document.querySelector("[data-js='clearButton']");
  // This is event listener & callback for display
  var displayElement = document.querySelector("[data-js='display']");
  clearButtonElement.addEventListener("click", function(){
    // This will clear the display when clearButtonElement is clicked
    displayElement.textContent = "";
    })
  // This is event listener & clallback for 7 button
  var element7 = document.querySelector("[data-js='7button']");
  var displayElement = document.querySelector("[data-js='display']");
    element7.addEventListener("click", function(){
      displayElement.textContent += 7;
    })
  // This is event listener & callback for 8 button
  var element8 = document.querySelector("[data-js='8button']");
  var displayElement = document.querySelector("[data-js='display']");
    element8.addEventListener("click", function(){
      displayElement.textContent += 8;
    })
  // This is event listener & callback for 9 button
  var element9 = document.querySelector("[data-js='9button']");
  var displayElement = document.querySelector("[data-js='display']");
    element9.addEventListener("click", function(){
      displayElement.textContent += 9;
    })
  // This is event listener & callback for / button
  var elementDivide = document.querySelector("[data-js='/button']");
  var displayElement = document.querySelector("[data-js='display']");
    elementDivide.addEventListener("click", function(){
      displayElement.textContent += " / ";
    })
  // This is event listener & callback for 4
  var element4 = document.querySelector("[data-js='4button']");
  var displayElement = document.querySelector("[data-js='display']");
    element4.addEventListener("click", function(){
      displayElement.textContent += 4;
    })
  // This is event listener & callback for 5
  var element5 = document.querySelector("[data-js='5button']");
  var displayElement = document.querySelector("[data-js='display']");
    element5.addEventListener('click', function(){
      displayElement.textContent += 5;
    })
  // This is event listener & callback for 6
  var element6 = document.querySelector("[data-js='6button']");
  var displayElement = document.querySelector("[data-js='display']");
    element6.addEventListener('click', function(){
      displayElement.textContent += 6;
    })
  // This is event listener & callback for X button
  var elementMultiply = document.querySelector("[data-js='Xbutton']");
  var displayElement = document.querySelector("[data-js='display']");
    elementMultiply.addEventListener('click', function(){
      displayElement.textContent += "*";
    })
  // This is event listener & callback for 1
  var element1 = document.querySelector("[data-js='1button']");
  var displayElement = document.querySelector("[data-js='display']");
    element1.addEventListener('click', function(){
      displayElement.textContent += 1;
    })
  // This is event listener & callback for 2
  var element2 = document.querySelector("[data-js='2button']");
  var displayElement = document.querySelector("[data-js='display']");
    element2.addEventListener('click', function(){
      displayElement.textContent += 2;
    })
  // This is event listener & callback for 3
  var element3 = document.querySelector("[data-js='3button']");
  var displayElement = document.querySelector("[data-js='display']");
    element3.addEventListener('click', function(){
      displayElement.textContent += 3;
    })
  // This is event listener & callback for - button
  var elementSubtract = document.querySelector("[data-js='-button']");
  var displayElement = document.querySelector("[data-js='display']");
    elementSubtract.addEventListener('click', function(){
      displayElement.textContent += " - ";
    })
  // This is event listener & callback for 0
  var element0 = document.querySelector("[data-js='0button']");
  var displayElement = document.querySelector("[data-js='display']");
    element0.addEventListener('click', function(){
      displayElement.textContent += 0;
    })
  // This is event listener & callback for '.' button
  var elementPeriod = document.querySelector("[data-js='periodButton']");
  var displayElement = document.querySelector("[data-js='display']");
    elementPeriod.addEventListener('click', function(){
      displayElement.textContent += ".";
    })
  // This is event listener & callback for = button
  var elementEqual = document.querySelector("[data-js='=button']");
  var displayElement = document.querySelector("[data-js='display']");
    elementEqual.addEventListener('click', function(){
      var answer = eval(displayElement.textContent);
      displayElement.textContent = answer;
    })
  // This is event listener & callback for + button
  var elementPlus = document.querySelector("[data-js='+button']");
  var displayElement = document.querySelector("[data-js='display']");
    elementPlus.addEventListener('click', function(){
      displayElement.textContent += "+";
    })
})
