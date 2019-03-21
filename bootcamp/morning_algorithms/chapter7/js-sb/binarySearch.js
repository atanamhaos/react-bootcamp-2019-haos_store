/* This fuction expects a sorted array (R) and a value. It then searches the array for the value using the binary search methodolgy. */
function binarySearch(R, n) {
    
    /* Internal function that accepts array(R), a value being searched for (n), and a low (l) and high (h) index that deliniate the range being searched. */
    function binarySearch(R, n, l, h) {
        /* if the low index of the array is greater, or high index is less, the value being searched for can not be in the array between the ranges being checked. */  
        if (R[l]  > n  || R[h]  < n  ) return false;
        
        /* check low and high values of the range being checked for value being searched for. */
        if (R[l]  === n || R[h] === n) {
            return true;
        } /* If low and high value are the same or adjacent to one another, only one value is being checked and we already know checked if it equals the value being searched for. */
        else if (l === h || (l+1)===h) {
            return false;
        }
        
        /* set a middle (m) of the array*/ 
        let m = (Math.floor((h - l)/2));
        
        /* Check the middle array value. */
        if (R[m] === n) return true;
        
        /* Recursive call */
        if (R[m] > n) return binarySearch(R, n, l, m-1);
        if (R[m] < n) return binarySearch(R, n, m+1, h);
        
    }
    
    /* Call the recursive function. */
    return binarySearch(R, n, 0, R.length-1);
}
/*
*/
if (binarySearch([7,14,21],0)) process.stdout.write('\n---> fail <---\n'); else process.stdout.write('pass');
if (binarySearch([7,14,21],6)) process.stdout.write('\n---> fail <---\n'); else process.stdout.write('pass');
if (binarySearch([7,14,21],7)) process.stdout.write('pass'); else process.stdout.write('\n---> fail <---\n');
if (binarySearch([7,14,21],8)) process.stdout.write('\n---> fail <---\n'); else process.stdout.write('pass');
if (binarySearch([7,14,21],13)) process.stdout.write('\n---> fail <---\n'); else process.stdout.write('pass');
if (binarySearch([7,14,21],14)) process.stdout.write('pass'); else process.stdout.write('\n---> fail <---\n');
if (binarySearch([7,14,21],15)) process.stdout.write('\n---> fail <---\n'); else process.stdout.write('pass');
if (binarySearch([7,14,21],20)) process.stdout.write('\n---> fail <---\n'); else process.stdout.write('pass');
if (binarySearch([7,14,21],21)) process.stdout.write('pass'); else process.stdout.write('\n---> fail <---\n');
if (binarySearch([7,14,21],22)) process.stdout.write('\n---> fail <---\n'); else process.stdout.write('pass');

if (binarySearch([7,14,21,28],0)) process.stdout.write('\n---> fail <---\n'); else process.stdout.write('pass');
if (binarySearch([7,14,21,28],6)) process.stdout.write('\n---> fail <---\n'); else process.stdout.write('pass');
if (binarySearch([7,14,21,28],8)) process.stdout.write('\n---> fail <---\n'); else process.stdout.write('pass');
if (binarySearch([7,14,21,28],13)) process.stdout.write('\n---> fail <---\n'); else process.stdout.write('pass');
if (binarySearch([7,14,21,28],14)) process.stdout.write('pass'); else process.stdout.write('\n---> fail <---\n');
if (binarySearch([7,14,21,28],15)) process.stdout.write('\n---> fail <---\n'); else process.stdout.write('pass');
if (binarySearch([7,14,21,28],21)) process.stdout.write('pass'); else process.stdout.write('\n---> fail <---\n');
if (binarySearch([7,14,21,28],27)) process.stdout.write('\n---> fail <---\n'); else process.stdout.write('pass');
if (binarySearch([7,14,21,28],28)) process.stdout.write('pass'); else process.stdout.write('\n---> fail <---\n');
if (binarySearch([7,14,21,28],29)) process.stdout.write('\n---> fail <---\n'); else process.stdout.write('pass');

if (binarySearch([9,10,11,14,16,18,18,19,20],17)) process.stdout.write('\n---> fail <---\n'); else process.stdout.write('pass');
if (binarySearch([9,10,11,14,16,18,18,19,20],16)) process.stdout.write('pass'); else process.stdout.write('\n---> fail <---\n');
if (binarySearch([9,10,11,14,16,18,18,19,20],15)) process.stdout.write('\n---> fail <---\n'); else process.stdout.write('pass');

if (binarySearch([5,9,10,11,15,16,17,18,19,20],6)) process.stdout.write('\n---> fail <---\n'); else process.stdout.write('pass');
if (binarySearch([5,9,10,11,15,16,17,18,19,20],21)) process.stdout.write('\n---> fail <---\n'); else process.stdout.write('pass');

if (binarySearch([5,9,10,11,15,16,17,18,19,20],0)) process.stdout.write('\n---> fail <---\n'); else process.stdout.write('pass');
if (binarySearch([5,9,10,11,15,16,17,18,19,20],5)) process.stdout.write('pass'); else process.stdout.write('\n---> fail <---\n');
if (binarySearch([5,9,10,11,15,16,17,18,19,20],11)) process.stdout.write('pass'); else process.stdout.write('\n---> fail <---\n');
if (binarySearch([5,9,10,11,15,16,17,18,19,20],20)) process.stdout.write('pass'); else process.stdout.write('\n---> fail <---\n');
if (binarySearch([5,9,10,11,15,16,17,18,19,20],100)) process.stdout.write('\n---> fail <---\n'); else process.stdout.write('pass');

if (binarySearch([5, 9, 10, 11, 15, 16, 17, 18, 19, 20], 4)) process.stdout.write('\n---> fail <---\n'); else process.stdout.write('pass');
/*
*/

process.stdout.write('\nCompleted testing\n');
