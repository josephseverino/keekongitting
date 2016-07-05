var properties = prompt("TYPE ANY WORD YOU LIKE");
var property1 = 'You Entered: ' + properties;
var property2 = 'there are ' + properties.length + ' characters in the word';
var property3 = 'the third character is \'' + properties.charAt(2) + '\'';
var property4 = 'Lowercase: ' + properties.toLowerCase();
var property5 = 'Uppercase: ' + properties.toUpperCase();
var property6 = 'I have been craving (a) ' + properties + ' all week long.'
var property7 = 'Subword: ' + properties.substring(1,3);
alert(property1 + '\n'+ property2 + '\n'+ property3 + '\n'+ property4 + '\n'+ property5 + '\n'+ property6 + '\n'+ property7 )