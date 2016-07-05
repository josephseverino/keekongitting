
function teleFono () {

     var phoneInput = prompt ("Enter your phone number like: XXX-XXX-XXXX")
        var numString = phoneInput.toString();
        alert(numString.charAt(3) === '-' && numString.charAt(7) === '-')
     var birthInput = prompt ("Enter your Birthdate like: MM/DD/YY")
        var birthString = birthInput.toString();
        alert(birthString.charAt(2) === '/' && birthString.charAt(5) === '/')
     var postalInput = prompt ("Enter your postal code like: XXXXX -OR- 'XXXXX-XXXX' TO INCLUDE QUOTES")
        var postalString = postalInput.toString();
         alert(postalString.length === 5 || postalString.charAt(5) === '-')
     var stateInput = prompt ("Enter your State as such: XX (must be two letters and both capitalized)")
        var stateString = stateInput.toString();
        alert(stateString.length === 2 && stateString === stateString.toUpperCase())
     var statusInput = prompt ("Enter 'yes' if you're married and 'no' if you're not")
        var statusString = statusInput.toString();
        alert(statusString.toUpperCase() === 'YES' || statusString.toUpperCase() === 'NO')
       
    
      
       
        
         
     
     
    
         
        
        
       
   
}


teleFono();