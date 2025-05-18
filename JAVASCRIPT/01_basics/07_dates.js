//dates


let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp =  Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

console.log(newDate.toLocaleString('default',{
    weekday:"long",
}))
