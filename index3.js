// month of calender***
// if,else if,else use


/*let month = prompt();
if(month==1){
    document.write('january');
}
else if(month==2){
    document.write('february');
   
}
else if(month==3){
    document.write('march');
}
else if(month==4){
    document.write('april');
    
}
else if(month==5){
    document.write('may');
}
else if(month==6){
    document.write('june');
}
else if(month==7){
    document.write('july');
}
else if(month==8){
    document.write('august');
}
else if(month==9){
    document.write('september');
}
else if(month==10){
    document.write('october');
}
else if(month==11){
    document.write('november');
}
else if(month==12){
    document.write('december');
}
else{
    document.write('invalid month');
}*/

// ***********

/*
let month =+prompt(); 
if(month=='jaunuary'){
    document.write(1);
}
else if(month=='february'){
    document.write(2);
}
else if(month=='march'){
    document.write(3);
}
else if(month=='april'){
    document.write(4);
}
else if(month=='may'){
    document.write(5);
}
else if(month=='june'){
    document.write(6);
}
else if(month=='july'){
    document.write(7);
}
else if(month=='august'){
    document.write(8);
}
else if(month=='september'){
    document.write(9);
}
else if(month=='october'){
    document.write(10);
}
else if(month=='november'){
    document.write(11);
}
else if(month=='december'){
    document.write(12);
}
else {
    document.write('invalid month');
}


swich case*****
*/


/*let mounths =+prompt();
switch(mounths){
    case 1:
   document.write('january');
    break;
 case 2:
   document.write('february');
 break;
 case 3:
 document.write('march');
 break;
 case 4:
  document.write('april');
 break;
 case 5:
    
document.write('may');
  break;
 case 6:
     document.write('june');
 break;

case 7:
      document.write('july');
    break;

 case 8:
 document.write('august');
break;

 case 9:
  document.write('september');
 break;


case 10:
     document.write('october');
 break;
 case 11:
      document.write('november');
    break;

 case 12:
 document.write('december');
 break;
 default:
      document.write('Invalid Mounths');
                
}*/



// ********string & array******

/*let myname = 'tamanna';
let lastname ="salma";
let flower = `rose`;
let day = new String(`monday`);

console.log(typeof myname);
console.log(typeof lastname);
console.log(typeof flower);
console.log(typeof day);*/

// const myname = 'Tamanna';
// const myname2 = 'Tamanna ';
// if(myname.toLocaleLowerCase===myname2.toLocaleLowerCase){
//     console.log('yes its me')
// }
// else{
//     console.log('no i am not');
// }
// console.log(myname.length);
// console.log(myname2.length);****


    //  Array****

/*var myname ='tamanna';
var meemname= 'maria';
const jeriName = 'Iffat';
let simaName ='sima';
const salmaname = 'salma';*/

/*let students = ['meem','salma','jeri','sima','diti','maria','taslima','kakoly'];
console.log(students);
console.log(students.length);

    //   includes array***

students[3]='sumi';
console.log(students);

students[7]= 'mony'
console.log(students);
            // ****

// pop***

 students.pop()
console.log(students);*/

//  array slice ****
// let flowers =['rose','lily','sunflower','marigold','daisy','tulip'];

// let flw= flowers.slice(2,5);
//  console.log(flw);

    //    array splice***

//   let flower =['rose','lily','sunflower','marigold','daisy','tulip'];
//  flowers.splice();
//  console.log(flowers);

// flowers.splice(3,0,'lotus');
// console.log(flowers);

// flowers.splice(2,1,'jasmine');
// console.log(flowers);

    //    *********

// var meemname= 'maria';
// // console.log(students[5]);
// console.log(meemname[4]);


//  var myname ='tamanna';

//   console.log(myname[5]);





// string***

// let mname =.slice(2,5);
// console.log(students);
// console.log(stn);


// **********
// object***
// includes****

/*let array =['tamanna','salma','simu','santa','juma'];

console.log(array.includes('salma'));

let string = 'taslima';
console.log(string.includes('i'));*/

// ***
// concat

/*let firstname ='tamanna';
let lastname = 'salma';
let fullname = firstname + ' ' + lastname;
let fullname = firstname .concat('    ') .concat(lastname);
console.log(fullname);*/


/*let num = [1,2,3,4,5,];
let num1 = [6,7,8,9,10];
const newArray =num.concat(num1);
console.log(newarray);
let newarray = [...num,...num1];
console.log(newarray);*/

// ****

// array theky string banano join method er maddomy****

/*let array =['tamanna','salma','simu','santa','juma'];
let newstr = array.join(' -');
console.log(newstr);*/
// ***

// *****split method er maddomy string theky array banano*****

let str = 'amar sonar bangla ami tomai valobasi'
 let Newarray = str.split('');
// let Newarray = str.split('b');

console.log(Newarray);

// optional : String Reverse Method:

// let mename = 'ummey salma tamanna';
// let reversestring = mename.split('') . reverse() . join('    ');
// console.log(reversestring);