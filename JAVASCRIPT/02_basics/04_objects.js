// const tinderuser = new Object() //singelton object

const tinderuser = {}; //same thing but non-singelton

tinderuser.tinderuser = "123abc";
tinderuser.name = "hehe";
tinderuser.isLoggedIn = false;

// console.log(tinderuser);

const regularuser = {
  email: "aditya@g.com",
  fullname: {
    userfullname: {
      firstname: "aditya",
      lastname: "meena",
    },
  },
};

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

// const obj4 = {obj1, obj2, obj3}

// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = { ...obj1, ...obj2, ...obj3 };

// console.log(obj4);

const users = [
  {
    id: 1,
    email: "aghska@gmail.com",
  },
  {
    id: 2,
    email: "bhafv@gmail.com",
  },
];

users[1].email;
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty("isLoggedIn"));

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstrutor: "aditya",
}


//course.courseInstructor

const {courseInstrutor : instructor} = course

// console.log(courseInstrutor);

console.log(instructor);


// {
//     name : "aditya ",
//    subject : "js in hindi",
//     price : "free"
// }
