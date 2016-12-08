var myObject = {
  superPower: "som text",
  anotherProperty: "something",

};

/**
 * PART 0
 *
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else construct available in Javascript.
 */

function max(a, b){
    // YOUR CODE HERE
  if(a > b){
    return a;
  }else if (b > a) {
    return b;
  }else{
    return b;
  }
}

console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);
console.assert(max("aaa",0) === 0);
console.assert(isNaN(max("aaa","bbb")));

/**
 * PART 1
 *
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

function maxOfThree(a, b, c){
    // YOUR CODE HERE
    if (a > b && a > c) {
      return a;
    }else if (b > a && b > c) {
      return b;
    }else if (c > a && c > b) {
      return c;
    }else if (isNaN(a) && b < c) {
      return c;
    }
  }

console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(maxOfThree("aaa",0,1) === 1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

/**
 * PART 2
 *
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

function isVowel(char){
    var vowelsArray = [
      "a", "e", "i", "o", "u", "A", "E", "I", "O", "U"
    ];

    if (vowelsArray.indexOf(char) === -1){
      return false;
    }else{
      return true;
    }
}

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);

/**
 * PART 3
 *
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".

 */

function rovarspraket(text){
    // YOUR CODE HERE
    textAsString = text.toString();

    var textArray = textAsString.split("");

    for(var i=0; i < textArray.length; i++){

      var currentLetter = textArray[i];

      if(!isVowel(currentLetter)){

        var doubledText = currentLetter + "o" + currentLetter;

        textArray.splice(i, 1, doubledText);
      }
    }
    return textArray.join("");
}
console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
//For line this to work, I think something in the function isVowel
//makes it add an o to it when it is looking for 0. I tried to Use
//else to overcome this but I couldn't make that work. Stuck.
//console.assert(rovarspraket(0) === "0")

/**
 * Part 4
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

function reverse(str){
    // YOUR CODE HERE
    //I saw from the last problem that I could use split("") to
    //make convert the string to an array but couldn't figure out
    //how to go any further on this problem, so I googled it and
    //found a video on youTube that explains this. //https://www.youtube.com/watch?v=gPAtcWuM8AM
    //I was able to understand why this works, my barrier was not
    //knowing that there was a dot syntax of reverse & join.
    var word = str.split("");
    word.reverse();
    var newWord = word.join("");
    return newWord;
}

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/**
 * Part 5
 *
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

function findLongestWord(sentence){
    // YOUR CODE HERE
    var longest = sentence.split("");
    longest.length();
    //At this point im too exausted to go any further but I know
    //that I have the string split and I neeto put it into a for
    //loop to find length and find > to return.
}

console.assert(findLongestWord("book dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")
