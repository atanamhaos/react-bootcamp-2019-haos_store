/*
Assignment: JavaScript Intermediate
Complete the following challenges. All of your code should be in one HTML file that is well commented to indicate what each block of code is doing and which problem you are solving. Don't forget to test your code as you go!
*/


/*
Part I
Create a function called starString() that takes a number and returns a string of that many *. For example:

let stars = starString(8)
If we console.log(stars) we should see ******** printed in our terminal.
*/

function  starString(numIn){
    let returnString = '';
    for (var i = 0; i < numIn; i++){
        returnString += '*';
    }
    return returnString;
};


/*
Part II
Create a function called drawStars() that takes an array of numbers and prints out *.

let x = [4, 6, 1, 3, 5, 7, 25]
drawStars(x) 

should print the following in when invoked:

****
******
*
***
*****
*******
*************************

drawStars([4, 6, 1, 3, 5, 7, 25])) 
console.log(drawStars([4, 6, 1, 3, 5, 7, 25]));
*/
function  drawStars(arrIn){
    let returnString = '';
    for (var i = 1; i < arrIn.length; i++){
        returnString += `${starString(arrIn[i])}\n`;
    }
    return returnString;
};



/*
Part III
Modify the function above. Allow an array containing integers and strings to be passed to the drawStars() function. When a string is passed, instead of displaying *, display the first letter of the string according to the example below. You may use the .toLowerCase() string method for this part.

For example:

let x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
drawStarsModded(x) 
should print the following in the terminal:

****
ttt
*
mmmmmmm
*****
*******
jjjjjjjjjjj
*/

function  charString(numIn, charIn){
    let returnString = '';
    for (var i = 0; i < numIn; i++){
        returnString += charIn;
    }
    return returnString;
};

function  drawStarsModded(arrIn){
    let returnString = '';
    for (var i = 1; i < arrIn.length; i++){
        if(typeof arrIn[i] === 'number'){
            returnString += `${charString(arrIn[i],'*')}\n`;
        } else if (typeof arrIn[i] === 'string') {
            returnString += `${charString(arrIn[i].length,arrIn[i][0]).toLowerCase()}\n`;
        }
    }
    return returnString;
};