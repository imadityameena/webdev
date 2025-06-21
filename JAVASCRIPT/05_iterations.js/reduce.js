// const myNums = [1,2,3]

// // const myTotal = myNums.reduce(function(acc, currval){
// // onsole.log(`acc : ${acc} and currval : ${currval}`)    c;
    
// //     return acc + currval
// // }, 0)

// const myTotal = myNums.reduce( (acc,curr) => acc+curr,0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemname : "hair serum",
        price : 999
    },

      {
        itemname : "hair trimmer",
        price : 199
    },

      {
        itemname : "hair conditioner",
        price : 4999
    },

      {
        itemname : "hair shampoo",
        price : 1999
    }

]

 const pricetopay = shoppingCart.reduce ((acc,item) => acc + item.price, 0)

 console.log(pricetopay);
 