const marvel_heros = ["hulk" , "ironman", "thor"]
const dc_heros = ["superman", "batman", "flash"]

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6], 7, [6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("aditya"));
console.log(Array.from("aditya"));
console.log(Array.from({name :"aditya"})); //interesting topic for interviews



let scr1 = 100;
let scr2 = 200;
let scr3= 300;

console.log(Array.of(scr1,scr2,scr3));


 