var _ = {
    map: function () {
        //code here;
    },
    reduce: function () {
        // code here;
    },
    find: function () {
        // code here;
    },
    filter: function (arr, callback) {
        // loop through the array
            var newArr = [];
            for(x=0; x<arr.length; x++){
                // call the callback and pass it each element from the array
                // we will get back a true or false value from user
                // if true, keep eleemnt in array, 
                if(callback(arr[x])){
                    newArr.push(arr[x])
                } 
                // if false, remove from arary
            }
            // return the new array
            return newArr;
    },
    reject: function () {
        // code here;
    }
}
var evens = _.filter([{completed: true}, {completed: false}], function(task){ return task.completed });
console.log(evens);