function qs(arr) {

    function qsr(arr,p,l,r){
    
        
    }
    
    if (arr === undefined) {
        console.log('qs() recieved nothing');
        return;
    }
    if (arr.length === 1) {
        return arr;
    }
    return qsr(arr,(arr.length-1),0,1);
}

module.exports = qs;
