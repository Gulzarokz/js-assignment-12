// 27: Generating random numbers

// const Math: Math.random();
//return random number fomr 0 (inclusive) and 1 (exlusive);
//always return lower than 1;
//Always derlivers 16 places decimal ranges form 0.000000000000000000 to 0.9999999999999999

// const randomNumber = Math.random();
// console.log(randomNumber);

// const randomDecimal = Math.random();
// const randomInteger = randomDecimal * 100000000000000000;
// console.log(randomDecimal);
// console.log(randomInteger);


// remove the decimal parts

// const randomNumber = Math.random();
// const randomInteger = Math.floor(randomNumber);
// console.log(randomNumber);
// console.log(randomInteger);

// givine range to the random numbers

// const randomNumber = Math.random();
// const randomRange = randomNumber * 6;
// console.log(randomRange);


// range again spacifying

// const n = 10;
// const randomNumber = Math.random() * n;
// const randomInteger = Math.floor(randomNumber);
// console.log(randomInteger);

// LUDO dice example

// const bigDecimal = Math.random();
// const improveNumber = bigDecimal *6 + 1;
// const finalNumber = Math.floor(improveNumber);
// console.log({bigDecimal, improveNumber, finalNumber});


// const randomNumber = Math.ceil(Math.random() * 3);

// const userGuess = +prompt("please guess the the numbers");

// console.log(randomNumber);


// if(randomNumber === userGuess){
//     alert("You got right number ");
// }
// else{
//     alert("Please try again");
// }

// var randomNum = Math.random();
// var randomInt = (randomNum * 6) + 1;
// var final = Math.ceil(randomInt);
//   console.log(randomNum);
//   console.log(randomInt);
//   console.log(final);
  

//Chapter No 28 Converting strings to integers and decimals

// type of Coercion
                  // Automatic conversion from data type to another type.


// var age = +prompt("Enter your age");
// console.log(typeof age);

// const eligibleToVote = age - 20;
// console.log(eligibleToVote);

// const result = ("200" + 120);
// console.log( typeof result);

// console.log("a" - 10);

// const currentAge = prompt("Enter your age please");
// const ageAfterYear = currentAge + 1; it is 171 bcz it concantnating as strings
// console.log(ageAfterYear);

//to resolve the above problem we can use parseInt methods to converst sting to numbers

// const currentAge = prompt("Enter your age");
// const increamentAge = parseInt(currentAge) + 1;
// console.log(increamentAge);

// solution for float

// const itemPrice = prompt("Enter your price in $");
// const priceAfterAddingTax = itemPrice + 1;
// console.log(priceAfterAddingTax);



// const itemPrice = prompt("Enter your price in $");
// const priceAfterAddingTax = parseFloat(itemPrice) + 1;
// console.log(priceAfterAddingTax);



