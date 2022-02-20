// const pressGrindBeans = () => {
//     console.log("Grinding for 20 secs")
// }

// pressGrindBeans()

// let coffeeIs Grinding = false;

// const pressGrindBeans =() => {
//     if(coffeeIsGrinding){
//         console.log("Stopping thegrin...");
//         coffeeIsGrinding = true
//         else
//     }
// }

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from ${accountnum};`)
// }

// cashWithdrawal(300, accnumber);
// cashWithdrawal(30, 50449921)
// cashWithdrawal(200, 50449921)

// let accnumber = 50449921;

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from ${accountnum};`)
// }

// cashWithdrawal(300, accnumber);
// cashWithdrawal(30, 50449921)
// cashWithdrawal(200, 50449921)

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addUp(7,3));
// console.log(addUp(5,6));

// // Activity 1
// const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//         } 
//         else {
//             return (n * factorial(n-1));
//         }
//     }

// console.log(factorial(22))

// // Activity 2
// let orderCount = 0

// const takeOrder = (topping1, topping2) => {
//     console.log(`Pizza with ${topping1} and ${topping2}`)
//         orderCount++;
// }

// takeOrder("peperroni", "chilli")
// takeOrder("cheese","tomato")
// console.log(orderCount)

// Activity 3

let actual_pin = 1234
let balance = 500

const cashMachine = (entered_pin, amount) =>{
    if (entered_pin == actual_pin && amount <= balance){
        balance -= amount;
        console.log(`You have withdrawn £${amount}, your remaining balance is £${balance}`);
    }        
    else if (entered_pin == actual_pin && amount > balance){
        console.log(`Insufficient funds, you cannot withdraw £${amount}. You only have £${balance} in your account.`);}
    else {console.log(`Incorrect PIN`);}
}

cashMachine(1234, 400)
cashMachine(1234, 50)
cashMachine(1234, 100)
cashMachine(4321, 10)


