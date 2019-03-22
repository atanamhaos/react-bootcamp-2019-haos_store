Recursive Sigma

Write a recursive function that given a number returns sum of integers from 1 to that number. Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

Recursive Factorial

Given num , return the product of ints from 1 up to num . If less than zero, treat as zero. If not integer, truncate. Experts tell us 0! is 1 . rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).

Flood Fill

Most graphical “paint” applications, have a ‘paintcan fill’ function that floods part of an image with a certain color. We change the image as if we painted a canvas: a two-dimensional array of integers, where each integer represents a color for that pixel. The canvas Array.length is the Y dimension of our canvas; each spot in the canvas array is a row in our image, with a length equal to our canvas’ X dimension. You are given a canvas (2 dimensional array of integers), starting coordinate (2-element array), and the color to flood (integer value). Build floodFill(canvas2D,startXY,newColor) ! Replace a pixel’s color value only if it is the same color as the origin coordinate and is directly adjacent via X or Y to another pixel you will change. Note: diagonally related pixels are not considered adjacent . Given canvas2D of [[3,2,3,4,3],

[2,3,3,4,0] , [7,3, 3 ,5,3] , [6,5,3,4,1] , [1,2,3,3,3] ]

…plus startXY of [2,2] and newColor of 1 .. . … we examine the cells that are directly (not diagonally) adjacent to startXY , which is [2,2] . If any have a value of 3 (the original value at startXY ), we change its value to 1 ( newColor ) and repeat the process with its directly-adjacent neighbor cells. We repeat this until th e entire zone of similarly-colored cells is changed .

Our canvas2D becomes: [[3,2, 1 ,4,3], [2, 1 , 1 ,4,0], [7, 1 , 1 ,5,3], [6,5, 1 ,4,1], [1,2, 1 , 1 , 1 ] ]




## Recursive Fibonacci

Write `rFib(num)`.

Recursively compute and return num th Fibonacci value. As earlier, treat first two (num = 0, num = 1) Fibonacci vals as 0 and 1. 

Examples: 

rFib(2) => 1 (0+1);
rFib(3) = 2 (1+1);
rFib(4) = 3 (1+2);
rFib(5) = 5 (2+3).
rFib(3.65) = rFib(3) = 2
rFib(-2) = rFib(0) =0


### Durga's Solution!
```
rFib(n){
    n= Math.floor(n);
    if (n <= 0) return 0;
    else if (n = 1) return 1;
    else return ( rFib(n-2) + rFib(n-1) );
}
```

## Recursive “Tribonacci”

Write function rTrib(num) to mimic Fibonacci, adding previous three values instead of two . First three Tribonacci numbers are 0, 0, 1, so 

rTrib(3) = 1 (0+0+1);
rTrib(4) = 2 (0+1+1);
rTrib(5) = 4 (1+1+2);
rTrib(6) = 7 (1+2+4). 

Handle negatives and non-integers appropriately and inexpensively.

rTrib(n){
    n= Math.floor(n);
    if (n <= 0) return 0;
    else if (n <= 0) return 0;
    else if (n = 1) return 0;
    else if (n = 2) return 1;
    else return ( rTrib(n-3) + rTrib(n-2) + rTrib(n-1) );
}


Paging Dr. Ackermann

The Ackermann function is among the earliest examples of a computable but not primitive-recursive function. It grows rapidly, and hence can overflow the JavaScript stack frame even at very low values. This function accepts two non-negative integer values, num1 and num2 , and follows these rules:

1) ackermann(0,num2) == num2+1 ;

2) ackermann(num1,0) == ackermann(num1-1,1) if num1 > 0 (otherwise see #1);

3) ackermann(num1,num2) == ackermann(num1-1,ackermann(num1,num2-1)).

Don’t be dismayed if a num1 value as low as 4 “blows your stack”. That’s the nature of this function!

Zibonacci

This function borrows ideas from the Fibonacci series, but the calculated results appear to zig and zag, hence the name. A so-called ‘Zibonacci’ series would be defined by the following rules:

1) Zib(0) == 1 ;

2) Zib(1) == 1 ;

3) Zib(2) == 2 ;
4) Zib(2n+1) == Zib(n)+Zib(n-1)+1 , if n > 0 (i.e. odd values 3 and higher) ; 5) Zib(2n) == Zib(n)+Zib(n+1)+1 , if n > 1 (i.e. even values 4 and higher) .

Create the Zibonacci(num) function. What is Zibonacci(10) ? Zibonacci(100) ?

Second: For a given number that might be a Zibonacci result, find the largest index that maps to that result. bestZibNum(3186) == 2467 , bestZibNum(3183) == null .
