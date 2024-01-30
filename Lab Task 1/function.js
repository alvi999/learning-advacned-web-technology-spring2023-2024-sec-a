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