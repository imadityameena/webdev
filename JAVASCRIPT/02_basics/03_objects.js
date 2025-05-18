//singelton
// Object.create

// object literals


const mysym = Symbol("key1")

const jsUser = {
    name : "aditya", "full name" : "aditya meena",
    age : 18,
    [mysym] : "key1",
    location: "Jaipur",
    email : "aditya@google.com",
    isLoggeedIn: false,
    lastLogindays : ["Monday", "Saturday"]

}


console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser[mysym]);

jsUser.email = "ahgja@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "aditya@microsoft.com"
console.log(jsUser);



jsUser.greeting =  function(){
    console.log("Hello jS user");
}
jsUser.greeting2 =  function(){
    console.log(`Hello jS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
