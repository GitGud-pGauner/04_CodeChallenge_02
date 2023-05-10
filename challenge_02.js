/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */


// const name = prompt("Bitte geben Sie Ihren Namen ein:");

// // Prompt für Alterseingabe
// const age = parseInt(prompt("Bitte geben Sie Ihr Alter ein:"));

// // Alterseingabe und Getränkeoption
// let drink;

// if (age >= 0 == age <= 5) {
//   drink = "Milch";
// } else if (age >= 6 == age <= 12) {
//   drink = "Saft";
// } else if (age >= 13 == age <= 17) {
//   drink = "Cola";
// } else if (age >= 18) {
//   drink = "Wein";
// } else {
//   drink = "Ungültiges Alter";
// }

// // Zeige Getränkewahl an
// console.log(drink + " =)");



//Switch|Case

//Namen- und Alterseingabe
const name = prompt("Bitte geben Sie Ihren Namen ein:");
const age = parseInt(prompt("Bitte geben Sie Ihr Alter ein:"));
let drink;

switch (true) {
  case (age >= 0 == age <= 5):
    drink = "Milch";
    break;
  case (age >= 6 == age <= 12):
    drink = "Saft";
    break;
  case (age >= 13 == age <= 17):
    drink = "Cola";
    break;
  case (age >= 18):
    drink = "Wein";
    break;
  default:
    drink = "Ungültiges Alter";
    break;
}

// Zeige Getränkewahl an
console.log(drink + " =)");
