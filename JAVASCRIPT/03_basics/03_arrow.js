const user = {
    username : "aditya",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        
// console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username  = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "aditya"
//     console.log(this.username);
    
// }

// chai()

const chai =  () => {
    let username =  "aditya"
    console.log(this.username);
    
}

// chai()


// const addTwo = (num1,num2) => {
//     return num1 + num2
// }
//+++++with {} you haev to write the return++++++

// const addTwo = (num1,num2) =>  num1 + num2

//****with () yoou dont need to write the return****/

// const addTwo = (num1,num2) =>  (num1 + num2)
// const addTwo = (num1,num2) =>  (num1 + num2)
 
const addTwo = (num1,num2) => ({username: "aditya"})
console.log(addTwo(3,4));


// const myArray = [2, 5, 7, 8]

// myArray.forEach()