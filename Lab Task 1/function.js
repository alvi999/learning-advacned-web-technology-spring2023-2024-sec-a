function greet(name)
{
    console.log('hello,${name}!');

}
greet("Alice");

//function return
function sum (a,b){

   return a + b; 
}
let result= sum(1,2);
console.log(result);

//Arrow Function
let greet1 =name=>console.log(`hello,${name}!`);
greet1("Body");

// Annonymous Function
const greet = function (name) {
    console.log(`Hello, ${name}!`);
  };
  
  greet("Alice"); // Hello, Alice!

  function operateOnNumbers(a, b, operation) {
    return operation(a, b);

}

// Function to add two numbers
function add(x, y) {

}                return x + y;

// Function to multiply two numbers
function multiply(x, y) {

}                return x* y;

// Using the higher-order function with different operations                          
let resultAddition = operateOnNumbers ( 5,  3, add);

let resultMultiplication = operateOnNumbers ( 5,  3, multiply); 



  