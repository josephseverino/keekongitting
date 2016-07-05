
function teleFono () {

     var nombre = prompt ("Enter your phone number like: 'XXX-XXX-XXXX'")
     var numString = nombre.toString();
     
      
       if(numString.charAt(3) === '-' && numString.charAt(7) === '-'){
         
        alert("TRUE DAT: You know how to follow instructions")
       }
       else {
        alert("FALSE BRUHDA: Please re-read the instrucions")
       
       }
       
}


teleFono();