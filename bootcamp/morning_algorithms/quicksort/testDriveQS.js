var test = require('./qs.js');

function testQuickSort(arr_in) {
    console.log(`
test_array       : [${arr_in}]
test(test_array) : [${test(arr_in)}]
`);
}

console.log('Quick Sort test Driver starting!');

testQuickSort([1]);
testQuickSort([1,2]);
