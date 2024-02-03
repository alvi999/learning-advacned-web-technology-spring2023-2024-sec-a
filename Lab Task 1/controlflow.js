//if, else if, else
let age = 12;
if(age>=18){
    console.log("Adult");
}else if(age>=13 && age<=19){
    console.log("Teenager");
}else{
    console.log("hobe kichu ekta")
}

//switch case
let status;
switch(true){
    case age>=18:
        status = "Adult";
        break;
    case age>=13 && age<=19:
        status = "Teenager";
        break;
    default:
        status = "hobe kichu ekta";
}
console.log(status);

//loops (for and while and do while)
let x = ['a', 'b', 'c', 'd'];
let y = ['s', 'h', 'i', 't'];
for (let i=0; i<2; i++){
    console.log(x[i]);
} 

let i = 0;
while (i<4){
    console.log(y[i]);
    i++;
}

let j= 0;
do{
    console.log(x[j]);
    j++;
}while(j<2);