//Number 2: Function counting how many words in a sentence

function wordCount(str){
var count = 0;
for (var i=0; i<str.length; i++){
    if(str[i] === " "){
        count += 1;
    }
} if(str !== ""){
count +=1;
}

    return count;
}

wordCount("guess how many words i typed in for my example? Hopefully, it's not too many to figure out")