# AI käyttö
## Käytin tehtävissä Claudea "study mode" -promptilla.
- Pieni osa promptin alusta:
    - Study mode instructions: 
    I'm studying to become a Bachelor of Engineering in Information Technology and want you to act as a tutor, not a solution generator. Please follow these rules in our conversations ...

# E1
- Q: Tiivistä E1 tehtävän sisältö dioista.
    - A: Tiedostot nimetty täsmälleen index.html, about.    html, listing.html, contact.html, sama header, nav ja footer jokaisella sivulla, oma title ja yksi oma h1 jokaisella sivulla, Alt-teksti jokaisessa kuvassa, jos kuvia on & Ei validaattorivirheitä
- Q: Ohita study mode. Tehdään asiakkaalle logo toimeksiannon perusteella, instructions kansiosta. Ota referenssejä muilta tilapuodeilta
    - A: Haen ensin referenssejä tilapuotien ja maatilojen logoista, ja suunnittelen sitten uuden version Satama-väreillä
    - Muutin: Ensimmäinen logo oli viallinen. Pyysin hiomaan paria pientä asiaa ja toinen logo tuli hyvänä ilman virheitä

# E2
-Q: Koko viikko kipeänä, kertaa mitä viikon aikana on tehty luennoilla.

- Q: Sivun Logo näkyy liian tummana tummassa tilassa. Miten saadaan logo valkoisella taustalla.
    - A: AI ehdotti CSS kautta tehtävää ratkaisua, missä lisätään token root:tiin ja sen jälkeen header img sääntöä. 
    - Muutin: Aloin tutkimaan AI ehdottamaa ratkaisua ja otin sen käyttöön.

- Q: Haluan hienosäätää linkkejä enemmän yhteen.
    - A AI ehdotti pystyvälin pienentämistä css.
    - Muutin: Etsin oikean kohdan mistä muuttaa väliä ja kokeilin itse mikä on omaan silmään hyvä.

- Q: Käy läpi tekemäni moodboard. Mitä lisättävää ja korjattavaa.
    - A: Linkit eivät näy oikein, "värit" osio taulukkona, eikä listana. Sekä muita pieniä kirjoitusvirheitä
    - Muutin: Korjasin linkit ja tein värit osion taulukoksi, sekä korjasin kirjoitusvirheet.

# E3
- Q: Tiivistä E3 tehtävän vaatimukset luentomateriaaleista (Luento 5 ja 6, js-base-zipit).
    - A: Yksi JS-tiedosto defer-attribuutilla, ei kirjastoja eikä onclick-attribuutteja, suodatin ja tilarivi, lomake jossa virheiden tarkistus, aria-describedby ja role="status" -viesti, luonnos localStorageen, yksi popover ja kaiken pitää toimia näppäimistöllä.
    - Muutin: Käytin tätä omana tarkistuslistanani.

- Q: Miten tuotelista rakennetaan, että sesonkisuodatin onnistuu?
    - A: Tuotteille data-attribuutti, painikkeille aria-pressed ja tilarivi role="status". AI kysyi, kumpi arvo toimii paremmin: data-season="now" vai data-in-season="true/false".
    - Muutin: Kirjoitin tuotelistan itse ja valitsin yksinkertaisemman data-in-season="true/false", koska se riittää nyt eikä vaadi päivämäärälogiikkaa.

- Q: Kopioin painikkeet ja tilarivin jokaisen tuotteen sisään.
    - A: AI huomautti, että id saa olla sivulla vain kerran. Painikkeet ja tilarivi kuuluvat listan yläpuolelle. Lisäksi li-tageja ei oltu suljettu ja data-attribuutit olivat vanhassa muodossa.
    - Muutin: Siirsin painikkeet ja tilarivin listan ulkopuolelle ja korjasin li-tagit ja otsikkojärjestyksen h1 -> h2 -> h3

- Q: Konsolissa tuli virhe "Cannot read properties of null" contact-sivulla.
    - A: Koska suodatin ja lomake olivat samassa script.js:ssä, suodattimen koodi yritti hakea painikkeita, joita contact.html:ssä ei ole, ja koodi kaatui. Korjaus: kääri molemmat funktioihin (initFilter ja initForm), jotka lopettavat heti, jos elementtiä ei löydy.
    - Muutin: Minulta puuttui tarvittavat osat script.js jotka lisäsin sinne

- Q: auta popoverissa aukioloajoille.
    - A: AI antoi popover-koodin (popovertarget, popover ja ::backdrop). Aukioloajat on keksitty, koska oikeita aikoja ei ole, mutta kesä ja talvi ovat eri kuten Aili toivoi.
    - Muutin: Lisäsin popoverin contact.html:ään ja testasin avaamisen, Esc-näppäimen ja kohdistuksen palautumisen.


