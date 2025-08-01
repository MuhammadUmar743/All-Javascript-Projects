 // ========================= CHPATER 12,13 ()===================================

 // ========================= QUESTION 01===================================
// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

 // ========================= ANSWER 01===================================
//    var char = prompt("Enter a single character:");

//   var charCode = char.charCodeAt(0);

//   if (charCode >= 48 && charCode <= 57) {
//     alert("It is a Number.");
//   }
//   else if (charCode >= 65 && charCode <= 90) {
//     alert("It is an Uppercase Letter.");
//   }
//   else if (charCode >= 97 && charCode <= 122) {
//     alert("It is a Lowercase Letter.");
//   }
//   else {
//     alert("It is a special character or something else.");
//   }

  // ========================= QUESTION 02===================================
// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

   // ========================= ANSWER 02===================================
//   var num1 = +prompt("Enter the first integer:");
//   var num2 = +prompt("Enter the second integer:");

//   if (num1 > num2) {
//     document.write("The larger number is: " + num1);
//   }
//   else if (num2 > num1) {
//     document.write("The larger number is: " + num2);
//   }
//   else {
//     document.write("Both numbers are equal.");
//   }
     // ========================= QUESTION 03===================================
// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

   // ========================= ANSWER 03===================================
//   var number = +prompt("Enter a number:");
 
//   if (number > 0) {
//     document.write("The number is Positive.");
//   } else if (number < 0) {
//     document.write("The number is Negative.");
//   } else {
//     document.write("The number is Zero.");
//   }
     // ========================= QUESTION 04===================================
// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

   // ========================= ANSWER 04===================================
// var char = prompt("Enter a single character:");

//   char = char.toLowerCase();

//   var isVowel = (char === "a" || char === "e" || char === "i" || char === "o" || char === "u");

//   document.write("Is the character a vowel? " + isVowel);

     // ========================= QUESTION 05===================================
// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.



   // ========================= ANSWER 05===================================

// var correctPassword = "Umarbey333";

// var userPassword = prompt("Enter your password:");

// if (userPassword === "") {
//   alert("Please enter your password");
// } else if (userPassword === correctPassword) {
//   alert("Correct! The password you entered matches the original password");
// } else {
//   alert("Incorrect password");
// }
     // ========================= QUESTION 06===================================

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }
   // ========================= ANSWER 06===================================

//    var greeting;
// var hour = 13;

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// document.write(greeting);

// ========================= QUESTION 07===================================
// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

 // ========================= ANSWER 07===================================
//  var time = +prompt("Enter time in 24-hour format (e.g. 1900 for 7 PM):");

// if (time >= 0 && time < 1200) {
//     alert("Good Morning! It's " + time + " hrs.");
// } else if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon! It's " + time + " hrs.");
// } else if (time >= 1700 && time < 2100) {
//     alert("Good Evening! It's " + time + " hrs.");
// } else if (time >= 2100 && time <= 2359) {
//     alert("Good Night! It's " + time + " hrs.");
// } else {
//     alert("Invalid time format. Please enter time between 0000 and 2359.");
// }