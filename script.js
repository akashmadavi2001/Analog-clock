setInterval(() => {
    var [hr,min,sec] = [0,0,0];
    var data = new Date();
    sec = data.getSeconds() * 6;
    min = data.getMinutes() * 6;
    hr = data.getHours() * 30 + Math.round(min / 12);
    document.querySelector('.hour').style.transform = 'rotate(' + hr + 'deg)';
    document.querySelector('.sec').style.transform = 'rotate(' + sec + 'deg)';
    document.querySelector('.min').style.transform = 'rotate(' + min + 'deg)';
    console.log(data);
}, 1000);
