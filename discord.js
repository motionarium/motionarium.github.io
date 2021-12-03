function hide() { ds.style.display='none'; }
async function copydiscord() {
    try {
        await navigator.clipboard.writeText(';w;#7576');
        ds.style.display='block';
        setTimeout(hide, 2000);
    }
    catch (err) {
        console.error('Ошибка: ', err);
    }
}