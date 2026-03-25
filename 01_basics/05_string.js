const name = "Vijul";
const age  = "25";

// Concatenation
// console.log(name + age +"Value");

// console.log(`My name is ${name} and I am ${age} years old.`);

const gameName = new String("Vijul-vkc-com");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('F'));


 const newString = gameName.substring(0,-4);
 console.log(newString);


const anotherString = gameName.slice(-7, 4);
console.log(anotherString);

const newStringOne = "     vijul     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://kumarvijul.com/vijul%20kumar";
console.log(url.replace("%", "-"));



console.log(url.includes("vijul"));
console.log(url.includes("github"));

console.log(gameName.split("-"));


