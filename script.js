
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


function pyramid(char, rows, boolean){
    if(boolean) {
  
    let result = "\n";
  
      for(let i = rows; i >= 1 ; i--){
  
        let spaces = " ".repeat(rows - i );
  
        let pattern = char.repeat((i * 2) - 1 );
  
        result += spaces + pattern + "\n";
      }
      return result;
    } else {
  
    let result = "\n";
  
      for(let i = 1; i <= rows; i++){
  
        let spaces = " ".repeat(rows - i );
  
        let pattern = char.repeat((i * 2) - 1 );
  
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

function getAverage(testScoresArr){

    let sumOfScores = 0;
    for (let testScore of testScoresArr){
      sumOfScores += testScore;
    }
  
    let numOfScores = testScoresArr.length;
  
    let scoreAverage = sumOfScores/numOfScores;
  
    return scoreAverage;
  }
  
  let scoresArr = [80,55,75,89,65];
  console.log(getAverage(scoresArr));
  
  function getGrade(studentScore){
    if(studentScore === 100) return "A+";
    if(studentScore >= 90) return "A";
    if(studentScore >= 80) return "B";
    if(studentScore >= 70) return "C";
    if(studentScore >= 60) return "D";
    if(studentScore >= 0) return "F";
  }
  
  console.log(getGrade(getAverage(scoresArr)));
  
  const hasPassingGrade = (score) => {
    return getGrade(score) !== "F";
  }
  
  console.log(hasPassingGrade(80))
  
  function studentMsg(scoresArray, studentScore){

    let classAverage = getAverage(scoresArray);
    let grade = getGrade(studentScore);
  
    if(hasPassingGrade(studentScore)){
      return `Class average: ${classAverage}. Your grade: ${grade}. You passed the course.` ;
    } else {
      return `Class average: ${classAverage}. Your grade: ${grade}. You failed the course.`;
    }
  }
  
  console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 40))


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
  
  function findProductIndex(product){
    let toFind = product.toLowerCase();
  
    /*The indexOf method won't work directly with objects in this case. Thus findIndex()*/
    return inventory.findIndex(item => item.name === toFind);
  }
  
  function addProduct(productObj){
    //check if product is already present in inventory
    const productPresent = inventory.some(item => item.name === productObj.name.toLowerCase());

    //if present, update quantity
    if(productPresent){
        inventory[findProductIndex(productObj.name)].quantity += productObj.quantity;
        console.log(`${productObj.name.toLowerCase()} quantity updated`);
        } else {
          inventory.push({
            name: productObj.name.toLowerCase(),
            quantity: productObj.quantity
        });

          console.log(`${productObj.name.toLowerCase()} added to inventory`);
        }
        return inventory;
    }

console.log(addProduct({name: "Egg", quantity: 5}))

function removeProduct(product, quantity){
  const productPresent = inventory.some(item => item.name === product.toLowerCase());

  if(productPresent){

    inventory[findProductIndex(product)].quantity -= quantity;

    if(inventory[findProductIndex(product)].quantity > 0){
          console.log(`Remaining ${product.toLowerCase()} pieces: ${inventory[findProductIndex(product)].quantity}`)
  } else if(inventory[findProductIndex(product)].quantity === 0){
    inventory.splice(inventory[findProductIndex(product)],1)
  } else if(inventory[findProductIndex(product)].quantity < 0) {
    console.log(`Not enough ${product.toLowerCase()} available, remaining pieces: ${inventory[findProductIndex(product)].quantity + quantity}`)
  }} else {
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
    let suitableCharStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  
  //takes string and converts to an array of each character in the string
    let suitableCharStrArr = suitableCharStr.split('');
  
  //empty array to store the random characters that will form the password of specific length as determind by the input argument
    let passwordArr = [];
  
  //for loop to produce randome characters to be pushed to array
    for(let i = 0; i < passwordLength; i++){
  
      //gets a random index of a character from the array
    let randomCharIndex = Math.floor(Math.random()*suitableCharStrArr.length);
  
      passwordArr.push(suitableCharStrArr[randomCharIndex])
    }
  
  //returns the password as a string
    return passwordArr.join('');
  
  }
  
  const password = generatePassword(8);
  console.log("Generated password:" + password)
  


  // HIGHER ORDER FUNCTIONS AND CALLBACKS
                                                       //     !!!!!!!!!    Difference between Higher order function, callback function and Closures??????

  /*Build a Library manager ----- WORKSHOP fCC Solution*/
  /* Array methods (forEach(), reduce(), map(), filter()*/

  const library = [
  {
    title: 'Your Next Five Moves: Master the Art of Business Strategy',
    author: 'Patrick Bet-David and Greg Dinkin',
    about: 'A book on how to plan ahead',
    pages: 320,
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    about: 'A practical book about discarding bad habits and building good ones',
    pages: 320,
  },
  {
    title: 'Choose Your Enemies Wisely: Business Planning for the Audacious Few',
    author: 'Patrick Bet-David',
    about:
      "A book that emphasizes the importance of identifying and understanding one's adversaries to succeed in the business world",
    pages: 304,
  },
  {
    title: 'The Embedded Entrepreneur',
    author: 'Arvid Kahl',
    about: 'A book focusing on how to build an audience-driven business',
    pages: 308,
  },
  {
    title: 'How to Be a Coffee Bean: 111 Life-Changing Ways to Create Positive Change',
    author: 'Jon Gordon',
    about: 'A book about effective ways to lead a coffee bean lifestyle',
    pages: 256,
  },
  {
    title: 'The Creative Mindset: Mastering the Six Skills That Empower Innovation',
    author: 'Jeff DeGraff and Staney DeGraff',
    about: 'A book on how to develop creativity and  innovation skills',
    pages: 168,
  },
  {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki and Sharon Lechter',
    about: 'A book about financial literacy, financial independence, and building wealth. ',
    pages: 336,
  },
  {
    title: 'Zero to Sold',
    author: 'Arvid Kahl',
    about: 'A book on how to bootstrap a business',
    pages: 500,
  },
];

//returns title, author and pages of all books as a string
function displayBooks(catalog) {
    let output = 'Books in the Library:\n';
  
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
      "title": "Hello",
      "authorName": "A",
      "releaseYear": 1999
    },
    {
      "title": "Hi",
      "authorName": "B",
      "releaseYear": 2002
    },
    {
      "title": "Hey",
      "authorName": "C",
      "releaseYear": 2001
    }
  ]
  
  function sortByYear(book1, book2){
    if(book1.releaseYear - book2.releaseYear < 0){
      return -1;
    }  else if(book1.releaseYear - book2.releaseYear > 0) {
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
    borderColor: "#acd157"
  },
};

function displayStory(genre) {
  if (storyObj[genre]) {
    // Set the story text
    const result = document.getElementById("result")
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

scaryStoryBtn.addEventListener("click",() => displayStory("scary"));
funnyStoryBtn.addEventListener("click",() => displayStory("funny"));
adventureStoryBtn.addEventListener("click",() => displayStory("adventure"));


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
hearts.forEach(heart => {
    heart.addEventListener("click", function() {
        if (this.classList.contains("filled")) {
            this.classList.remove("filled");
            this.innerHTML = "&#9825;";
        } else {
            this.classList.add("filled");
            this.innerHTML = "&#10084;";
        }
    });
});   /*

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

}

//