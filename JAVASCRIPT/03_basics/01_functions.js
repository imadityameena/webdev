function sayMyName (){
    console.log("aditya");
    
}

// sayMyName()

// function addTwoNumbers(number1,number2){

//     console.log(number1 + number2);
    
// }

function addTwoNumbers(number1,number2){
//    let result = number1 + number2
//    return result

return number1 + number2
    
}
const result = addTwoNumbers(9,6)

// console.log("Result:", result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter an username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("aditya"))

// console.log(loginUserMessage())

function calculatecartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculatecartPrice(200,400,600,9000));

const user = {
    username : "aditya",
    price : 199

}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    

}

// handleObject(user)

handleObject({
    username : "sam",
    price : 232

})

const myNewArray = [200,400,600,499]
function returnSecondvalue(getArray){
    return getArray[1]
}

// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue([200,500,600,900]));



