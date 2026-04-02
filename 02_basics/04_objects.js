const tinderUser = new Object()
const tinderuser = {}

// console.log(tinderUser);
// console.log(tinderuser);


tinderUser.id = "abc123"
tinderUser.name = "sammy"
tinderUser.isloggedIn = false


const regularUser = {
    email:  "someemail@gamil.com",
    fullname: {
        userfullname: {
            firstname: "Vijul",
            lastname: "Kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


// const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4) // minimum use

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

 //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign



// when values comes in data Base

const users = [

        {
            id: 2,
            email: "raume@gmail.com"
        },
        {
            id: 2,
            email: "raume@gmail.com"
        },
        {
            id: 2,
            email: "raume@gmail.com"
        },

    
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));



const course = {
    coursename: "js in hindi",
    Prise: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// const {courseInstructor} = course
const {courseInstructor: instructor} = course

console.log(courseInstructor);


// {
//     "name" :  "Ritesh",
//     "coursename": "js in hindi",
//     "prise": "hitesh"
// }
 // API CODE EXAMPLE