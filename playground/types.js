// /*eslint-disable*/

// const name = 'Wes'; 
// const middle = "topher"; 
// const last = `bos`; 

// const sentence = 'she\'s so cool'; 

// console.log(sentence); 
// // escape a change by using a slash to "ignore" a special character (in this case, the apostrophe in she's)


// const sentence1 = "she's so cool"; 
// console.log(sentence1); 
// // fix this by using double quotes, and it will ignore the single quote

// // avoid the problem altogether using back ticks, but you will have to escape the back tick if for some reason you really want to use it in your line


// const sentence2 =`she's so cool`; 

// console.log(sentence2); 


// // not that you would use it often, but you can always have multi-line objects with back ticks, but not with single or double quotes)

// const  song = `ooohhh

// yeah

// i

// like

// pizza
// `; 
// console.log(song); 


// // but it becomes really useful when it's time to write HTML





// // concatenation when two or more strings are combined into one

// const hello = "Hello my name is " + name + " Nice to meet you."; 

// console.log(hello); 


// // interpolation when you put a variable inside of a string

// const hello2 = `hello my name is ${name}. Nice to meet you. I am ${1+100} years old.`

// console.log(hello2); 




// // const html = `
// // <div>
// // <h2>
// // `${name}`
// // </h2>
// // <p> `hello`; 
// // </div>
// // `; 

// console.log(html);


// const newTricks = `this is pretty cool, I can't wait to learn more!`;
 
// console.log(newTricks); 



// // NUMBERS

// const age = 100; 
// const name = `Wes`; 

// // typeof in the console to figure out what type of object something is can be useful, if you need to check

// // integer is a whole number
// // float is a decimal

// // the plus side ia loaded - can be used to add integers and floats, but if you use it with a string it concatenates... messy if you didn't mean to! 

// // helper methods -- Math. ...
// // e.g. Math.round(20.5)
// // Math.floor(20.5)
// //  Math.ceil(20.5)

// const smarties = 20; 
// const kids = 3; 

// const eachKidGets = Math.floor(smarties / kids); 
// console.log(`Each kid gets ${eachKidGets}`); 

// // leftover smarties  - modulo

// console.log(smarties % kids); 

// // to the power of 
// // 10**2 -> 10 to the power of 2

// // NaN - not a number
// // typeof 10 / 'dog' -- NaN


// // Objects

// // objects - used for groups of things
// // when sth is an object, it's because we want to group things together

// const person = { 
//   first: 'wes', 
//   last: 'bos', 
//   age: 100
// }; 

// // to access this in the console, 
// // person.first
// // person.last
// // person.age


// // Null and Undefined
// // two ways to express nothing in JS


// // UNDEFINED - when you try to access a variable that's been created, but not set 
// let dog; 
// console.log(dog); 

// // if the variable is truly random, and hasn't been created (like above), you'll just get an error message

// // NULL
// // a value of nothing, vs a variable that hasn't been defined

// let somethingUndefined; 
// let somethingNull = null; 


// Booleans and Equality

// boolean - true or false, on or off
// used for logic, e.g. if statements

let isDrawing = false; 
const age = 18; 
const ofAge = age > 19; 
console.log (ofAge); 



// Equality
//  = -- to set a variable
// == --> almost always a bad practice - checks only for the value 
// === --> use this one instead - checks for value and type

age === 100; 
age === 10; 