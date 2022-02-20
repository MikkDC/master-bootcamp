// // Activity 1
// const person = {
//     name: "Michael",
//     age: 47,
//     favesongs: [
//         "Oxygene IV by Jean Michel Jarre",
//         "My Dark Disquiet by Poets of the Fall",
//         "One by Metallica",
//     ],
//     sayHi(){
//         return `Hello, my name is ${this.name}`
//         }
//     }

// console.log(person.age);
// console.log(`My favourite songs are ${person.favesongs}`);
// console.log(person.sayHi())

// // Activity 2
// const pet = {
//     petName: "Tiny",
//     typeOfPet:"cat",
//     petAge:14,
//     colour:"black & white",
//         eat:() => {
//             return `${pet.petName} is eating`;
//         },
//         drink:() => {
//             return `${pet.petName} is drinking`;
//         }
// }

// console.log(pet.eat())
// console.log(pet.drink())

// //Activity 3
// // I can get it to print out the total of all items but unsure of how to do it
// // with individual items and so had to check the solutions.

// const coffeeShop = [
    
//     {drink:"Cappuccino,", price:3.00},
//     {drink:"Latte", price:2.50},
//     {drink:"Coffee", price:1.90},
//     {drink:"Tea", price:1.50},
//     {food:"Sandwich", price:2.00},
//     {food:"Chips", price:1.50},
//     {food:"Pie", price:1.50},
//     {food:"Pastie", price:1.00},
//     ]
        
//     let total = 0;
//     coffeeShop.forEach(item => {
//         total += item.price;
//     });    

// console.log("Total = ", total)

const coffeeShop = {
    branch: 'Stars',
  
    drinks: {
    latte: 2.50,
    tea: 1.5,
    capuccino: 3,
    coffee: 1.9,
    },

    food: {
    chips: 1.5,
    pie: 1.2,
    pastie: 1,
    },
  
    drinksOrdered(...drinks) {
      let cost = 0;
      const drinksStr = drinks.join(' & '); // joins items from array with & between them
      drinks.forEach(drink => (cost += this.drinks[drink])); // gets the cost of each item
      cost = cost.toString().split('.'); // sends the costs to a string and splits them
      cost[1] = cost[1].padEnd(2, '0'); // adds a zero onto the end of the cost 
      cost = cost.join('.'); // joins the previously split values back together
  
      return this.displayOrder(drinksStr, cost); // calls displayOrder funtion which logs to the console
    },
  
    foodOrdered(...food) {
      let cost = 0;
      const foodStr = food.join(' & ');  
      food.forEach(item => (cost += this.food[item]));  
      cost = cost.toString().split('.'); 
      cost[1] = cost[1].padEnd(2, '0'); 
      cost = cost.join('.');  
      return this.displayOrder(foodStr, cost);
    },
  
    displayOrder(order, cost) {
      return console.log(
        `Your ${order} will be with you shortly, the total is £${cost}.`
      );
    },
  };
  
  coffeeShop.drinksOrdered('capuccino','coffee');
  coffeeShop.foodOrdered('pie', 'pastie');




// let day = "sunday"
// let alarm=""

// const alarmClock = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up at 7am",
// };

// if (day = "saturday" || "sunday"){
//     alarm = alarmClock.weekendAlarm
//     console.log(alarmClock.weekendAlarm);
// }
// else if (day ="monday" || "tuesday" || "wednesday" || "thursday" || "friday"){
//     alarm = alarmClock.weekdayAlarm
//     console.log(alarmClock.weekdayAlarm)
// }
// else{console.log("What day is that!?")}