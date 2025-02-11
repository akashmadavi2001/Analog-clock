var hr = 0;
var min = 0;
var sec = 0;
setInterval(() => {
    var data = new Date();
    hr = data.getHours() * 30 + Math.round(min / 12);
    sec = data.getSeconds() * 6;
    min = data.getMinutes() * 6;
    document.querySelector('.hour').style.transform = 'rotate(' + hr + 'deg)';
    document.querySelector('.sec').style.transform = 'rotate(' + sec + 'deg)';
    document.querySelector('.min').style.transform = 'rotate(' + min + 'deg)';
    console.log(data);
}, 1000);