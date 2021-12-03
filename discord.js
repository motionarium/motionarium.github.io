if (navigator.clipboard) {
    async function copydiscord() {
        try {
            await navigator.clipboard.writeText(';w;#7576');
            ds.style.display='block';
            setTimeout("ds.style.display='none'", 2000);
        }
        catch (err) {
            console.error('Ошибка: ', err);
        }
    }
} else {
    ds1.style.display='block';
}

async function copydiscord() {
    try {
        await navigator.clipboard.writeText(';w;#7576');
        ds.style.display='block';
        setTimeout("ds.style.display='none'", 2000);
    }
    catch (err) {
        console.error('Ошибка: ', err);
    }
}