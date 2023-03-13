var num1 = prompt("what is your degree","0")
var num2 = prompt ("what is your degree","0")
var num5 = prompt ("what is your degree","0")
var num4 = prompt("what is your degree","0")
var num3 = prompt ("what is your degree","0")
function  calcute(num1,num2){

    return  parseInt (num1 )+  parseInt(num2) +  parseInt(num5) + parseInt(num4) +  parseInt(num3)  ;
}
let result=calcute( num1,num2,num5,num4,num3 )
console.log ( result)

function average(num1,num2,num5,num4,num3){
    return  parseInt (num1 )+  parseInt(num2) +  parseInt(num5) + parseInt(num4) +  parseInt(num3) /5 ;

}
let show=average( num1,num2,num5,num4,num3 )
console.log ( show)

function percentage(num1,num2,num5,num4,num3){
    return  parseInt (num1 )+  parseInt(num2) +  parseInt(num5) + parseInt(num4) +  parseInt(num3) /5 * 100/100 ;

}
let final=percentage( num1,num2,num5,num4,num3 )
console.log ( final, '%')











////////////////////////task one ////////////////////////



var num1 = prompt("put your number","0")
var num2 = prompt ("your second number","0")

if((num1)>(num2)) 
{ 
console.log("The larger of " +num1+ " and "+ num2+ " is "+ num1+ ".");
}   
else
if((num2)>(num1)) 
{
console.log("The max of "+ num1+" and "+ num2+ " is "+ num2+ ".");
}                  
else
{
 console.log("The values "+ num1+ " and "+num2+ " are equal.");
}






/////////////task2/////////////




// var num1 = prompt("put your number","0")
// var num2 = prompt ("your second number","0")
// var num3 = prompt ("your third number","0")
// function max_of_three(num1,num2,num3) 
//  {
//   max_val = 0;
//   if (num1 > num2)
//   {
//     max_val =num1;
//   } else
//   {
//     max_val = num2;
//   }
//   if (num3 > max_val) 
//   {
//     max_val = num3;
//   }
//   return max_val;
// }

// console.log(max_of_three(num1 ,num2 ,num3));

// function min_of_three(num1,num2,num3) 
//  {
//   min_val = 0;
//   if (num1 < num2)
//   {
//     min_val =num1;
//   } else
//   {
//     max_val = num2;
//   }
//   if (num3 < min_val) 
//   {
//     max_val = num3;
//   }
//   return min_val;
// }
// console.log(min_of_three(num1 ,num2,num3));




