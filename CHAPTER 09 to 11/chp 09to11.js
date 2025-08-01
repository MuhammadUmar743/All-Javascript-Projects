 // ========================= CHPATER 06,7,8 (User Input and Conditional Statement)===================================

// ========================= QUESTION 01===================================
// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
// ========================= ANSWER 01===================================
//   var city = prompt("Enter your city name:");
//   if (city.toLowerCase() === "karachi") {
//     alert("Welcome to city of lights");
//   } else {
//     alert("Welcome to " + city);
//   }
// ========================= QUESTION 02===================================
// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
// ========================= ANSWER 02===================================
//   var gender = prompt("Enter your gender (male/female):");

//   gender = gender.toLowerCase();
  
//   if (gender === "male") {
//     alert("Good Morning Sir");
//   } else if (gender === "female") {
//     alert("Good Morning Ma’am");
//   } else {
//     alert("Good Morning!");
//   }

// ========================= QUESTION 03===================================
// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// ========================= ANSWER 03===================================
// var color = prompt("Enter color of traffic signal (Red, Yellow, Green):").toLowerCase().trim();

//   var redMsg = "";
//   var yellowMsg = "";
//   var greenMsg = "";

//   if (color === "red") {
//     redMsg = "Must Stop";
//   } else if (color === "yellow") {
//     yellowMsg = "Ready to move";
//   } else if (color === "green") {
//     greenMsg = "Move now";
//   } else {
//     alert("Invalid color entered!");
//   }

//   document.write("<h3>Traffic Signal Table</h3>");
//   document.write("<table>");
//   document.write("<tr><th>Signal color</th><th>Message</th></tr>");
//   document.write("<tr><td>Red</td><td>" + redMsg + "</td></tr>");
//   document.write("<tr><td>Yellow</td><td>" + yellowMsg + "</td></tr>");
//   document.write("<tr><td>Green</td><td>" + greenMsg + "</td></tr>");
//   document.write("</table>");
// ========================= QUESTION 04===================================
// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

// ========================= ANSWER 04===================================
//   var fuel = +prompt("Enter remaining fuel in your car (in litres):");
//   if (fuel < 0.25) {
//     alert("Please refill the fuel in your car");
//   } else {
//     alert("You have enough fuel");
//   }
// ========================= QUESTION 05===================================
// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// User Input & Conditional Statement | JAVASCRIPT
// Page 2 of 4
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// User Input & Conditional Statement | JAVASCRIPT
// Page 3 of 4
// f. if("car" < "cat"){
// alert("car is smaller than cat");
// }
// ========================= ANSWER 05===================================
// var a = 4;
// if (++a === 5){
//   alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
//   alert("given condition for variable b is true");
// }
// var c = 12;

// if (c++ === 13){     // 12 === 13 → false
//   alert("condition 1 is true");
// }

// if (c === 13){       // now c = 13 → true
//   alert("condition 2 is true");
// }

// if (++c < 14){       // ++c = 14 → 14 < 14 → false
//   alert("condition 3 is true");
// }

// if(c === 14){        // c = 14 → true
//   alert("condition 4 is true");
// }

// if (true){
//   alert("True");
// }

// if (false){
//   alert("False");
// }

// if("car" < "cat"){
//   alert("car is smaller than cat");
// }
// ========================= QUESTION 06===================================
// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// ========================= ANSWER 06===================================
 
//   var mark1 = +prompt("Enter marks for Subject 1:");
//   var mark2 = +prompt("Enter marks for Subject 2:");
//   var mark3 = +prompt("Enter marks for Subject 3:");
//   var totalMarks = +prompt("Enter total marks:");


//   var obtainedMarks = mark1 + mark2 + mark3;
//   var percentage = (obtainedMarks / totalMarks) * 100;
//   var grade = "", remarks = "";

//   if (percentage >= 80) {
//     grade = "A-one";
//     remarks = "Excellent";
//   } else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
//   } else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
//   } else {
//     grade = "Fail";
//     remarks = "Sorry";
//   }

//   document.write("<h2>Marksheet</h2>");
//   document.write("Total Marks: " + totalMarks + "<br>");
//   document.write("Marks Obtained: " + obtainedMarks + "<br>");
//   document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
//   document.write("Grade: " + grade + "<br>");
//   document.write("Remarks: " + remarks + "<br>");

// ========================= QUESTION 07===================================
// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
// ========================= ANSWER 07===================================
//   var secretNumber = 7;

//   var userGuess = +prompt("Guess the secret number (between 1 and 10):");

//   if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
//   } else if (userGuess + 1 === secretNumber) {
//     alert("Close enough to the correct answer");
//   } else {
//     alert("Try again!");
//   }

  
// ========================= QUESTION 08===================================
// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
// ========================= ANSWER 08===================================
// var number = +prompt("Enter a number to check if it is divisible by 3:");

//   if (number % 3 === 0) {
//     alert("Yes! The number is divisible by 3.");
//   } else {
//     alert("No! The number is not divisible by 3.");
//   }
// ========================= QUESTION 09===================================
// 9. Write a program that checks whether the given input is an
// even number or an odd number
// ========================= ANSWER 09===================================
// var number = +prompt("Enter a number to check if it is even or odd:");


//   if (number % 2 === 0) {
//     alert("The number is Even.");
//   } else {
//     alert("The number is Odd.");
//   }
// ========================= QUESTION 10===================================
// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// ========================= ANSWER 10===================================
// var temp = +prompt("Enter the temperature:");

//   if (temp > 40) {
//     alert("It is too hot outside.");
//   } else if (temp > 30) {
//     alert("The Weather today is Normal.");
//   } else if (temp > 20) {
//     alert("Today’s Weather is cool.");
//   } else if (temp > 10) {
//     alert("OMG! Today’s weather is so Cool.");
//   } else {
//     alert("It's very cold today.");
//   }

  // ========================= QUESTION 11===================================
// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

  // ========================= ANSWER 11===================================
//   var num1 = +prompt("Enter the first number:");
//   var num2 = +prompt("Enter the second number:");
//   var operation = prompt("Enter the operation (+, -, *, /, %):");

//   var result;

//   // If statements se check karna
//   if (operation === "+") {
//     result = num1 + num2;
//     alert("Result: " + result);
//   }
//   else if (operation === "-") {
//     result = num1 - num2;
//     alert("Result: " + result);
//   }
//   else if (operation === "*") {
//     result = num1 * num2;
//     alert("Result: " + result);
//   }
//   else if (operation === "/") {
//     if (num2 !== 0) {
//       result = num1 / num2;
//       alert("Result: " + result);
//     } else {
//       alert("Cannot divide by zero");
//     }
//   }
//   else if (operation === "%") {
//     result = num1 % num2;
//     alert("Result: " + result);
//   }
//   else {
//     alert("Invalid operation entered.");
//   }