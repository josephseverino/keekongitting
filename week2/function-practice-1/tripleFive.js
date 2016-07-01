var tripleFive = function(){
    var i=0;
    while (i < 3){
    console.log("Five! ")
    i++;
  }
 }
 tripleFive();
 
 
function tripleFive()
{
   for (var i = 0; i < 3; i++){
       console.log("Five!");
   }
}
tripleFive();


function lastLeter(word){
      return word.slice(-1);
}
lastLeter("joe");

function square(num){
    console.log(num*num);
}
square(3);
square(5);
square(9);


function negate(num){
    console.log(-1*num)
}
negate(5);
negate(-100);
negate(-2);
negate(0);



function toArray(num1,num2,num3){
    var array = [];

        array.push(num1);
        array.push(num2);
        array.push(num3);
    console.log(array);

}
toArray(4, 8, 9);


function startsWithA(string){

   if ('string.charAt(0)'=='a'|| 'string.charAt(0)'=="A"){
   console.log("true");
}else {
console.log("false")

}
}
startsWithA('hello');
startsWithA('aello');