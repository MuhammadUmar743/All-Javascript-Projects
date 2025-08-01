  // ========================= CHPATER 06 (Math Expressions)===================================
  
 // ========================= QUESTION 01===================================
// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
// ========================= ANSWER 01===================================
// document.write("Result" + "<br/>");
//   var a = 10;
//         document.write("The value of a is: " + a + "<br><br>");

//         document.write("..............................................<br><br>");

//         document.write("The value of ++a is: " + (++a) + "<br>");
//         document.write("Now the value of a is: " + a + "<br><br>");

//         document.write("The value of a++ is: " + (a++) + "<br>");
//         document.write("Now the value of a is: " + a + "<br><br>");

//         document.write("The value of --a is: " + (--a) + "<br>");
//         document.write("Now the value of a is: " + a + "<br><br>");

//         document.write("The value of a-- is: " + (a--) + "<br>");
//         document.write("Now the value of a is: " + a + "<br>");

          
 // ========================= QUESTION 02===================================
// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
// ========================= ANSWER 02===================================
  // var a = 2, b = 1;
  //       var result = --a - --b + ++b + b--;

  //         document.write("a is ??" + "<br>");
  //         document.write("b is ??" + "<br>");
  //         document.write("result is ??" + "<br>");
  
 // ========================= QUESTION 03===================================
//  3. Write a program that takes input a name from user &
// greet the user.
// ========================= ANSWER 03===================================
  // var userName = prompt("Enter your name:");
  // document.write("Hello, " + userName + "! Welcome to our website.");
  
 // ========================= QUESTION 04===================================
// 4. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// ========================= ANSWER 04===================================
// var number = prompt("Enter a number to display its multiplication table:");

//   if (number === null || number === "" || isNaN(number)) {
//     number = 5;
//   } else {
//     number = parseInt(number);
//   }
//   document.write("<h3>Multiplication Table of " + number + "</h3>");
//   for (var i = 1; i <= 10; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
//   }
  
 // ========================= QUESTION 05===================================
// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

// ========================= ANSWER 05===================================

//  var sub1 = prompt("Enter name of first subject:");
//   var sub2 = prompt("Enter name of second subject:");
//   var sub3 = prompt("Enter name of third subject:");

//   var totalMarksEach = 100;

//   var obt1 = +prompt("Enter obtained marks for " + sub1 + ":");
//   var obt2 = +prompt("Enter obtained marks for " + sub2 + ":");
//   var obt3 = +prompt("Enter obtained marks for " + sub3 + ":");

//   var totalMarks = totalMarksEach * 3;
//   var totalObtained = obt1 + obt2 + obt3;
//   var percentage = (totalObtained / totalMarks) * 100;

//   document.write("<h2>Marks Sheet</h2>");
//   document.write("<table border='1' cellspacing='0' cellpadding='8'>");
//   document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
//   document.write("<tr><td>" + sub1 + "</td><td>" + totalMarksEach + "</td><td>" + obt1 + "</td></tr>");
//   document.write("<tr><td>" + sub2 + "</td><td>" + totalMarksEach + "</td><td>" + obt2 + "</td></tr>");
//   document.write("<tr><td>" + sub3 + "</td><td>" + totalMarksEach + "</td><td>" + obt3 + "</td></tr>");
//   document.write("<tr><th colspan='2'>Total</th><td>" + totalObtained + "</td></tr>");
//   document.write("<tr><th colspan='2'>Percentage</th><td>" + percentage.toFixed(2) + "%</td></tr>");
//   document.write("</table>")