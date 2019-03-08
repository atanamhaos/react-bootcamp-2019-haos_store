/*
Assignment: JavaScript Basics II
In this assignment, complete the function magic_multiply and ensure it passes all the test inputs and matches their results. Modify magic_multiply until all the tests pass. Do not create a new magic_multiply for each test!

function magic_multiply(x, y){
    // --- your code here ---
    return x;
}
*/

function magic_multiply(x, y){
    // --- your code here ---
      
    if ((typeof x === 'number')&&(typeof y === 'number')){
        console.log('two numbers recieved');
        x = x * y;
    }
    //console.log(`${typeof x}, ${typeof y}`);
    var text = '';
    switch (`${typeof x}, ${typeof y}`) {
        case ('number, number'):
          //console.log('in case 1');
          text = `${x} times ${y} = ${x*y}`;
          if (x ===0 && y === 0 ) {
            text += ' <- Both value passed in were zero!!';
          };
          break;
        case ('object, number'):
          text = [];
          for (var i = 0; i < x.length; i++){
              text.push(x[i]*y);
          };
          text = `The magic_multiply function processed parameter '${x}' and parameter '${y}' into '${text}'`
          break;       
        case ('number, string'):
          text = `Error: Can not multiply number ${x} by string ${y}`;
          break;
          
        case ('string, number'):
          text = ``;
          for (var i = 0; i < y; i++){
            text += x;  
          };
          break;

        default:
          text = `Unable to proccess combination of (${x}, ${y}) which respectively are ${typeof x} and ${typeof y} types`;
      };

    return text;
}
/* Test 1
In order to make this test pass, we will need to add logic to magic_multiply. Whenever we call magic_multiply for 5 and 2, the returned result should always be 10. Remember, we must use these specific inputs!
let test1 = magic_multiply(5, 2);
console.log(test1);
// => 10 */
let test1 = magic_multiply(5, 2);
console.log(test1);

/*   Test 2
let test2 = magic_multiply(0, 0);
console.log(test2);
// => "All inputs 0" */
let test2 = magic_multiply(0, 0);
console.log(test2);

/*   Test 3
let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);
// => [2, 4, 6]
Hint: You will need to handle your output differently depending on if x is an array or an integer. */
let test3 = magic_multiply([1, 2, 3], 2);
console.log(test3);

/*   Test 4
let test4 = magic_multiply(7, "three");
console.log(test4);
// => "Error: Can not multiply by string" */
let test4 = magic_multiply(7, "three");
console.log(test4);

/*  Test 5 - Bonus
let test5 = magic_multiply("Brendo", 4);
console.log(test5);
// => "BrendoBrendoBrendoBrendo"
How could we check if an array is an array? */
let test5 = magic_multiply("Brendo", 4);
console.log(test5);
