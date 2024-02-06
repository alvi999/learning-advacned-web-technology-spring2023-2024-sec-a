//array
let numbers: number[]=[1, 2, 3, 4, 5];

//accessing elements
let firstElement: number=numbers[0];
//Array length
let arrayLenth: number=numbers.length;

//adding elements
numbers.push(6);
//iterating through elements
for (let num of numbers) {
   
    console.log(num);
}

//array method
let doubleNumbers:number[]=numbers.map((num:number) =>num*2);
let evenNumbers:number[]=numbers.filter((num:number) =>num%2==0);
let sum:number=numbers.reduce((prev:number,next:number) =>prev+next);