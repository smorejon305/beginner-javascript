// functions are created/defined and called

// defining the function
function calculateBill() {
  // this is the function body
  // anything inside these brackets is part of the function
console.log('Running Calculate Bill!'); 

const total = 100 * 1.13; 
console.log(Math.ceil(total)); 
return total; 
}



// running the function
calculateBill();



// scope
// variables called inside a function are not available outside the function
// fix this problem with a RETURN
