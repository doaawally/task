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
