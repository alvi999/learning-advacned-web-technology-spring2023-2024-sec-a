//variable type annotation
let l: number = 0;
let b: string='Hello world';
let c: boolean=true;



//function parameter and return type annotations
function add(l: number, b: number):number{
    return l + b;
}

console.log(add(10,20));

//type allias
type person={id:number,name:string};
let p:person ={id:10,name:"Musaruf"};

console.log(p)

//type union
let y:number|string;
y=10;
console.log(y);

//literal type
let z:"red"|"green"|"yellow";
z="red";
console.log(z);
