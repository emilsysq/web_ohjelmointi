function initFilter() {
    const list = document.getElementById('product-list');
    if (!list) return;

    const items = list.querySelectorAll('li');
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
}


function initForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const statusBox = document.getElementById('form-status');
    const fields = form.querySelectorAll('input, textarea');


    form.noValidate = true;


    const messages = {
        name: {
            valueMissing: 'Kirjoita nimesi.'
        },
        email: {
            valueMissing: 'Kirjoita sähköpostiosoitteesi.',
            typeMismatch: 'Sähköpostiosoitteessa pitää olla @-merkki, esimerkiksi nimi@posti.fi.'
        },
        question: {
            valueMissing: 'Kirjoita kysymyksesi.',
            tooShort: 'Kirjoita vähintään 10 merkkiä.'
        }
    };

    function messageFor(field) {
        const rules = messages[field.id];
        for (const key in rules) {
            if (field.validity[key]) {
                return rules[key];
            }
        }
        return '';
    }


    function showError(field) {
        const message = messageFor(field);
        const errorBox = document.getElementById(field.id + '-error');

        errorBox.textContent = message;
        errorBox.hidden = message === '';
        field.setAttribute('aria-invalid', String(message !== ''));

        return message === '';
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        statusBox.textContent = '';

        let firstInvalid = null;

        
        fields.forEach(function (field) {
            const ok = showError(field);
            if (!ok && !firstInvalid) {
                firstInvalid = field;
            }
        });

        if (firstInvalid) {
            firstInvalid.focus();
            return;
        }

        const data = Object.fromEntries(new FormData(form));
        statusBox.textContent = 'Viestisi on valmis, ' + data.name +
            '. Tämä lomake ei vielä lähetä viestiä eteenpäin.';
        form.reset();
    });

    // Kun käyttäjä korjaa kenttää, virhe päivittyy heti
    form.addEventListener('input', function (event) {
        const errorBox = document.getElementById(event.target.id + '-error');
        if (errorBox && !errorBox.hidden) {
            showError(event.target);
        }
    });
}

initFilter();
initForm();