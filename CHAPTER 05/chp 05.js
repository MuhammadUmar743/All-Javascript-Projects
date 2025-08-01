 // ========================= CHPATER 05 (Math Expressions)===================================

// ========================= QUESTION 01===================================
// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
// ========================= ANSWER 01===================================
// ==========Addition==========
// var num1 = 10;
// var num2 = 25;
// var sum = num1 + num2 ;
// document.write("The sum of " + num1 + " and " + num2 +" is: " + sum);

// ========================= QUESTION 02===================================
// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
// ========================= ANSWER 02===================================
// ==========Subtaction==========
// var num1 = 5;
// var num2 = 10;
// var sub = num1 - num2;
// document.write("Subtract of " + num1 + " and " + num2 + " is: " + sub);   
// ===========Multiply=========
// var num1 = 5;
// var num2 = 10;
// var multi = num1 * num2;
// document.write("Multiply of " + num1 + " and " + num2 + " is: " + multi);   
// ============Modulus========
// var num1 = 5;
// var num2 = 10;
// var modulus = num1 / num2;
// document.write("Module of  " + num1 + " and " + num2 + " is: " + modulus);

// ========================= QUESTION 03===================================
// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.
// ========================= ANSWER 03===================================

var number;
document.write("Value after variable declaration is: " + number + "<br>");

number = 5;

document.write("Initial value: " + number + "<br>");

number++;

document.write("Value after increment is: " + number + "<br>");


number += 7;


document.write("Value after addition is: " + number + "<br>");

number--;

document.write("Value after decrement is: " + number + "<br>");

var remainder = number % 3;

document.write("The remainder is: " + remainder);
// ========================= QUESTION 04===================================
// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie.
// ========================= ANSWER 04===================================
// var costprice = 600;
// var tickets = 5;
// var calculate = costprice * tickets
// document.write("Total cost to buy 5 tickets to a movie is " + calculate + " Pkr");

// ========================= QUESTION 05===================================
// 5. Write a script to display multiplication table of any
// number in your browser.
// ========================= ANSWER 05===================================
// document.write("<h1>Table of 4<h1/>");
// var num1 = 4;
// var num2 = 1;
// var multi = num1 * num2;
// document.write("4 x 1 = " + multi + "<br/>");

// var num1 = 4;
// var num2 = 2;
// var multi = num1 * num2;
// document.write("4 x 2 = " + multi + "<br/>");

// var num1 = 4;
// var num2 = 3;
// var multi = num1 * num2;
// document.write("4 x 3 = " + multi + "<br/>");

// var num1 = 4;
// var num2 = 4;
// var multi = num1 * num2;
// document.write("4 x 4 = " + multi + "<br/>");

// var num1 = 4;
// var num2 = 5;
// var multi = num1 * num2;
// document.write("4 x 5 = " + multi + "<br/>");

// var num1 = 4;
// var num2 = 6;
// var multi = num1 * num2;
// document.write("4 x 6 = " + multi + "<br/>");

// var num1 = 4;
// var num2 = 7;
// var multi = num1 * num2;
// document.write("4 x 7 = " + multi + "<br/>");

// var num1 = 4;
// var num2 = 8;
// var multi = num1 * num2;
// document.write("4 x 8 = " + multi + "<br/>");

// var num1 = 4;
// var num2 = 9;
// var multi = num1 * num2;
// document.write("4 x 9 = " + multi + "<br/>");

// var num1 = 4;
// var num2 = 10;
// var multi = num1 * num2;
// document.write("4 x 10 = " + multi + "<br/>");

// ========================= QUESTION 06===================================
// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// ========================= ANSWER 06===================================
// var celsius = 30;
// var fahrenheit = (celsius *9/5) + 32;
// document.write(celsius + "°C is " + fahrenheit + "°F<br>");
// var fahrenheit2 = 86.1;
// var celsius2 = (fahrenheit2 - 32) * 5/9;
// document.write(fahrenheit2 + "°F is " + celsius2 + "°C");

// ========================= QUESTION 07===================================
// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
// ========================= ANSWER 07===================================

// var priceItem1 = 650;
// var priceItem2 = 100;
// var quantityItem1 = 3;
// var quantityItem2 = 7;
// var shippingCharges = 100;
// var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
// document.write("<h1>Shopping Cart Receipt</h1>");
// document.write("Price of item 1 is " + priceItem1 + "<br>");
// document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
// document.write("Price of item 2 is " + priceItem2 + "<br>");
// document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
// document.write("Shipping Charges " + shippingCharges + "<br><br>");

// document.write("<strong>Total cost of your order is " + totalCost + "</strong>")

// ========================= QUESTION 08===================================
// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
// ========================= ANSWER 08===================================
// var totalMarks = 550;
// var obtainedMarks = 457;
// var percentage = (obtainedMarks / totalMarks) * 100;
// document.write("<h2>Student Result</h2>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + obtainedMarks + "<br>");
// document.write("Percentage: " + percentage + "%");

// ========================= QUESTION 09===================================
// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.

// ========================= ANSWER 09===================================
// var totalPKR = (10 * 280) + (25 * 75);
// document.write("<h2>Currency in PkR</h2>");
// document.write("Total in PKR: " + totalPKR);

// ========================= QUESTION 10===================================
// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// ========================= ANSWER 10===================================
// var initialNumber = 10;
// var result = ((initialNumber + 5) * 10) / 2;
// document.write("<h2>Arithmetic Calculation</h2>");
// document.write("Initial Number: " + initialNumber + "<br>");
// document.write("Result: " + result)

// ========================= QUESTION 11===================================
// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”

// ========================= ANSWER 11===================================
// document.write("<h1>Age Calculator</h1>")
// var currentYear = 2025;
// var birthYear = 2007;
// var age1 = currentYear - birthYear;
// var age2 = age1 - 1;
// document.write("Current year : " + currentYear + " <br/> " + age1 + " years old."  + " <br/>");
// document.write("Birth year : " +  birthYear);

// ========================= QUESTION 12===================================
// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// ========================= ANSWER 12===================================
// document.write("<h1>The Geometrizer</h1>")
// var radius = 10;
// var pi = 3.142;
// var circumference = 2 * pi * radius;
// var area = pi * radius * radius;
// document.write("The radius is " + radius + "<br>");
// document.write("The circumference is " + circumference + "<br>");
// document.write("The area is " + area);

// ========================= QUESTION 13===================================
// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

// ========================= ANSWER 13===================================
//  var favoriteSnack = "Chocolate Chip Cookies";
//     var currentAge = 22;
//     var maxAge = 80;
//     var amountPerDay = 3;
//     var yearsRemaining = maxAge - currentAge;
//     var totalSnacks = yearsRemaining * 365 * amountPerDay;
//     document.write("<h1>The Life Suply Calculator</h1>")
//     document.write("Calculate age : 15" + "<br>")
//     document.write("Estimated Maximum age : 65" + "<br>")
//     document.write("Amount of snacks per day : 3" + "<br>")
//     document.write("Favourite snack : Chocolate chip" + "<br>")
//     document.write("You will need " + totalSnacks + " " + favoriteSnack +
//                    " to last you until the ripe old age of " + maxAge + "." + "<br>");