var now = moment();
var hours = document.getElementById('TOD');

document.getElementById('currentDay').innerHTML = now;

function setTime(){
    hours = moment().set('hour', 9);
};

console.log(setTime);

