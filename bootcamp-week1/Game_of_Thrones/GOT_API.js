var GOThaos = 'https://api.got.show/api/houses/';
var data;

function getStuffFromGOTsAPI(URL, resolve, reject) {
    $.get(`${GOThaos}`, function (res) {
        localStorage.setItem('gameOfThronesHouses', JSON.stringify(res));
        data = getDataFromLocalStorage();
    });
};

function requestDataFromGOTsAPI() {
    console.log('Calling API');

    // Creates Promise
    var data = new Promise(
        function (resolve, reject) {
            getStuffFromGOTsAPI(URL, resolve, reject); // kind of like a shiny callback  
        });
};

function getDataFromLocalStorage() {
    return JSON.parse(localStorage.getItem('gameOfThronesHouses'));
};


function consoleDataLogForDev() {

    for (var i = 0; i < data.length; i++) {
        if (
            (data[i].name === 'House Baratheon') ||
            (data[i].name === 'House Lannister') ||
            (data[i].name === 'House Stark') ||
            (data[i].name === 'House Targaryen')
            
        )
            {
            console.log(data[i]);
            console.log(data[i].title);
            console.log(data[i].words);
            console.log(data[i].overlord);
            console.log(`https://api.got.show${data[i].imageLink}`);
        }  
    }
}


/*
House Lannister
https://api.got.show/api/houses/misc/images/houses/House_Lannister.png
baratheon
lannister
stark
targaryen
*/

if (localStorage.getItem('gameOfThronesHouses') === null) {
    console.log('Retrieving data from GOT API');
    requestDataFromGOTsAPI();
} else {
    console.log('Retrieving data from local storage');
    data = getDataFromLocalStorage();
    consoleDataLogForDev();
};




//console.log(localStorage.getItem('favoriteflavor'));
//localStorage.removeItem('favoriteflavor');
//if(localStorage.getItem('gameOfThronesHouses'))
/*
IMG/baratheon.png
IMG/lannister.jpg https://api.got.show/api/houses/House%20Lannister
IMG/stark.jpg
IMG/targaryen.jpg

baratheon
lannister
stark
targaryen

*/


/*
function requestDataFromGOTsAPI(){
    console.log('running');
    //creates promise
    var data = new Promise(function(resolve,reject){
        getStuffFromGOTsAPI(URL, resolve, reject); // kind of like a shiny callback
    });
    */


/*
// if promise is successful (keeps me from putting all the logic in the callback)

data.then(function(data){
    console.log(data, "ASynchronous");
    for (var i = 0; i < data.length; i ++){
        console.log(data[i].name);
    }
});
data.catch(function(){
    console.log('failure');
})
console.log('end');
}
*/




// requestDataFromGOTsAPI();