function SayMyName(){
    console.log("V");
    console.log("I");
    console.log("J");
    console.log("U");
    console.log("L"); 
}

// SayMyName()



function addTwoNumbers(number1, number2){
    let result = number1 + number2
     console.log("Vijul Kumar");
     return result
    return number1 + number2
    
    
}
 const result = addTwoNumbers(3, 5)
 console.log("Result: ", result); 


function loginUserMessage(username = "Sam"){
    // if(username === undefined)
    if (!username){
        console.log("Please enter  username");
        return result
    }
    return `${username} just logged in`
    
}


  console.log(loginUserMessage("Umang"))
 console.log(loginUserMessage())



function calculateCartPrice(val1, val2, ...num1){
    return num1 
}


 console.log(calculateCartPrice(200, 400, 100, 2000));

const user = {
    username: "Vijul",
    price: 200
};

function handleObject(anyobeject){
     console.log(`Username is ${anyobeject.username} and price is ${anyobeject.price}`);
    
}

// handleObject(user)
handleObject({
    username:"sam",
    price: 300
})


//Array ke liye function
const myNewArray = [100, 220, 300, 400,]
function returnSecondValue(getarray){
    return getarray [1]
}
 console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([100, 220, 300, 1000, 5000]));
