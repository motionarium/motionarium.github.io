async function copydiscord() {
    try {
        await navigator.clipboard.writeText('motionarium');
        ds.style.display='block';
        setTimeout("ds.style.display='none'", 2000);
    }
    catch (err) {
        console.error('Ошибка: ', err);
        alert('motionarium')
    }
}

function calcTime() {
    d = new Date();
    utc = d.getTime() + (d.getTimezoneOffset() * 100000);
    nd = new Date(utc + (3600000*5));
    time.innerHTML = 'UTC+3: ' + nd.toLocaleString()
}
calcTime();
setInterval(calcTime, 1000)