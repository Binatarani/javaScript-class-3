// //(a)Comparison Operators

// 1. ==	equal to
// 2. ===	equal value and equal type
// 3. !=	not equal
// 4. !==	not equal value or not equal type
// 5. >	greater than
// 6. <	less than
// 7. >=	greater than or equal to
// 8. <=	less than or equal to
// 9. ?	ternary operator

// //1. == equal to

// console.log(9 == 9);
// console.log(9 == 8);
// console.log(9 == "9");
// console.log(0 == 0);
// console.log(1 == 0);

// //2.=== equal value and equal type

// console.log(9 === "9");
// console.log(9 === 9);
//const firstName = "Amit Kumar";
// console.log(firstName);
//const lastName = "pk.";
// console.log(lastName);
// console.log(firstName === lastName);
// console.log(firstName == lastName);

// //3. != not equal
// console.log(9 != 9);
// console.log(8 != 9);
// console.log(3 != 2);
// console.log(15 != 15);
// console.log(15 != 18);

// //4.!==	not equal value or not equal type

// console.log(9 !== 9);
// console.log(7 !== 8);
// const firstName = "Amit Kumar";
// console.log(firstName);
// const lastName = "pk.";
// console.log(lastName);
// console.log(firstName !== lastName);
// console.log(firstName !== firstName);

// //5. > greater than
// console.log(9 > 7);
// console.log(9 > 10);
// console.log(9 > 9);
// console.log(8 > 10);
// console.log(9 > 12);

// //6. < less than
// console.log(8 < 7);
// console.log(8 < 9);
// console.log(8 < 9);
// console.log(7 < 7);
//console.log(3 < 12);

// //7. >=	greater than or equal to

// console.log(9 >= 7);
// console.log(9 >= 9);
// console.log(9 >= 10);
// console.log(9 >= 12);
// console.log(13 >= 9);

// //8. <=	less than or equal to

// console.log(9 <= 7);
// console.log(9 <= 9);
// console.log(9 <= 10);
// console.log(12 <= 18);
// console.log(20 <= 10);

// //(b) Logical operators

// 1. && logicl and
// 2. ||	logical or
// 3. !	logical not

// //1. &&	logical and
//let x = 6;
//let y = 5;

// console.log(x < 9);
// console.log(x < 4);
// console.log(x < 6);
// console.log(x <= 8);
// console.log(x <= 6);
// console.log(x <= 4);

// console.log(y > 3);
// console.log(y > 9);
// console.log(y >= 5);
// console.log(y >= 8);

// console.log(x < 9 && y > 3); // if x & y = true then console show true

//console.log(x < 4 && y > 9); // if x & y = false then console show false

// console.log(x < 9 && y > 9); //if  x = true, y = false then console show false

// // 2. || logical or

// let x = 8;
// let y = 5;
// console.log(x < 10 || y > 6);
// console.log(x < 7 || y > 4);
// console.log(x < 7 || y > 5);
// console.log(x < 7 || y > 6);

// // 3. !	logical not

// let x = 8;
// let y = 5;
// console.log(x == y);
// console.log(!(x == y));

// Operator precedenc

// //B O D M A S
// B = breaket();
// O = Exponentiation (**);
// D = Division (/);
// M = Multiplication (*);
// A =  Addition (+);
// S = Subtraction (-);

// console.log((36 / 6) * 3 + 2 ** 2 - (3 + 5));

// 6 * 3 + 2 ** 2 - 8;
// 6 * 3 + 4 - 8;
// 18 + 4 - 8;
// 22 - 8;
// 14;

// //(c) Templata Literals

//const firstName = "Debangshu";
// const lastName = "Pramanik";
// let age = 7;
// let job = "student";
// const country = "Bangladesh";

// console.log(firstName + " " + lastName);

// console.log("I'm Debangshu Pramanik, 7 years old student.");

// console.log(`I'm ${firstName} ${lastName},
// ${age} years old ${job}.`);

// console.log(`first line
// second line
// third line`);

// console.log(`I love ${country}`);
//console.log(`Bangladesh win ${2 + 1} series.`);

// const firstName = "Niccolo";
// const lastName = "Machiavelli";
// const country = "Florence,Italy";
// const birthYear = "1469";
// const birthDate = "3rd may";
// const job = "lawyer";
// const sonFirstName = "Bernardo di Nicclo";
// const sonLastName = "Machiavelli";
// const wifeFirstName = "Bartolommea di Stefano";
// const wifeLastName = "Nelli";

// console.log(
//   `${firstName} ${lastName} was born in ${country}, on ${birthDate} ${birthYear}. He was the second son of ${sonFirstName} ${sonLastName},
//   a ${job} of some repute, and of ${wifeFirstName} ${lastName}, his wife. `
// );

// // (d.) if/Else statements

// if(){

// } else {

// }

// if (5 > 4) {
//   console.log("5");
// } else {
//   console.log("something else!");
// }

// if (5 > 8) {
//   console.log(5);
// } else {
//   console.log("something else!");
// }

// if (15 > 22) {
//   console.log(15);
// } else {
//   console.log("something else!");
// }

// let adriAge = 3;
// if (adriAge >= 6) {
//   console.log("Adri can start school");
// } else {
//   console.log("Adri can't start school");
// }

// let adriAge = 6;
// if (adriAge <= 6) {
//   console.log("Adri can start school");
// } else {
//   console.log("Adri can't start school");
// }
