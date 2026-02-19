// let  user_age = 10;
// let another_user_age= 20;
// let sum = user_age + another_user_age;
// console.log("The sum is: " + sum);

// let first_person_name = "John";
// first_person_name += "doe";
// console.log(first_person_name);




// const greeting = "Hello, ";
// const name = "Alice";
// const welcome_message = `greeting  ` + `${name} length is ` +name.length +`!`;
// console.log(welcome_message);



// const greeting = "Hello this is a sample string.";
// console.log(greeting.substring(1,9));

// console.log(`hello this is lalit`)
// let index=4 ;
// console.log("Character at index " + index + " is: " + greeting.charAt(index));

// console.log(eval("3 + 5"));




// at

// const sentence = "The quick brown fox jumps over the lazy dog.";
// let index = 5;
// console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// // Expected output: "An index of 5 returns the character u"
// index = -4;
// console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// // Expected output: "An index of -4 returns the character d"



// charAt

// let sentence = "hello this is a lalit.";
// let index = 7;
// console.log("An index of " + index + " returns the character " + sentence.charAt(index));



// concat

// let first_name = "rohit";
// let last_name = "kuamr" ;
// console.log("first name is " + first_name + " last name is " + last_name );
// console.log("full name is " + first_name.concat(" " , last_name));
// console.log( last_name.concat( " ", first_name));



//  indexOf

// // ex-1
// let paragraph = "I think Ruth's dog is cuter than your dog!";
// let searchTerm = "dog";
// let indexOfFirst = paragraph.indexOf(searchTerm);
// console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// console.log(
//   `The index of the second "${searchTerm}" is ${paragraph.indexOf(searchTerm,indexOfFirst + 1,)}`,
// );

// //ex-2
// let para = "hello this is a nav, From the jalandhar";
// let index_first = 5;
// console.log(`In the para on index ${index_first} is ${para.indexOf("this")}`);





// repeat

// const mood = "Happy! ";
// console.log(`I feel ${mood.repeat(9)}`);





// replace/ replaceAll

// let heading = "This is a big news for today, and we need.toLocaleLowerCase print it today";
// let heading_sec = "This is a big news for today, and we need.toLocaleLowerCase print it today";
// console.log(heading.replace("today", "yesterday"));
// console.log( heading_sec,heading.replaceAll("today", "yesterday"));





// slice

// const str = "The quick brown fox jumps over the lazy dog.";
// console.log(str.slice(31));
// console.log(str.slice(4, 15));
// console.log(str.slice(-9));





// lenght 

// let full_name = "Nirmal singh";
// console.log(full_name.length);




// toUpperCase

// let user_id = "naveen singh";
// console.log(user_id.toUpperCase());





// toLowerCase

// let user_id = "MANJIT KAUR ";
// console.log(user_id.toLowerCase());






//trim-trimmStart-trimEnd

// let letter = "    hello this is me      ";
//  console.log(letter.trim());

// let letter_1 = "    hello this is me      ";
// console.log(letter_1.trimStart());
// console.log(letter_1.length);

// let letter_2 = "    hello this is me      ";
// console.log(letter_2.trimEnd());




// array


// let array = [`hello`,1234 , "this is a array"];
// console.log(array);



// let cars_2= [];
// cars_2 [0]= "Saab";
// cars_2 [1]= "Volvo";
// cars_2 [2]= "BMW";
// console.log(cars_2 );
// console.log(cars_2 .length);

// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//     {name:"BMW", models:["320", "X3", "X5"]},
//     {name:"Fiat", models:["500", "Panda"]}
//   ]
// }

// console.log(myObj);
// // console.log(cars);



// let names = new Array("naveen" , "aprajita", "varun" , "vishkha" , "vanshika");
// console.log(names.toString());

// let name = [`dog` , `cat` , `bull`];
// console.log(name);

// let names = new Array("naveen" , "aprajita", "varun" , "vishkha" , "vanshika");
// console.log(names[2]);

// let names = new Array("naveen" , "aprajita", "varun" , "vishkha" , "vanshika");
// console.log(names.join("..2.."));



// function printValue() {
//   console.log("Printing Value");
// }

// // setInterval(printValue, 2000);
// setTimeout(printValue, 2000);

// console.log("Value from outside interval");


// let x = (prompt("enter a number"));
// if(x >= 18){
//   console.log("enter number is 18 or 18+");
// }else {
//   console.log("enter number is under 18");
// }


// let age = prompt("enter age in number")
// let text = (age < 18) ? "Minor" : "Adult";
// console.log(text);

// let day;
// switch (prompt("enter number to know the day name ")) {
//   case "1":
//     day = "Sunday";
//     break;
//   case "2":
//     day = "Monday";
//     break;
//   case "3":
//     day = "Tuesday";
//     break;
//   case "4":
//     day = "Wednesday";
//     break;
//   case "5":
//     day = "Thursday";
//     break;
//   case "6":
//     day = "Friday";
//     break;
//   case "7":
//     day = "Saturday";
//     break;
//   default:
//     day = "enter number 1 to 7"
// }
// console.log(day); 


// let n;

// n = (10 > 19 );
// console.log(n);



// function sayHello(){
//   return  "hello there!" ;
// }
// let massage = sayHello;
// console.log(massage);








// let j =prompt("Enter number which you want to write a table ");

// for(let i=1; i<=10; i++){
//   console.log(`${j} * ${i}  = ${j*i}`);
// }

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`${i} FizzBuzz`)
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   }
//   else if (i % 5 === 0) {
//     console.log("Buzz");
//   }
//   else {
//     console.log(i)
//   }
// }



// let sum =0;
// for (let i = 0; i <= 50; i++) {
//   if (i % 2 ===1) { 
//     sum=sum+i;
//   }
// }
// console.log(`sum of 1 to 50 odd number is ${sum}`);