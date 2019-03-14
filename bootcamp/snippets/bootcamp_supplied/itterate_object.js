for(key in users){
    
    for(var x=0; x<users[key].length; x++){
        let first_name = users[key][x].first_name.toUpperCase();
        let last_name = users[key][x].last_name.toUpperCase();
        let totalLetterCount = first_name.length + last_name.length;
        console.log(`${x+1} - ${first_name}, ${last_name} - ${totalLetterCount} `)
    }
    console.log(users[key]);   
}