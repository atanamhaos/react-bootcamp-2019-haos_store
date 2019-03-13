

function tickingClockVanillaJS(){
    
    document.getElementById('app').innerHTML = `<p>The current time is: <span id="time"></span></p>
    <button id="time-btn">Get current time</button>`;

    document.getElementById('time-btn').onclick = () => {
    document.getElementById('time').innerHTML = new Date().toString();
    }
}