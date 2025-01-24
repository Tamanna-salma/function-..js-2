
// let myage =17;
// if(myage>=18){
//     console.log('you can vote');
// }
// else{
//     console.log('you are not eligible for submitting vote');

// }


// Even or odd number***

// let number = 100;
// let result = number%2==0 ? 'even' : 'odd';
// console.log(result);

// value set :
// variable name = condtion cheak with === true or false ? true value : variable value +new

// let price =200;
// let isbaby= false;
// price = isbaby===true? 0 : 200 +300;
// console.log(price);

// let price =200;
// let isbaby= true;
// price = isbaby===false? 0 : 200 +300;
// console.log(price);

// // *********

function sum (){
    let num1 =30;
    let num2 =40;
    console.log(num1+num2);

}
sum();

// Global scope, local scope 

let firstName='tamanna';
    let lastName= 'salma';
function printName(){
    console.log(lastName);
   
}
printName();



function printName(){
    let firstName='tamanna';
    let lastName= 'salma';
    console.log(firstName+ '  '+lastName);
   lastName='mim'
   console.log(firstName+ ' '+lastName);
}
printName();


// ******
function meel(){
    console.log('vat');
    console.log('vortha');
    console.log('fish');
}
meel();

function multiply(result){
console.log(result);
}
multiply(5);
multiply(10);

function multiply(result){
    let finalresult(result*result)
console.log(finalresult);
}
multiply(5);
multiply(10);   


// ***
// Parameter and Argument.


function calculation(num1 , num2){
    const sum = num1 + num2; 
    console.log(sum);                                                                   
}
calculation(2,5);
calculation(3644348 , 5323456);

function math( num3,num4,num5,num6){
    const multiply = num3*num4*num5 /num6;
console.log(multiply);

}
math(4,5,6,2);


// ****
function sum(a,b,c,d,e){
    const result = a+b+c+d+e;
    console.log(result);
    console.log(e);
}
sum(1,2,3,4);

let stuudents = 'Web DEVELOPER';
let learner ='web developer';
if (stuudents.toLowerCase===learner.toLowerCase){
    console.log('we are web developer');
}else{
    console.log('we are only lazy');
}

let stuudents = 'Web developer';
let learner ='web developer';
if (stuudents.toUpperCase===learner.toUpperCase){
    console.log('we are web developer');
}else{
    console.log('we are only lazy');
}


let stuudents = 'Web developer';
let learner ='web developer';
if (stuudents===learner){
    console.log('we are web developer');
}else{
    console.log('we are only lazy');
}

let stuudents = 'WEB    DEVELIOER';
let stn= ['tamanna', 'mim','diti'];
console.log(stuudents.length);
console.log(stn.length);
console.log(stn.indexOf('diti'));
console.log(stn[R]);
console.log(stn[2]);
