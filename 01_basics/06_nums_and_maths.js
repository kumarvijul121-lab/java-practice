const score = 40
console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(1)); 

// for e commerce website


const otherNumber = 1123.98;
 console.log(otherNumber.toPrecision(3));
  console.log(otherNumber.toPrecision(4));
 
  const hundred = 10000000
  console.log(hundred.toLocaleString());
  console.log(hundred.toLocaleString('en-IN'));
 


 //++++++++++++++++Maths+++++++++++++++++++++++

console.log(Math);

 console.log(Math.abs(-4));
 console.log(Math.round(4.6));
 console.log(Math.ceil(4.3));
 console.log(Math.floor(4.9));
 console.log(Math.min(4,6,2,7,4));
 console.log(Math.max(4,6,2,7,4));


console.log(Math.random());
 // 0 to 1 
 console.log(Math.random()*10 + 1); 
 // 0 sometime
//  console.log(Math.random()*10 + 1); 
 console.log(Math.floor(Math.random()*10));
  // 0 
 console.log(Math.floor(Math.random()*10) + 1);
  //1 to 9

 const min = 10 
 const max = 20

 console.log(Math.random() * (max - min + 1));
 console.log(Math.floor(Math.random() * (max - min + 1)) + min);
 
 // use + 1 to avod 0