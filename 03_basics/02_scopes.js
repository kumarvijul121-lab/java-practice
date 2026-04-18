// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER:", a);
function addnum(){

}
}

// console.log(a);
// console.log(b);
// console.log(c);

function one (){
    const userName = "Vijul"

    function two(){
        const website = "youtube"
        // console.log(userName);
    }
    // console.log(website);

    two()
    
}

one()

if (true) {
    const userName = "Vijul"
    if (userName === "Vijul") {
        const website = "youtube"
        // console.log(userName + website);
    }
    // console.log(website);
    

}
// console.log(userName);


// ++++++++++++++++++ interesting ++++++++++++++++++++++++

console.log(addone(5));
 
function addone(num){
    return num + 1
}
// addone(5)

// addTwo(5)
const addTwo = function(num){
    return num + 2
}
addone(5)