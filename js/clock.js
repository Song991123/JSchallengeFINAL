/** crateDate : 2024-02-04
 *  목적 : 실시간 시계 js **/


const clock = document.querySelector("h2#clock");

function getClock() {
    const date    = new Date();
    const hours   = stringBlank(date.getHours());
    const minutes = stringBlank(date.getMinutes());
    const seconds = stringBlank(date.getSeconds());
    
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

function stringBlank(value){
    return String(value).padStart(2, "0");
}

getClock();
setInterval(getClock, 1000);