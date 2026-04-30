function updateClock(selector, timeZone) {
    const now = new Date();
    const time = new Date(now.toLocaleString("en-US", {timeZone: timeZone}));
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    const clock = document.querySelector(selector);
    clock.querySelector('.second').style.transform = `rotate(${seconds * 6}deg)`;
    clock.querySelector('.minute').style.transform = `rotate(${minutes * 6 + seconds * 0.1}deg)`;
    clock.querySelector('.hour').style.transform = `rotate(${(hours % 12) * 30 + minutes * 0.5}deg)`;
}

function refresh() {
    updateClock('#berlin', 'Europe/Berlin');
    updateClock('#nyc', 'America/New_York');
}

setInterval(refresh, 1000);
refresh();