let numbers=[1,2,3,4,5];
let fruits=['apple', 'orange', 'banana'];
let miarray=[1,'two',{name:'Alice'},[7,8,9]];

console.log(miarray);
console.log(fruits);
console.log(numbers);

//Aceesing array elements
let firstNumber=numbers[0];
let secondFruit= fruits[1];
let thirdElement=miarray[2];

console.log(firstNumber, secondFruit, thirdElement);

numbers.push(6);
fruits.pop();
fruits.unshift('pear');
numbers.shift();

console.log(numbers);

//Array Iteration

let number = [1, 2, 3, 4, 5];

numbers.forEach( function(number) {
    console.log(number);
});

//Array Iteration map
let numbers = [1, 2, 3, 4, 5];
let doubleNumbers= numbers.map(function(number)
{
    return number * 2;

});
console.log(doubleNumbers);

const numbers1 = [1, 2, 3, 4, 5,6];
const evennumbers1 =numbers1.filter(function(num){
    return num %2===0;
});
   console.log(evennumbers1);

