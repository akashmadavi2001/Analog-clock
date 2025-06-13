// analog clock
let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

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

// digital clock
let hrs = document.querySelector('.hrs');
let mins = document.querySelector('.mins');
let secs = document.querySelector('.secs');
let am = document.querySelector('.am');

setInterval(() => {
    let currentTime = new Date();
    let h = currentTime.getHours();
    let m = currentTime.getMinutes();
    let s = currentTime.getSeconds();

    h >= 12 ? am.innerHTML = 'PM' : am.innerHTML = 'AM';
    h = h % 12;

    hrs.innerHTML = h < 10 ? '0' + h : h;
    mins.innerHTML = m < 10 ? '0' + m : m;
    secs.innerHTML = s < 10 ? '0' + s : s;
}, 1000);