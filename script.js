//JAVASCRIPT FUNDAMENTALS REVIEW
//Build a pyramid Generator

/*User Stories:

You should have a function named pyramid that takes three arguments.
The first argument should be a string representing the pattern character to repeat in your pyramid.
The second argument should be an integer representing the number of rows in the pyramid.
The third argument should be a Boolean value.
The pyramid function should return a string in which the pattern character is repeated and arranged to form a pyramid having the vertex facing upwards when the third argument is false.
When the third argument is true the pyramid should have the vertex facing downwards.
The vertex row should have a single pattern character, and each other row should have two pattern characters more than the previous one.
Each row should start with a number of spaces sufficient to put the center character of each row in the same column.
The pyramid should start and end with a newline character.*/

function pyramid(char, rows, boolean) {
  if (boolean) {
    let result = "\n";

    for (let i = rows; i >= 1; i--) {
      let spaces = " ".repeat(rows - i);

      let pattern = char.repeat(i * 2 - 1);

      result += spaces + pattern + "\n";
    }
    return result;
  } else {
    let result = "\n";

    for (let i = 1; i <= rows; i++) {
      let spaces = " ".repeat(rows - i);

      let pattern = char.repeat(i * 2 - 1);

      result += spaces + pattern + "\n";
    }
    return result;
  }
}

pyramid("o", 4, false);
pyramid("p", 5, true);

// Build a Gradebook App

/*User Stories:

You should have a function named getAverage that takes an array of test scores as a parameter and returns the average score.
You should have a function named getGrade that takes a student score as a parameter and returns a string representing a letter grade based on the score. Here are the scores and their corresponding letter grades:

Score Range	Grade
100	"A+"
90 - 99	"A"
80 - 89	"B"
70 - 79	"C"
60 - 69	"D"
0 - 59	"F"
You should have a function named hasPassingGrade that takes a score as a parameter and returns either true or false depending on if the score corresponds to a passing grade.
The hasPassingGrade function should use the getGrade function to get the letter grade, and use it to determine if the grade is passing. A passing grade is anything different from "F".
You should have a function named studentMsg that takes an array of scores and a student score as the parameters. The function should return a string with the format:

"Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.", if the student passed the course.
"Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.", if the student failed the course.
Replace average-goes-here with the average of total scores and grade-goes-here with the student's grade. Use getAverage to get the average score and getGrade to get the student's grade.*/

function getAverage(testScoresArr) {
  let sumOfScores = 0;
  for (let testScore of testScoresArr) {
    sumOfScores += testScore;
  }

  let numOfScores = testScoresArr.length;

  let scoreAverage = sumOfScores / numOfScores;

  return scoreAverage;
}

let scoresArr = [80, 55, 75, 89, 65];
console.log(getAverage(scoresArr));

function getGrade(studentScore) {
  if (studentScore === 100) return "A+";
  if (studentScore >= 90) return "A";
  if (studentScore >= 80) return "B";
  if (studentScore >= 70) return "C";
  if (studentScore >= 60) return "D";
  if (studentScore >= 0) return "F";
}

console.log(getGrade(getAverage(scoresArr)));

const hasPassingGrade = (score) => {
  return getGrade(score) !== "F";
};

console.log(hasPassingGrade(80));

function studentMsg(scoresArray, studentScore) {
  let classAverage = getAverage(scoresArray);
  let grade = getGrade(studentScore);

  if (hasPassingGrade(studentScore)) {
    return `Class average: ${classAverage}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${classAverage}. Your grade: ${grade}. You failed the course.`;
  }
}

console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 40));

//Build an Inventory Management Program

/*
In this lab, you will build an inventory management program that will allow you to add, update, find and remove products from the inventory. You will use an array of objects to represent your inventory, where each object will have name and quantity as the keys.

Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should declare an empty array named inventory that will store product objects having a key name with the value of a lowercase string, and a key quantity with the value of an integer.
You should create a function named findProductIndex that takes the product name as its argument and returns the index of the corresponding product object inside the inventory array. The function should always use the lowercase form of the product name to perform the search. If the product is not found, the function should return -1.
You should create a function named addProduct that takes a product object as its argument.
If the product is already present in the inventory, the addProduct function should update its quantity value and log to the console the product name followed by a space and quantity updated.
If the product is not present in the inventory, the addProduct function should push the product to the inventory array and log the product name to the console, followed by a space and added to inventory.
You should create a function named removeProduct that takes the product name and quantity as its arguments.
The removeProduct function should subtract the passed quantity from the corresponding product object inside the inventory and log the string Remaining <product-name> pieces: <product-quantity> to the console, where <product-name> should be replaced by the product name, and <product-quantity> should be replaced by the product quantity.
If the quantity after the subtraction is zero, removeProduct should remove the product object from the inventory. If the quantity in the inventory is not enough to perform the subtraction, the removeProduct function should log the string Not enough <product-name> available, remaining pieces: <product-quantity> to the console.
If the product to remove is not present in the inventory, the removeProduct function should log <product-name> not found to the console.
Note: To prevent conflicts, keep only the logging mentioned in the user stories when running tests.
*/

const inventory = [];

function findProductIndex(product) {
  let toFind = product.toLowerCase();

  /*The indexOf method won't work directly with objects in this case. Thus findIndex()*/
  return inventory.findIndex((item) => item.name === toFind);
}

function addProduct(productObj) {
  //check if product is already present in inventory
  const productPresent = inventory.some(
    (item) => item.name === productObj.name.toLowerCase()
  );

  //if present, update quantity
  if (productPresent) {
    inventory[findProductIndex(productObj.name)].quantity +=
      productObj.quantity;
    console.log(`${productObj.name.toLowerCase()} quantity updated`);
  } else {
    inventory.push({
      name: productObj.name.toLowerCase(),
      quantity: productObj.quantity,
    });

    console.log(`${productObj.name.toLowerCase()} added to inventory`);
  }
  return inventory;
}

console.log(addProduct({ name: "Egg", quantity: 5 }));

function removeProduct(product, quantity) {
  const productPresent = inventory.some(
    (item) => item.name === product.toLowerCase()
  );

  if (productPresent) {
    inventory[findProductIndex(product)].quantity -= quantity;

    if (inventory[findProductIndex(product)].quantity > 0) {
      console.log(
        `Remaining ${product.toLowerCase()} pieces: ${
          inventory[findProductIndex(product)].quantity
        }`
      );
    } else if (inventory[findProductIndex(product)].quantity === 0) {
      inventory.splice(inventory[findProductIndex(product)], 1);
    } else if (inventory[findProductIndex(product)].quantity < 0) {
      console.log(
        `Not enough ${product.toLowerCase()} available, remaining pieces: ${
          inventory[findProductIndex(product)].quantity + quantity
        }`
      );
    }
  } else {
    console.log(`${product.toLowerCase()} not found`);
  }
}

removeProduct("Egg", 10);

//Build a Password Generator App

/*In this lab, you'll practice using functions by building a random password generator.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a function called generatePassword that takes a parameter, indicating the length of generated password. You can name the parameter whatever you like.
Your function should return a string which represents a randomly generated password. You should use the following string and different Math methods to help you return a new string with random characters in it: ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*().
You should define a variable called password and assign it the result of calling the generatePassword function with a numeric argument that represents the desired password length.
You should have a console.log that logs the message "Generated password:" followed by the password variable.*/

/* *****my thoughts {take parameter number to use as loop condition.
  
  in the loop, each interation should get a random character from the suitable string of characters which are coverted into an array and selected randomly.
  
  the random caracter selected should then be pushed into an array for the password
  
  the password array should then be converted to a string and returned when the function is called}
  */

const generatePassword = (passwordLength) => {
  let suitableCharStr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  //takes string and converts to an array of each character in the string
  let suitableCharStrArr = suitableCharStr.split("");

  //empty array to store the random characters that will form the password of specific length as determind by the input argument
  let passwordArr = [];

  //for loop to produce randome characters to be pushed to array
  for (let i = 0; i < passwordLength; i++) {
    //gets a random index of a character from the array
    let randomCharIndex = Math.floor(Math.random() * suitableCharStrArr.length);

    passwordArr.push(suitableCharStrArr[randomCharIndex]);
  }

  //returns the password as a string
  return passwordArr.join("");
};

const password = generatePassword(8);
console.log("Generated password:" + password);

// HIGHER ORDER FUNCTIONS AND CALLBACKS
//     !!!!!!!!!    Difference between Higher order function, callback function and Closures??????

/*Build a Library manager ----- WORKSHOP fCC Solution*/
/* Array methods (forEach(), reduce(), map(), filter()*/

const library = [
  {
    title: "Your Next Five Moves: Master the Art of Business Strategy",
    author: "Patrick Bet-David and Greg Dinkin",
    about: "A book on how to plan ahead",
    pages: 320,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    about:
      "A practical book about discarding bad habits and building good ones",
    pages: 320,
  },
  {
    title:
      "Choose Your Enemies Wisely: Business Planning for the Audacious Few",
    author: "Patrick Bet-David",
    about:
      "A book that emphasizes the importance of identifying and understanding one's adversaries to succeed in the business world",
    pages: 304,
  },
  {
    title: "The Embedded Entrepreneur",
    author: "Arvid Kahl",
    about: "A book focusing on how to build an audience-driven business",
    pages: 308,
  },
  {
    title:
      "How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change",
    author: "Jon Gordon",
    about: "A book about effective ways to lead a coffee bean lifestyle",
    pages: 256,
  },
  {
    title:
      "The Creative Mindset: Mastering the Six Skills That Empower Innovation",
    author: "Jeff DeGraff and Staney DeGraff",
    about: "A book on how to develop creativity and  innovation skills",
    pages: 168,
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki and Sharon Lechter",
    about:
      "A book about financial literacy, financial independence, and building wealth. ",
    pages: 336,
  },
  {
    title: "Zero to Sold",
    author: "Arvid Kahl",
    about: "A book on how to bootstrap a business",
    pages: 500,
  },
];

//returns title, author and pages of all books as a string
function displayBooks(catalog) {
  let output = "Books in the Library:\n";

  catalog.forEach((book) => {
    output += `- ${book.title} by ${book.author} (${book.pages} pages)\n`;
  });

  return output;
}

/*Create a getBookSummaries function with a single parameter, accepting an array with book objects.
The getBookSummaries function should return an array containing all the about property value of each book.*/
function getBookSummaries(catalog) {
  return catalog.map((book) => book.about);
}

/*Create a getBooksByAuthor function with two parameters - an array with book objects and a string with the author.
The function must return an array that contains the books by a particular author.*/
function getBooksByAuthor(catalog, author) {
  return catalog.filter((book) => book.author === author);
}

/* create a getTotalPages function with a single parameter, accepting an array with book objects. 
  The function should return the total number of pages in the books from the array passed to the function.*/
function getTotalPages(catalog) {
  return catalog.reduce((acc, book) => acc + book.pages, 0);
}

const libraryBooks = displayBooks(library);
const bookSummaries = getBookSummaries(library);
const booksByArvidKahl = getBooksByAuthor(library, "Arvid Kahl");
const totalPagesOfBooksInLibrary = getTotalPages(library);

console.log(libraryBooks);
console.log(bookSummaries);
console.log(booksByArvidKahl);
console.log(totalPagesOfBooksInLibrary);

//Build a Book Organizer
/*
  User Stories:
You should have an array of objects named books where each object in the array should have a string title, another string authorName, and a number releaseYear.
Your books array should have a minimum of three objects.
You should have a callback function named sortByYear that accepts two books as parameter for sorting the array.
The sortByYear function should return -1 if the releaseYear of the first book is smaller than that of the second book.
The sortByYear function should return 1 if the releaseYear of the first book is bigger than that of the second book.
The sortByYear function should return 0 if both releaseYear values are equal.
You should filter out books written after a certain year such as 1950 from the books array and save the filtered array in a new array named filteredBooks.
You should sort the books in the filteredBooks array according to their releaseYear in ascending order. You learned in a prior lecture video that the sort() method will sort the array in place. This means the filteredBooks array will be mutated.
  */

const books = [
  {
    title: "Hello",
    authorName: "A",
    releaseYear: 1999,
  },
  {
    title: "Hi",
    authorName: "B",
    releaseYear: 2002,
  },
  {
    title: "Hey",
    authorName: "C",
    releaseYear: 2001,
  },
];

function sortByYear(book1, book2) {
  if (book1.releaseYear - book2.releaseYear < 0) {
    return -1;
  } else if (book1.releaseYear - book2.releaseYear > 0) {
    return 1;
  } else {
    return 0;
  }
}

//filter books released after a specific year (in this case 2000)
let filteredBooks = books.filter((book) => book.releaseYear >= 2000);

//You should call the sort higher order function by passing the sortByYear callback function on the filteredBooks array.
filteredBooks.sort(sortByYear);

console.log(filteredBooks);

//DOM Manipulation and Events
//Build A Storytelling App (Workshop) ***HTML and CSS Preset by fcc

const storyContainer = document.querySelector(".story-container");

const scaryStoryBtn = document.getElementById("scary-btn");
const funnyStoryBtn = document.getElementById("funny-btn");
const adventureStoryBtn = document.getElementById("adventure-btn");

const resultParagraph = document.getElementById("result");

const storyObj = {
  scary: {
    story: `In the dark woods, a group of friends stumbled upon an old, abandoned cabin. They enter the cabin and awaken something malevolent that had been dormant for centuries.`,
    borderColor: "#ee4b2b",
  },
  funny: {
    story: `During a camping trip, Mark decided to show off his culinary skills by cooking dinner over an open fire. However, his attempt caused him to burn the dinner as well as his eyebrows off.`,
    borderColor: "#f1be32",
  },
  adventure: {
    story: `Lost in the heart of the Amazon rain forest, Sarah and Jake stumbled upon an ancient temple. They braved deadly traps and encountered strange wildlife, all while deciphering cryptic clues left behind by a mysterious civilization.`,
    borderColor: "#acd157",
  },
};

function displayStory(genre) {
  if (storyObj[genre]) {
    // Set the story text
    const result = document.getElementById("result");
    result.textContent = storyObj[genre].story;

    // Set the border color
    storyContainer.style.borderColor = storyObj[genre].borderColor;
  }
}

/* fcc solution
function displayStory(genre) {
  if (storyObj.hasOwnProperty(genre)) {
    const result = document.getElementById("result")
    result.textContent = storyObj[genre].story;
    storyContainer.style.borderColor = storyObj[genre].borderColor;
  }
}
  */

scaryStoryBtn.addEventListener("click", () => displayStory("scary"));
funnyStoryBtn.addEventListener("click", () => displayStory("funny"));
adventureStoryBtn.addEventListener("click", () => displayStory("adventure"));

//Build a Favorite Icon Toggler (Lab)
/*
In this lab you will use JavaScript click events to toggle the appearance of a favorite icon. When the heart icon is clicked, the appearance of the heart changes from empty to filled, and vice versa.

Fulfill the user stories below and get all the tests to pass to complete the lab. Do not copy this demo project.

User Stories:

You should have an unordered list with three items.
The unordered list should have the class item-list.
The three list items should contain the item name followed by a span element with the class favorite-icon.
The span element should contain the code &#9825; initially to represent an empty heart.
When a span element containing a heart is clicked, you should add the filled class to the clicked span if it's not already present, and remove it, if it is.
When a span element containing a heart is clicked, the heart symbol should toggle between &#9825; (empty heart) and &#10084; (filled heart), depending on its current state.
*/

//HTML below for this lab
/*
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Favorite Icon Toggle</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <h1 style="font-size: 1em; color: maroon">Build a Favorite Icon Toggler</h1>
    <h2>Some Faves</h2>
    <ul class="item-list">
        <li>Spicy food <span class="favorite-icon">&#9825;</span></li>
        <li>Skipping <span class="favorite-icon">&#9825;</span></li>
        <li>Drawing <span class="favorite-icon">&#9825;</span></li>
    </ul>
    <script src="script.js"></script>
</body>

</html>
*/
const hearts = document.querySelectorAll(".favorite-icon");

//forEach() and querySelectorAll() used as there are multiple "heart"s, otherwise it will only select the first matching element
hearts.forEach((heart) => {
  heart.addEventListener("click", function () {
    if (this.classList.contains("filled")) {
      this.classList.remove("filled");
      this.innerHTML = "&#9825;";
    } else {
      this.classList.add("filled");
      this.innerHTML = "&#10084;";
    }
  });
}); /*

1.Selects all elements with class "favorite-icon"

2.For each heart icon:

If it has the "filled" class:
 Removes the "filled" class
 Changes innerHTML to empty heart (&#9825;)

If it doesn't have the "filled" class:
 Adds the "filled" class
 Changes innerHTML to filled heart (&#10084;)

This matches the requirements exactly by:
  Checking the class first, not the innerHTML
  Using the specific HTML entities mentioned (&#9825; and &#10084;)
  Toggling the "filled" class appropriately
  Working for all heart icons in the list
  
  */

//Build A Musical Instrument Filter (Workshop)

const instrumentsArr = [
  { category: "woodwinds", instrument: "Flute", price: 500 },
  { category: "woodwinds", instrument: "Clarinet", price: 200 },
  { category: "woodwinds", instrument: "Oboe", price: 4000 },
  { category: "brass", instrument: "Trumpet", price: 200 },
  { category: "brass", instrument: "Trombone", price: 300 },
  { category: "brass", instrument: "French Horn", price: 4300 },
  { category: "percussion", instrument: "Drum Set", price: 500 },
  { category: "percussion", instrument: "Xylophone", price: 3000 },
  { category: "percussion", instrument: "Cymbals", price: 200 },
  { category: "percussion", instrument: "Marimba", price: 3000 },
];

const selectContainer = document.querySelector("select");
const productsContainer = document.querySelector(".products-container");

function instrumentCards(instrumentCategory) {
  function checkCategory(instrument) {
    if (instrumentCategory === "all") {
      return true;
    }
    return instrument.category === instrumentCategory;
  }

  const filteredInstruments = instrumentsArr.filter(checkCategory);
  return filteredInstruments;
}

selectContainer.addEventListener("change", () => {
  console.log(instrumentCards(selectContainer.value));
});

//Build A Real Time Counter (Lab)

/* HTML + CSS

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real Time Counter</title>
    <link href="styles.css" rel="stylesheet"></link>
</head>

<body>
    <h1>Character Counter</h1>
    <textarea id="text-input" maxlength=50></textarea>
    <p id="char-count">Character Count: <span id="current-count">0</span>/50</p>

    <script src="script.js"></script>
</body>


</html>

** end of undefined **

** start of undefined **

body{
  background-color: beige;
  font-family: sans-serif;
  text-align: center;
}

textarea{
  height: 8em;
  width: 18em;
}

** end of undefined **


*/

/*
const input = document.getElementById("text-input");

input.addEventListener('change', getLength)

function getLength(){

  const charLength = input.value.length;

return updateChar(charLength);

}

function updateChar(length){
  let count = document.getElementById('current-count');

count.innerHTML = `${length}`;

if (length >= 50){
input.value = input.value.substring(0, 50)

  document.getElementById('char-count').style.color = 'red';
}

} */

//

/*** start of undefined **

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Lightbox Viewer</title>
    <link href="styles.css" rel="stylesheet"></link>
</head>

<body>
    <h1>fCC Gallery</h1>
    <div class="gallery">
        <img class="gallery-item" src="https://cdn.freecodecamp.org/curriculum/labs/stonehenge-thumbnail.jpg">
        <img class="gallery-item" src="https://cdn.freecodecamp.org/curriculum/labs/storm-thumbnail.jpg">
        <img class="gallery-item" src="https://cdn.freecodecamp.org/curriculum/labs/trees-thumbnail.jpg">
    </div>
    <div class="lightbox">
        <span id="close">&times;</span>
        <img class ="lightbox-image"id="lightbox-image">
    </div>

    <script src="script.js"></script>
</body>

</html>

** end of undefined **

** start of undefined **

body {
  text-align: center;
}

.gallery {
  display: flex;
  gap: 0.5em
}

.gallery-item {
  overflow: hidden;
}

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  height: 100%;
  width: 100%;
  background-color: rgba(39, 33, 33, 0.486);
  display: none;
}

.lightbox-image {
  margin: auto;
  height: auto;
  width: 70%;
}

** end of undefined **

** start of undefined **

const gallery = document.querySelectorAll(".gallery-item");

const dialog = document.querySelector(".lightbox")
;

const exitModal = document.getElementById("close");

gallery.forEach(image => {image.addEventListener("click", modal);});

function modal(event){
  dialog.style.display = "flex";
  
  const modalImg = document.getElementById("lightbox-image")

  const fullImage = event.target.src.replace('-thumbnail', '');
    modalImg.src = fullImage;

}

exitModal.addEventListener("click", closeModal)

function closeModal(){
  dialog.style.display = "none";
}

dialog.addEventListener("click",closeModal)

** end of undefined ***/

//*******************************************************************************************************************

//Build A Real Time Counter (Lab)

/* HTML + CSS

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real Time Counter</title>
    <link href="styles.css" rel="stylesheet"></link>
</head>

<body>
    <h1>Character Counter</h1>
    <textarea id="text-input" maxlength=50></textarea>
    <p id="char-count">Character Count: <span id="current-count">0</span>/50</p>

    <script src="script.js"></script>
</body>


</html>

** end of undefined **

** start of undefined **

body{
  background-color: beige;
  font-family: sans-serif;
  text-align: center;
}

textarea{
  height: 8em;
  width: 18em;
}

** end of undefined **


*/

const input = document.getElementById("text-input");

input.addEventListener("change", getLength);

function getLength() {
  const charLength = input.value.length;

  return updateChar(charLength);
}

function updateChar(length) {
  let count = document.getElementById("current-count");

  count.innerHTML = `${length}`;

  if (length >= 50) {
    input.value = input.value.substring(0, 50);

    document.getElementById("char-count").style.color = "red";
  }
}

//

//Build A Rock Paper Scissors Game (Workshop)

//HTML

/*<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rock, Paper, Scissors game</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <h1>Let's play Rock, Paper, Scissors!</h1>
    <main>
      <details class="rules-container">
        <summary>Rules to the game</summary>

        <p>You will be playing against the computer.</p>
        <p>You can choose between Rock, Paper, and Scissors.</p>
        <p>The first one to three points wins.</p>

        <p>Here are the rules to getting a point in the game:</p>
        <ul>
          <li>Rock beats Scissors</li>
          <li>Scissors beats Paper</li>
          <li>Paper beats Rock</li>
        </ul>
        <p>
          If the player and computer choose the same option (Ex. Paper and
          Paper), then no one gets the point.
        </p>
      </details>

      <div class="score-container">
        <strong
          >Player Score: <span class="score" id="player-score">0</span></strong
        >
        <strong
          >Computer Score:
          <span class="score" id="computer-score">0</span></strong
        >
      </div>

      <section class="options-container">
        <h2>Choose an option:</h2>
        <div class="btn-container">
          <button id="rock-btn" class="btn">Rock</button>
          <button id="paper-btn" class="btn">Paper</button>
          <button id="scissors-btn" class="btn">Scissors</button>
        </div>
      </section>

      <div class="results-container">
        <p id="results-msg"></p>
        <p id="winner-msg"></p>
        <button class="btn" id="reset-game-btn">Play again?</button>
      </div>
    </main>
    <script src="./script.js"></script>
  </body>
</html>
*/

//CSS

/*
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --very-dark-blue: #0a0a23;
  --white: #ffffff;
  --yellow: #f1be32;
  --golden-yellow: #feac32;
}

body {
  background-color: var(--very-dark-blue);
  text-align: center;
  color: var(--white);
}

h1 {
  margin: 15px 0 20px;
}

.btn {
  cursor: pointer;
  width: 100px;
  margin: 10px;
  color: var(--very-dark-blue);
  background-color: var(--golden-yellow);
  background-image: linear-gradient(#fecc4c, #ffac33);
  border-color: var(--golden-yellow);
  border-width: 3px;
}

.btn:hover {
  background-image: linear-gradient(#ffcc4c, #f89808);
}

.rules-container {
  padding: 10px 0;
  margin: auto;
  border-radius: 15px;
  border: 5px solid var(--yellow);
  background-color: var(--white);
  color: var(--very-dark-blue);
}

.rules-container ul {
  list-style-type: none;
}

.rules-container p {
  margin: 10px 0;
}

@media (min-width: 760px) {
  .rules-container {
    width: 60%;
  }
}

.score-container {
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
  font-size: 1.2rem;
}

.score {
  font-weight: 500;
}

.results-container {
  font-size: 1.3rem;
  margin: 15px 0;
}

#winner-msg {
  margin-top: 25px;
}

#reset-game-btn {
  display: none;
  margin: 20px auto;
}

*/

//JS - MY SOLUTION

/*The next step is to build out the functionality that will generate a random choice for the computer.
Create a function called getRandomComputerResult that returns a random choice from the options array.
Hint: Don't forget that in the earlier JavaScript fundamentals section, you learned about using Math.random() and Math.floor().*/

const options = ["Rock", "Paper", "Scissors"];

function getRandomComputerResult() {
  const random = Math.floor(Math.random() * options.length);

  const option = options[random];

  return String(option);
}

/*
In this step, you will focus on determining if the player has won the round.
Create a hasPlayerWonTheRound function with two parameters called player and computer.
The function should return true if the player has won the round, and false if the player has lost or tied the round.
Here are the criteria for the player to win a round:
If the player chooses "Rock" and the computer chooses "Scissors"
If the player chooses "Scissors" and the computer chooses "Paper"
If the player chooses "Paper" and the computer chooses "Rock". */

const hasPlayerWonTheRound = (player, computer) => {
  if (player === "Rock" && computer === "Scissors") {
    return true;
  } else if (player === "Scissors" && computer === "Paper") {
    return true;
  } else if (player === "Paper" && computer === "Rock") {
    return true;
  } else {
    return false;
  }
};


/*The next step is to create the variables responsible for keeping track of the player and computer scores.
Create a variable called playerScore and initialize it with the value 0.
Then, create a variable called computerScore and initialize it with the value 0.
You will need to use let to declare these variables because their values will change throughout the game.
Now it's time to get the results of the round. Complete the getRoundResults function.

If the player wins the round, update the playerScore by 1 and return the message "Player wins! [player's choice] beats [computer's choice]".

If the computer and player choose the same option, return the message "It's a tie! Both chose [player's choice]".

If the computer wins the round, update the computerScore by 1 and return the message "Computer wins! [computer's choice] beats [player's choice]".

[computer's choice] should be replaced with computerResult while [player's choice] should be replaced with the userOption.*/

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (computerResult === userOption) {
    return `It's a tie! Both chose ${userOption}`;
  } else if(hasPlayerWonTheRound(userOption, computerResult)/*true, no need to add == true*/) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

/*
The next portion of the workshop is to create the functionality that will show the results.

Start by creating a variable called playerScoreSpanElement and assign it the value of the element with the id player-score.

Then create a variable called computerScoreSpanElement and assign it the value of the element with the id computer-score.

Finally, create a variable called roundResultsMsg and assign it the value of the element with the id results-msg.
*/
let playerScoreSpanElement = document.getElementById("player-score");
let computerScoreSpanElement = document.getElementById("computer-score");
let roundResultsMsg = document.getElementById("results-msg");

/* Now it is time to update the scores and the round results message.

Create a showResults function with a parameter called userOption.

Inside your showResults function, the roundResultsMsg should be updated with the result of the round.

Then, the playerScoreSpanElement and computerScoreSpanElement should also be updated to show the updated scores of the player and computer.

Remember, that the order matters here. You will need to first update the roundResultsMsg, then the playerScoreSpanElement, and finally the computerScoreSpanElement because the roundResultsMsg will be used to determine the scores.*/

const showResults = (userOption) => {
  roundResultsMsg.innerHTML = getRoundResults(`${userOption}`);
  playerScoreSpanElement.innerHTML = playerScore;
  computerScoreSpanElement.innerHTML = computerScore;

  //**change to function #1 as per requirement below (added at  a later stage)
  if(playerScore == 3){
    winnerMsgElement.innerHTML = "Player has won the game!";
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  } else if(computerScore == 3){
    winnerMsgElement.innerHTML = "Computer has won the game!";
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}

//#3 --- added later on

const resetGame = () => {
  playerScore = 0;
  computerScore = 0;
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  winnerMsgElement.innerText = '';
  roundResultsMsg.innerText = '';
}

//#2 --- added later on
  
resetGameBtn.addEventListener('click', resetGame())

/*
Now it is time to test out your showResults function.

Start by creating a variable called rockBtn and assign it the value of the button with the id of rock-btn.

Then, create a variable called paperBtn and assign it the value of the button with the id of paper-btn.

Finally, create a variable called scissorsBtn and assign it the value of the button with the id of scissors-btn.
*/

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

/*The next step is to attach event listeners to each of the buttons you created in the previous step.

Start by creating an event listener for the rockBtn button. When the rockBtn button is clicked, you should call the showResults function with the argument "Rock".

Then, create an event listener for the paperBtn button. When the paperBtn button is clicked, you should call the showResults function with the argument "Paper".

Finally, create an event listener for the scissorsBtn button. When the scissorsBtn button is clicked, you should call the showResults function with the argument "Scissors".

Now, you should be able to click on any of the buttons and see the results for each round.*/

rockBtn.addEventListener("click", () => {showResults("Rock")});
paperBtn.addEventListener("click", () => {showResults("Paper")});
scissorsBtn.addEventListener("click", () => { showResults("Scissors") });

/*
For the last portion of the workshop, you will focus on building out the winner message and reset button functionality.

Start by creating a variable called winnerMsgElement that will store the element with the id of winner-msg.

Then, create a variable called optionsContainer that will store the element with the class of options-container.

Finally, create a variable called resetGameBtn that will store the element with the id of reset-game-btn.*/

const winnerMsgElement = document.getElementById('winner-msg');
const optionsContainer = document.querySelector('.options-container');
const resetGameBtn = document.getElementById('reset-game-btn')

/* **change to function #1
If you try to play the game, you will see that you can play for an infinite amount of rounds. But the rules state that the first one to three points wins. You want to check if there's a winner, and display a message.

In your showResults function, if the player has reached three points, update the winnerMsgElement to "Player has won the game!". If the computer has reached three points, update the winnerMsgElement to "Computer has won the game!".

If there is a winner, show the resetGameBtn button by settings it's display to block and hide the optionsContainer by setting it's display to none.

Now, try to play the game and see if the winner message is displayed when a player reaches three points.
(solution below inserted into showResults function)

if(playerScore == 3){
  winnerMsgElement.innerHTML = "Player has won the game!";
  resetGameBtn.style.display = "block";
  optionsContainer.style.display = "none";
} else if(computerScore == 3){
  winnerMsgElement.innerHTML = "Computer has won the game!";
  resetGameBtn.style.display = "block";
  optionsContainer.style.display = "none";
}
  */

/*If the player or computer has won the game, there should be an option to reset the game and play again.

Add an event listener to the resetGameBtn button. Your event listener should take in a "click" event and a reference to the resetGame function.
(solution below inserted below showResults function) #2

resetGameBtn.addEventListener('click', resetGame())
*/

/*For the final step of the workshop, you will need to build out the reset game functionality.

Create a resetGame function that accomplishes the following:

Resets the player and computer scores to 0.
Updates the playerScoreSpanElement and computerScoreSpanElement to display the new scores.
Hides the resetGameBtn button.
Shows the optionsContainer so the player can play again.
Clears the content for the winnerMsgElement and roundResultsMsg elements.
Try testing out the game by playing a few rounds until one of the players reaches 3 points. Then, click the "Play again?" button to see if the game resets correctly.

And with this final step, you have completed the Rock, Paper, Scissors game!
(solution below --- #3) inserted below showResults function

const resetGame = () => {
  playerScore = 0;
  computerScore = 0;
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  winnerMsgElement.innerText = '';
  roundResultsMsg.innerText = '';
}
*/



//Build a Set of Football Team Cards (Lab)
/*
Build an app that is functionally similar to this example project. Try not to copy the example project, give it your own personal style.

In this lab, you will build a set of football team cards. The user should be able to use the dropdown menu and filter between the different players based on their positions.

Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a footballTeam object with the following properties: team, year, headCoach, players.

The team property should contain the name of the team as a string.

The year property should contain the year as a number.

The headCoach property should contain the name of the head coach as a string.

The players property should be an array containing at least four elements.

Each element in the players array should be an object with properties name, position, isCaptain.

The name property should contain the name of the player as a string.

The position property should have one of the following values: "forward", "midfielder", "defender", or "goalkeeper".

The isCaptain property should have value of a boolean. One of the players should have their isCaptain property set to true.

You should display the coach, team and year values on the page. These values should be displayed in the HTML elements with the id values of head-coach, team and year.

You should display the players data on the page inside the #player-cards element, each player should be displayed in a div with class of player-card, and nested in it, an h2 containing the name of the player, and (Captain) in case of the player being captain, and a p containing Position: and the position of the player.

<div class="player-card">
  <h2>Sergio Batista</h2>
  <p>Position: midfielder</p>
</div>
<div class="player-card">
  <h2>(Captain) Diego Maradona</h2>
  <p>Position: midfielder</p>
</div>
When the dropdown menu is used to select one of the positions, only players of that position should be shown. If the "All Players" option is selected, then all of the players should display on the page.*/

// MY SOLUTION BELOW (JS (HTML and CSS was provided))***************

/* -----HTML

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>
      Build a Set of Football Team Cards
    </title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1 class="title">Team stats</h1>
    <main>
      <div class="team-stats">
        <p>Team: <span id="team"></span></p>
        <p>Year: <span id="year"></span></p>
        <p>Head coach: <span id="head-coach"></span></p>
      </div>
      <label class="options-label" for="players">Filter Teammates:</label>
      <select name="players" id="players">
        <option value="all">All Players</option>
        <option value="forward">Position Forward</option>
        <option value="midfielder">Position Midfielder</option>
        <option value="defender">Position Defender</option>
        <option value="goalkeeper">Position Goalkeeper</option>
      </select>
      <div class="cards" id="player-cards"></div>
    </main>
    <footer>&copy; freeCodeCamp</footer>
    <script src="./script.js"></script>
  </body>
</html>

*/

/*   -----CSS

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --dark-grey: #0a0a23;
  --light-grey: #f5f6f7;
  --white: #ffffff;
  --black: #000;
}

body {
  background-color: var(--dark-grey);
  text-align: center;
  padding: 10px;
}

.title,
.options-label,
.team-stats,
footer {
  color: var(--white);
}

.title {
  margin: 1.3rem 0;
}

.team-stats {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  font-size: 1.3rem;
  margin: 1.2rem 0;
}

.options-label {
  font-size: 1.2rem;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.player-card {
  background-color: var(--light-grey);
  padding: 1.3rem;
  margin: 1.2rem;
  width: 300px;
  border-radius: 15px;
}

@media (max-width: 768px) {
  .team-stats {
    flex-direction: column;
  }
}
*/

const footballTeam = {
  team: "Ella",
  year: 2025,
  headCoach: "Rues",
  players: [
    {
      name: "Violet",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Rose",
      position: "midfielder",
      isCaptain: true
    },
    {
      name: "Daisy",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Lily",
      position: "goalkeeper",
      isCaptain: false
    }
  ]
}

let team = document.getElementById('team');
let coach = document.getElementById('head-coach');
let year = document.getElementById('year');

team.innerText = footballTeam.team;
coach.innerText = footballTeam.headCoach;
year.innerText = footballTeam.year;

let cards = document.getElementById('player-cards');
cards.innerHTML = '';

let playersArr = footballTeam.players;

function allPlayers(){
  
playersArr.forEach(player => {

  if(player.isCaptain){
  cards.innerHTML += `
  <div class="player-card">
  <h2>(Captain) ${player.name}</h2>
  <p>Position: ${player.position}</p>
</div>` 
} else {
  cards.innerHTML += `
  <div class="player-card">
  <h2>${player.name}</h2>
  <p>Position: ${player.position}</p>
</div>`
}
})
}

allPlayers();


function displayPlayers(position){
playersArr.forEach(player => {
  
  if(position === player.position && player.isCaptain){
  cards.innerHTML = `
  <div class="player-card">
  <h2>(Captain) ${player.name}</h2>
  <p>Position: ${player.position}</p>
</div>` 
} else if(position === player.position){
  cards.innerHTML = `
  <div class="player-card">
  <h2>${player.name}</h2>
  <p>Position: ${player.position}</p>
</div>` 
} else if (position === 'all') {
  cards.innerHTML = ``;

  return allPlayers()
}

}) 
}

let selectPlayers = document.getElementById("players");
selectPlayers.addEventListener('change', (e) => {
  let positionSelected = e.target.value;
  displayPlayers(positionSelected);
})

///////////////////////////////////////

