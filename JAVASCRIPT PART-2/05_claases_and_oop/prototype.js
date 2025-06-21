//  let myName = "Aditya    "

//  //console.log(myName.trim().length);
 
//  console.log(myName.truelength());
 
 let myHeros = ["thor", "spiderman"]
 

 let heroPower = {
    thor : "hammmer",
    spiderman : "sling",


    getSpiderPower: function(){
        console.log(`spidy powert is  ${this.spiderman}`);
        
    }
 }

Object.prototype.huppyyy = function(){
    console.log(`huppyyy is the object`);
    
}

Array.prototype.heyhuppyy = function(){
    console.log(`huppyy says hello`);
    
}

//  heroPower.huppyyy()
// myHeros.huppyyy()

// myHeros.heyhuppyy() //it will print because myHeros is a array
// heroPower.heyhuppyy() // it will not  beccause heroPower is a object





//++++++++++++++Inheritance++++++++++++++++++++++



const User = {
    name: "huppyy",
    email: "adarbajb@gmail.com", 
}

const teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment : 'JS assignment',
    fulltime : true,
    __proto__ : TeachingSupport
}

teacher.__proto__ = User

//modern syntax


Object.setPrototypeOf(TeachingSupport, teacher) //teachersupport will take the properties of teacher as well



let anotherUsername = "adityaMeena"

String.prototype.truelength = function(){
    console.log(`${this}`);
    
    
    
    console.log(`True length is : ${this.trim().length}`);
    
}

anotherUsername.truelength()

"huppyyyy".truelength()

