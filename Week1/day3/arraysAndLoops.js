// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
// ];
//  console.log(coffeeOrder[2]);

//  coffeeOrder[1] = "Ann - Vanilla Latte";

//  console.log(coffeeOrder.length);

//  coffeeOrder.push("Donna - Expresso")

//  console.log(coffeeOrder);

//  coffeeOrder.pop();

// let favouriteDrinks = ["Coke" , "Fanta" , "Tonic" ];
// console.log(favouriteDrinks[0]);
// console.log(favouriteDrinks[1]);
// console.log(favouriteDrinks[2]);

// let favDrinks = ["Coke" , "Fanta" , "Tonic" , "Red Bull"];
// for(let i = 0; i < favDrinks.length; i++){
//     console.log(favDrinks[i]);
// }

// let multiplesTwo = [];

// for(let i = 0; i < 20; i++){
//     if (i % 2 == 0){
//         multiplesTwo.push(i);
//     }
// }
// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}`)

// let age = 15;
//  while (age < 18){
//      console.log("You're a child!");age++;
//  }
//  console.log("You're an adult");

// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = "Club";

// while (currentCard != "Spade"){

//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];
// }
// console.log(currentCard);


// // Activity 1
// let favFilms = ["Goodfellas","One Flew Over The Cuckoo's Nest","Lord of the Rings"];
// console.log(favFilms);

// favFilms.push("Star Wars","Ghostbusters")
// console.log(favFilms);

// for(let i=0; i < favFilms.length; i++){
//     console.log(favFilms[i]);
// }

// // Activity 2

// for (let i = 0; i < 6 ;i++){
//     console.log(Math.floor(Math.random()*50)+1);
// }

// // Activity 3
// let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(nums);
// console.log(nums.reverse());

// for (i = 9; i >= 0;i--){
//     console.log(i);
//   }

// // Activity 4

// let faveFilms = ["Goodfellas","One Flew Over The Cuckoo's Nest","Lord of the Rings","Star Wars"];

// for(let i=0; i < faveFilms.length; i++){
//     console.log(faveFilms[i]);
// }

// if(faveFilms[2]=="ghostbusters"){
//     console.log("Yay. it's Ghostbusters");
// }
// else{
//     console.log("Booo! We want Ghostbusters");
// }

// Activity 5
for (let i = 0; i < 6 ;i++){
    let x = Math.floor(Math.random()*30)
    if (x % 7 === 0){
     console.log(`${x} is divisible by 7`);
    }
    else{
     console.log(`${x} isn't divisible by 7`);
    }
}

// Activity 6

let bobsFollowers = ["tom","jerry","morecambe","wise"]
let hannahsFollowers = ["laurel","hardy","tom","jerry"];
let mutualFollowers = [];
    for(let b = 0; b < bobsFollowers.length; b++){
      for(let h = 0; h < hannahsFollowers.length; h++){
          if(bobsFollowers[b] === hannahsFollowers[h]){
              mutualFollowers.push(bobsFollowers[b]);
            }
        }
    }
   console.log("Mutual Followers: " + mutualFollowers);

// Activity 7 (do.. while research)
// do.. while loops run a loop in the 'do' part as long as the condition in the while part remains true
/// once it is false, the loop ends
let nmbr = ""
let i = 0; 

do {
    nmbr += i +",";
    i++;
} 
while (i < 7);
console.log(`${nmbr}`);


