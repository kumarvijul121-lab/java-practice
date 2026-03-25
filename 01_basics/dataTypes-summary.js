// Primitive data types in JavaScript

// 7 primitive data types:
//string, number, boolean, null, undefined, symbol, bigint



// String
  let name = "John Doe";
  console.log(typeof name); // Output String


//Number
  const score = 30;
  const scoreValue = 30.5;
  console.log(typeof score);// Output Number
  console.log(typeof scoreValue); // Output Number


// Boolean
  let isStudent = true;
  const LoggedIn = false;
  console.log(typeof isStudent); //Output: boolean
// console.log(typeof LoggedIn); //Output: boolean


// Null 
  let emptyValue = null;
  const outsideTemp = null;
  console.log(typeof emptyValue); // Output: object
  console.log(typeof outsideTemp); // Output: object

// Undefined
  let age;
  let userEmail;
  console.log(typeof age); // Output; undefined
  console.log(typeof userEmail); // Output; undefined

//Symbol
 const uniqueId = Symbol("24765702");
  const id = Symbol("12345789");
   console.log(typeof uniqueId); // Output; symbol
    console.log(uniqueId === id); // Output;
// false

 // BigInt
const bigNumber = 23748234857893456345n;
console.log(typeof bigNumber); // Output: bigint




//Refrence (non primitive)

 // 3 types of refrence data types 
 // object, array, function 


  const heros =["Netro", "Naagraj", "Doga"];
  let myObj = {
     name : "Viul",
     age : 25,
  }

  const myFunction = function(){
  console.log("Hello World");
  }

  console.log(typeof myFunction);
  console.log(typeof heros);
 
 // https://262.ecma-international.org/5.1/#sec-11.4.3



 //+++++++++++++++++++++++++++++++++++++++++++++++++++++
  

 // Stack(Primitive  (Number, String, Boolean, Null, Undefined, Symbol, BigInt) always Show Copy), Heap always show refrence (originnal value)(Non-primitive)

 let myYoutubeChannel = "CodeWithVijul"
 let anotherChannel =
 "myyoutubechannel";

 console.log(myYoutubeChannel);
 console.log(anotherChannel);

let userone = {
      email : "vijul@example.com",
      upi : "vijul@okaxis"

}

 let userTwo = userone;

 userTwo.email = "kumarec@examp.com";

console.log(userone.email);
console.log(userTwo.email);