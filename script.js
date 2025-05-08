const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

setInterval(() => {
    let [hrs, mins, secs] = [0, 0, 0];
    let currentTime = new Date();

    secs = currentTime.getSeconds() * 6;
    mins = currentTime.getMinutes() * 6;
    hrs = (currentTime.getHours() * 30) + Math.round(mins / 12);

    hours.style.transform = "rotate(" + hrs + "deg)";
    minutes.style.transform = "rotate(" + mins + "deg)";
    seconds.style.transform = "rotate(" + secs + "deg)";
}, 1000);
