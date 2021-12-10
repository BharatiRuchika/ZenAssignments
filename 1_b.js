var sentence = "converting string to titlecase";
var str = sentence.split(" ");
console.log(str);
let asciiRef = sentence.charCodeAt(0);
console.log(asciiRef);
let newAsciiRef = asciiRef - 32;
let newChar = String.fromCharCode(newAsciiRef);
console.log(newChar);
console.log(sentence[0]);
sentence.replace(newChar,sentence[0]);
for(var i = 0 ; i < sentence.length ; i++){
   
}
console.log(sentence);