// singleton
//Object.create

//object literals

const mySym = Symbol("key1")

const Jsuser = {
    name:  "vijul",
    "full name": "Vijul Kumar",
    [mySym]: "mykey1",
    age: 19,
    location: "Chandighar",
    email: "vijul@google.com",
    isloggedIn: false,
    lastloginday: ["saturday", "Monday"]
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full name"]);
console.log(typeof Jsuser.mySym);
console.log(Jsuser[mySym]);

Jsuser.email = "vijulchatgpt@gmail.com"


 Object.freeze(Jsuser)



Jsuser.email = "vijulmicrosoft.com"
console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello Js user");
    
}
Jsuser.greetingTwo = function(){
    console.log(`hello Js user,${this.name}`);
    
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());
