
let myage =17;
if(myage>=18){
    console.log('you can vote');
}
else{
    console.log('you are not eligible for submitting vote');

}


Even or odd number***

let number = 100;
let result = number%2==0 ? 'even' : 'odd';
console.log(result);

value set :
variable name = condtion cheak with === true or false ? true value : variable value +new

let price =200;
let isbaby= false;
price = isbaby===true? 0 : 200 +300;
console.log(price);

let price =200;
let isbaby= true;
price = isbaby===false? 0 : 200 +300;
console.log(price);

// *********

function sum (){
    let num1 =30;
    let num2 =40;
    console.log(num1+num2);

}
sum();


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