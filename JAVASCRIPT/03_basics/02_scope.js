// // var c = 300
// let a =300

// {} the curly braces is the scope

// if (true){
//     let a = 10
//     const b = 20
//     console.log("innner:", a);

// }

// console.log(a);
// // console.log(b);
// // console.log(c);

function one() {
  const username = "aditya ";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);

  two();
}

// one()

if (true) {
  const username = "aditya";
  if (username === "aditya") {
    const website = " youtube";
    // console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

// ++++++++++++++++++ INTERESTING +++++++++++++++++++++++++

function addOne(num) {
  return num + 1;
}

addOne(5);

const addTwo = function (num) {
  return num + 2;
};

addTwo(5);
