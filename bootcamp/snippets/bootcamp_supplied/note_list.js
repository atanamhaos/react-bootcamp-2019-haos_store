<script>

    var str = "asdf";
    var num = 123;

    var arr = [1, "two", true, false, 3];
    console.log(arr[0]);

    var obj = { y: 123, 'z': 'Z' };
    obj['x'] = 1;
    console.log(obj);

    var arr1 = [[1, 2, 3], [2, 3, 4], function () { }, 123, "asdf", { x: 1 }, { y: 2 }];
    console.log(arr1);

    var obj = { 
        x: 123, 
        zx: "123", 
        stuff: function (a) { }, 
        y: [1, 2, 3], 
        z: { x: 123, y: 234, z: { x: 2345, y: 2345 } } 
    };
    console.log(obj);
    console.log(obj.stuff);
    // obj.stuff(5);

    var booltrue = true;
    var boolfalse = false;

    if (true) {

    } else if (true) {

    } else if (true) {

    } else {

    }

    for( let idx = 0; idx < 10; idx +=1 ) {
        console.log(idx);
    }
    // console.log(idx);

    var obj2 = {x: 1, y : 2, z: 3}
    for( key in obj2){
        console.log( key );
        console.log( obj2[key] );
    }

    var arr4 = [11,22,33,44,55];
    arr4.map( function(val, idx){ console.log(val, idx+1); });

    firstClassFun();
    function firstClassFun() {

    }

    const myFunction = function(){

    }

    const myObject5 = { x:5 };
    myObject5.y = 10;
    delete myObject5.x
    console.log("DELTED X:", myObject5);

    (function (){

    })();

    // function Node(){
    //     this.x = 10;
    //     this.y = 20;
    //     this.asdf = function(){ console.log("test"); }
    // }

    class Node {
        constructor(){
            
        }

        addNote = () => {
            this
        }

        removeNote = () => {
            this
        }

        updateNote = () => {
            this
        }
    }

    let instance1 = new Node(123);
    instance1.asdf();

</script>