
/*let myage =17;
if(myage>=18){
    console.log('you can vote');
}
else{
    console.log('you are not eligible for submitting vote');

}*/


// Even or odd number***

/*let number = 100;
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
console.log(price);*/

// *********

/*function sum (){
    let num1 =30;
    let num2 =40;
    console.log(num1+num2);

}
sum();*/

// Global scope, local scope 

/*let firstName='tamanna';
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
printName();*/


// ******
/*function meel(){
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
    let finalresult(result*result);
console.log(finalresult);
}
multiply(5);
multiply(10);  */ 


// ***
// Parameter and Argument.


/*function calculation(num1 , num2){
    const sum = num1 + num2; 
    console.log(sum);                                                                   
}
calculation(2,5);
calculation(3644348 , 5323456);

function math( num3,num4,num5,num6){
    const multiply = num3*num4*num5 /num6;
console.log(multiply);

}
math(4,5,6,2);*/


// ****
/*function sum(a,b,c,d,e){
    const result = a+b+c+d+e;
    console.log(result);
    console.log(e);
}
sum(1,2,3,4);

let stuudents = 'web Developer';
let learner ='Web DEVELOPER';
if (stuudents.toLowerCase===learner.toLowerCase){
    console.log('we are web developer');
}else{
    console.log('we are only lazy');
}

let stuudents = 'Web DeVeloper';
let learner ='web developer';
if (stuudents.toUpperCase===learner.toUpperCase){
    console.log('we are web developer');
}else{
    console.log('we are only lazy');
}


let stuudents = 'WEB DEVELOPER';
let learner ='web developer';
if (stuudents===learner){
    console.log('we are web developer');
}else{
    console.log('we are only lazy');
}

let stuudents = 'WEB     DEVELIOER';
let stn= ['tamanna', 'mim','diti'];
console.log(stuudents.length);
console.log(stn.length);
console.log(stn.indexOf('mim'));
console.log(stn['t']);
console.log(stn[2]);*/

// ********if ,eles if.else****

/*let days = +prompt();
if(days==1){
    document.write('sunday');
    
}
else if(days==2){
    document.write('monday');
}
else if(days==3){
    document.write('tuesday');
}
else if(days==4){
    document.write('wednesday');
}
else if(days==5){
    document.write('thursday');
}
else if(days==6){
    document.write('friday');
}
else if(days==7){
    document.write('saturday');
}
else{
    document.write('you entered invalid number')
}*/

// ****

/*let days = prompt();
if(days=='sunday'){
    document.write(1);
    
}
else if(days=='monday'){
    document.write(2);
}
else if(days=='tuesday'){
    document.write(3);
}
else if(days=='wednesday'){
    document.write(4);
}
else if(days=='thursday'){
    document.write(5);
}
else if(days=='friday'){
    document.write(6);
}
else if(days=='saturday'){
    document.write(7);
}
else{
    document.write('you entered invalid number')
}*/

/*let days =+prompt();
switch(days){
    case 1:
        document.write('sunday');
        break;
    case 2:
        document.write('monday');
        break;
    case 3:
        document.write('tuesday');
        break;
    case 4:
        document.write('wednesday');
        break;
    case 5:
        document.write('thursday');
        break;
    case 6:
        document.write('friday');
        break;
    case 7:
        document.write('saturday');
        break;

        default:
            document.write('invalied Number');
}*/
/*let days =+prompt();
switch(days){
    case 1:   
    case 2:   
    case 3:    
    case 4:    
    case 5:
        document.write('working day');
        break;
    case 6:
    case 7:
        document.write('rest day');
        break;

        default:
            document.write('invalied Number');
}*/



                // ***********
                // 
                // 
  /*let alphabet = prompt();
  let alph = alphabet.toUpperCase();
switch( alph){
    case 'a':   
    case 'e':   
    case 'i':    
    case 'o':    
    case 'u':
        document.write('vowel');
        break;
    default:
    document.write('consonant');
    break;

}*/