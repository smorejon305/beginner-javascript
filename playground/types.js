/*eslint-disable*/

const name = 'Wes'; 
const middle = "topher"; 
const last = `bos`; 

const sentence = 'she\'s so cool'; 

console.log(sentence); 
// escape a change by using a slash to "ignore" a special character (in this case, the apostrophe in she's)


const sentence1 = "she's so cool"; 
console.log(sentence1); 
// fix this by using double quotes, and it will ignore the single quote

// avoid the problem altogether using back ticks, but you will have to escape the back tick if for some reason you really want to use it in your line


const sentence2 =`she's so cool`; 

console.log(sentence2); 


// not that you would use it often, but you can always have multi-line objects with back ticks, but not with single or double quotes)

const  song = `ooohhh

yeah

i

like

pizza
`; 
console.log(song); 


// but it becomes really useful when it's time to write HTML





// concatenation when two or more strings are combined into one

const hello = "Hello my name is " + name + " Nice to meet you."; 

console.log(hello); 


// interpolation when you put a variable inside of a string

const hello2 = `hello my name is ${name}. Nice to meet you. I am ${1+100} years old.`

console.log(hello2); 




const = html = `
<div>
<h2>
`${name}`
</h2>
<p> `hello`; 
</div>
`; 

console.log(html);