
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
  
  
  