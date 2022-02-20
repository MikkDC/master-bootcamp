/* 
console.log("All Around the World".charAt(7).toUpperCase());

let i=10
// i=i+2  does the same as the following
i += 2
console.log(i)

let favouriteDrink="Coffee"
console.log("My favourite drink is "+favouriteDrink)

let name = "Michael"
let age = 47
let hobby = "Videogames"
console.log("My name is "+name +", I am "+age +" years old, and my favourite hobby is "+hobby)

console.log(`My name is ${name}, I am ${age} years old, and my favourite hobby is ${hobby}`);

*/

// Activity 1

let name2 = "Bob"
let age2 = 52
let faveColour2 = "Red" // using faveColour2 to keep it uniform
console.log(`Hello, my name is ${name2}, I am ${age2} years old and my favourite colour is ${faveColour2}`)

name2 = "Dave"
age2 = 34
faveColour2 = "Green" // using faveColour2 to keep it uniform
console.log(`Hi, I'm ${name2}, I am ${age2} years old and ${faveColour2} is my favourite colour`)

// Activity 2

let breakfast = "toast"
let lunch = "soup"
let dinner = "chicken curry"
console.log(`For my breakfast I had ${breakfast}, for my lunch I had ${lunch} and later, for dinner, I will have ${dinner}`)

breakfast = "Cornflakes"
lunch = "noodles"
dinner = "chips and Fish"
console.log(`Tomorrow I will have ${breakfast} for my breakfast, then ${lunch} for lunch and ${dinner} for dinner.`)

// Activity 3

const birthdate = new Date(1975,0,3); // month is zero indexed so jan=0
let dateB = new Date(2022,1,15);
let  diffInTime = dateB.getTime() - birthdate.getTime();
console.log(diffInTime) 
let diffInDays = (diffInTime/(1000*3600*24)); // calculates to days
console.log(Math.floor(diffInDays));

console.log(`Total number of days between dates ${birthdate} and ${dateB} is ${diffInDays}`);

//Activity 4 
let space1 = "X"
let space2 = "O"
let space3 = " "
let space4 = "X"
let space5 = "X"
let space6 = " "
let space7 = "O"
let space8 = " "
let space9 = " "
console.log(`   |   |   `)
console.log(` ${space1} | ${space2} | ${space3} `)
console.log(`   |   |   `)
console.log(`-----------`)
console.log(`   |   |   `)
console.log(` ${space4} | ${space5} | ${space6} `)
console.log(`   |   |   `)
console.log(`-----------`)
console.log(`   |   |   `)
console.log(` ${space7} | ${space8} | ${space9}  `)
console.log(`   |   |   `)