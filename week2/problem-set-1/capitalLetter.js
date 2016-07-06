//Below is problem number 1

function capitalLetter(str){                    
var newStr= str[0].toUpperCase();
for (var i= 0; i < str.length; i++){
     
     if (str[i] === " "){

         newStr += " " + str.substring(i+1,i+2).toUpperCase() 
     }else {
     newStr += str.substring(i+1,i+2);
     }

}
console.log(newStr)
}

capitalLetter('this function must be a capitalist because it capitalizes the first letter of each word in your sentence');