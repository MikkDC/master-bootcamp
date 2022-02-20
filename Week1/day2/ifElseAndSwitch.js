// if (1==="1") {
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// if (1 != "1") {
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// let place = "Bolton"
// let weather = "Rain"
// if (place == "Bolton" && weather =="Sunny") {
//     console.log("Check again");
// }
// else if (place == "Bolton" && weather =="Rain") {
//     console.log("Obvs");
// }
// else {
//     console.log("What? It isn't raining?");
// }

// const grade = 87

// switch (true) {
//     case grade >= 70:
//         console.log("Distinction");
//         break;
//     case grade >=60:
//         console.log("Merit");
//     case grade >= 50:
//         console.log("Pass");
//         break;
//     default:
//         console.log("failed");

// }

// // Activity 1
// let age = 17;
// if (age >= 17) {
//     console.log("I can serve you");
// }
// else {
//     console.log("Sorry, you're under age");
// }

// adding the country into the mix
// let country = "usa"
// age = 22
// if (age >= 18 && country == "uk") {
//     console.log("What can I get you, pal?");
// }
// else if (age >= 21 && country =="usa") {
//     console.log("What can I get ya, pardner?");
// }
// else {
//     console.log("Sorry, you're under age");
// }

// // Activity 2
// let topping = "pineapple"
// switch (topping) {
//     case "pepperoni":
//     case "chilli":
//     case "ham":
//         console.log(`${topping} are all important ingredients on my pizza`);
//         break;
//     case "red onion":
//     case "chicken":
//     case "spicy beef":
//         console.log(`I don't mind having ${topping} on pizza`);
//         break;
//     case "pineapple":
//         console.log(`${topping} does not belong anywhere NEAR a pizza!`);
//         break;
//     default:
//         console.log(`I'm not sure ${topping} belongs on pizza`);
// }

// // Activity 3
// let password = "password" 
// if (password.length < 8){
//     console.log( "Password is too short.")
// }  
// else {
//     console.log(password)
// }

// //Activity 4
// let num = 15;
// if (num % 3 == 0 && num % 5 == 0){
//     console.log("This number is divisible by 3 or 5")
// }
// else{
//     console.log("This number is not divisible by 3 or 5")
// }

// // Activity 5
// let number = 30
// if (number % 3 == 0 && number % 5 == 0){
//     console.log("fizz buzz");
// }
// else if (number % 3 == 0){
//     console.log("fizz");
// }
// else if (number % 5 == 0){
//     console.log("buzz");
// }
// else {
//     console.log(number);
// }

// //Activity 6 
// // While doing this the .split kept throwing a "is not a function" error
// // After a little research, I found out that you have to first convert it to a string
// // So added the toString and it worked

// let num =770077
// let revnum = num.toString().split("").reverse().join("");
//        if(num==revnum){
//            console.log(`${num} is a palindrome`);
//        }
//        else{
//            console.log(`${num} is not a palindrome`);
//        }

// //Activity 7
// let time = 17;
// let placeOfWork = "Codenation";
// let homeOfTown = "Bolton";

// if(time == 7 || time >=19 && homeOfTown == "Bolton" ){
//     console.log("Im at home");
// }
// else if(time == 8 || time == 18){
//     console.log("I'm commuting");
// }
// else if(time >= 9 && placeOfWork == "Codenation"){
//     console.log("Im at work");
// }
// else {
//     console.log ("I'm probably asleep")
// }

// // Activity 8
// // After doing some research, I knew I would have to use lastIndexOf to find the last vowel 
// // in the vowels array but wasn't sure how I would do that so had to look at the solution.
// // Having seen the solution, it became much clearer.
// // From what I understand, the for loop iterates through the vowels a to u and checks this
// // against the string with the 'string.lastIndexOf(vowels[i])' code and stores it in the variable 
// // called index.
// // It then checks the index of that vowel found and compares it to the highestVowelIndex 
// // variable which was initialised earlier. if it's greater or equals to it (which it will be
// // because it's zero), it swaps the index variable stored earlier with the highVowelIndex
// // thus storing it in that variable instead.
// // The lastVowel variable stores the value of the vowel found with the for loop, in this case "i"
// // and then both are printed out using console commands.

// let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
// let vowels = ['a', 'e', 'i', 'o', 'u'];
// let highVowelIndex = 0;

// for (let i = 0; i < vowels.length; i++){
//     index = string.lastIndexOf(vowels[i]);

// if (index >= highVowelIndex ){
//     highVowelIndex = index;
//     lastVowel = vowels[i];
// }
// }
// console.log(lastVowel); 
// console.log(highVowelIndex);

// //Activity 9

// let word = "bobby bob"
// if (word.charAt(0) == word.charAt(word.length - 1)) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// //Activity 10

// let num1 = 10;
// let num2 = 3;
// let sum = num1 + num2
// if (sum % 2 == 0){
//     console.log(`${num1} + ${num2} = ${sum}`);
// }
// else{console.log(num1*num2);
// }