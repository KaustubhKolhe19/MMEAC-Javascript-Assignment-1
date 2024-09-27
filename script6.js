// script.js

// This program demonstrates the use of comments in JavaScript

// 1. Single-line comment example
let userName = "Alice";  // Declaring a variable to store the user's name

// 2. Multi-line comment example
/*
This function greets the user with their name
and prints a message to the browser.
*/
function greetUser(name) {
    // Print the greeting message to the browser
    document.write("Hello, " + name + "! Welcome to the JavaScript comments demo.<br>");
}

// 3. Using a single-line comment to explain the following block
// Calling the function with the user's name
greetUser(userName);

// 4. Multi-line comment to describe a loop
/*
This loop counts from 1 to 5
and displays each number in the browser.
*/
for (let i = 1; i <= 5; i++) {
    // Print the current count to the browser
    document.write("Count: " + i + "<br>");
}

/*
End of the JavaScript program
This program demonstrates how to use comments
to explain code functionality.
*/
