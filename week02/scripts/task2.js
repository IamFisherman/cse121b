/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
let nameValue = document.getElementById("name");
nameValue.innerHTML = "Christian Pablo Peraza Martínez";

// Step 3: declare and instantiate a variable to hold the current year
// Step 4: place the value of the current year variable into the HTML file
let currentYear = document.getElementById("year");
currentYear.innerHTML = "2023";

// Step 5: declare and instantiate a variable to hold the name of your picture
// Step 6: copy your image into the "images" folder
// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
let pictureProfile = document.getElementById("picture");
pictureProfile.src = "images/christian_peraza.png";



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let foods = ["Chinese rice", " Pizza", " Macaroni and cheese", " Fried chicken"];

// Step 2: place the values of the favorite foods variable into the HTML file
// document.getElementById("food").innerHTML = foods;

// Step 3: declare and instantiate a variable to hold another favorite food
let anotherFood = " Carbonara Pasta";

// Step 4: add the variable holding another favorite food to the favorite food array
foods.push(anotherFood);

// Step 5: repeat Step 2
// document.getElementById("food").innerHTML = foods;

// Step 6: remove the first element in the favorite foods array
foods.shift();

// Step 7: repeat Step 2
// document.getElementById("food").innerHTML = foods;

// Step 8: remove the last element in the favorite foods array
foods.pop();

// Step 7: repeat Step 2
document.getElementById("food").innerHTML = foods;



