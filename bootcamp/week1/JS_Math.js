/*
Assignment: JavaScript Math
Complete the below challenges using JavaScript's Math object.
*/
/*  Math 1
Write a function called zero_negativity(). This function should take an array. Return true if the input array contains no negative numbers, return false if it does. */
function zero_negativity(arrIn){
    let returnBool = true;
    for (var i = 0; i < arrIn.length; i ++){
       if (arrIn[i] < 0) { returnBool = false};
    }
    return returnBool;
};

/*  Math 2
Write a function called is_even(). This function should take a number. Return true if the input number is even, return false if the number is odd. */
function is_even(numberIn){
    let returnBool = true;    
    if (numberIn % 2 === 0 ) {returnBool = true;} else {returnBool = false;};
    return returnBool;
};

/*  Math 3
Write a function called how_many_even(). This function should take an array. Return the total number of elements in the array that are even. You may call is_even() to solve this. */
function how_many_even(arrIn){
    let returnNumber = 0;
    for (var i = 0; i < arrIn.length; i ++) {
      if (is_even(arrIn[i])) {returnNumber ++;};
     };
     return returnNumber; 
};

/*  Math 4
Write a function called create_dummy_array(). This function should take a number n. Return an array of random numbers between 0 and 9 with the length of n.
*/
function create_dummy_array(numberIn){
    let dummyArray = [];

    for (var i = 0; i < numberIn; i++) {
        dummyArray.push(Math.floor(Math.random() * 10));
    }
    
    return dummyArray;
};

/*  Math 5
Write a function called random_choice(). This function should take an array. Return a random element of the array, based on its length. This function should never return undefined. */
function random_choice(arrIn){
   let choice = Math.floor(Math.random() * arrIn.length);
   return arrIn[choice];
};
