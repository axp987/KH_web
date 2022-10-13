const clok = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hour} 시 ${minute} 분`;
}

getClock();
setInterval(getClock, 1000);