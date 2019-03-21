function printIntsAndSum0to255() {
    var sum= 0;
    for (var num=0; num <= 255; num++){
        console.log(num, " Sum:", sum);
        sum += num;
    }
}

printIntsAndSum0to255();

/* Line 5, the sum step should be before the console log step on line 4, else the sum displayed is one summation behind. */