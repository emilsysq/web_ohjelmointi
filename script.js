
const items = document.querySelectorAll('#product-list li');
const statusLine = document.getElementById('status');
const allButton = document.getElementById('filter-all');
const seasonButton = document.getElementById('filter-season');

function showFilter(onlyInSeason) {
    let visible = 0;

    items.forEach(function (item) {
        const hide = onlyInSeason && item.dataset.inSeason === 'false';
        item.hidden = hide;
        if (!hide) {
            visible++;
        }
    });


    allButton.setAttribute('aria-pressed', String(!onlyInSeason));
    seasonButton.setAttribute('aria-pressed', String(onlyInSeason));


    statusLine.textContent = 'Näytetään ' + visible + ' / ' + items.length + ' tuotetta';
}


allButton.addEventListener('click', function () {
    showFilter(false);
});

seasonButton.addEventListener('click', function () {
    showFilter(true);
});


showFilter(false);