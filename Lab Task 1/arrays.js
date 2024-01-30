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
