async function copydiscord() {
        try {
            await navigator.clipboard.writeText(';w;#7576');
            ds.style.display='block';
            setTimeout("ds.style.display='none'", 2000);
            ds1.style.display='block';
            setTimeout("ds1.style.display='none'", 2000);
        }
        catch (err) {
            console.error('Ошибка: ', err);
        }
}