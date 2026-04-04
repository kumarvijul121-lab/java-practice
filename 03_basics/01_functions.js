function SayMyName(){
    console.log("V");
    console.log("I");
    console.log("J");
    console.log("U");
    console.log("L"); 
}

// SayMyName()



function addTwoNumbers(number1, number2){
    //let result = number1 + number2
    // console.log("Vijul Kumar");
    // return result
    return number1 + number2
    
    
}
// const result = addTwoNumbers(3, 5)
// console.log("Result: ", result); 


function loginUserMessage(username = "Sam"){
    // if(username === undefined)
    if (!username){
        console.log("Please enter  username");
        return result
    }
    return `${username} just logged in`
    
}


// console.log(loginUserMessage("Umang"))
console.log(loginUserMessage())
