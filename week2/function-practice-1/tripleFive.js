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


function excite(word){
    console.log(word+"!!!")
}
excite('yes');
excite('go');


function sun(str){
var lower = str.toLowerCase();
var test = lower.indexOf("sun");
if (test === -1){
    return "false"
} else {
    return "true"
}

}
sun('sundries'); //should return true
sun('asunder') ;//should return true
sun('catapult'); //should return false


function tiny(num){
    if(num < 1 && num > 0){
    return "true"
    }else{
        return "false"
    }
}

tiny(12);
tiny(-1);
tiny(.7);
tiny(-.5);



function getSeconds(time){
    var min = Number(60*time.substring(0,time.indexOf(":"))) ;
    var sec = Number(time.substring(time.lastIndexOf(":")+1,time.length));
    return sec + min;
    
 
    
}
getSeconds('20:30');