function randomizer(min, max) {
    return Math.floor(Math.random() * max) + min
}
const LIMIT = 15;


fetch(`https://api.giphy.com/v1/gifs/trending?api_key=QIrDmmXVWDKptBxoJZRjwODaycU7zvq9&rating=pg&limit=${LIMIT}`)
    .then((res) => { return res.json(); })
    .then((obj) => {
        let gifChoiceNumber = randomizer(0, LIMIT); /* pourquoi on utilise let ? */
        let gifID = obj.data[gifChoiceNumber].id /*On vient récupérer et isoler dans une variable l'ID du gif */
        const currentURL = window.location.href; /* On vient récupérer l'URL tel qu'affiché sur mon navigateur */
        if (!currentURL.includes('gif')) {   
            window.location.href = `${window.location.href}?gif=${gifID}`  /* Si l'URL ne contient PAS le mot gif alors on vient lui ajouter le parametre en indiquant la valeur qu'il doit prendre, ici l'ID*/
        } else {
            gifID = currentURL.split('=')[1];  /* Si l'URL contient le mot gif, alors on indique quel parametre il doit prendre */
        }
        console.log(obj);
        const URL_gif = obj.data[gifChoiceNumber].images.original.mp4;
        document.getElementById("gif")
            .innerHTML = `<video autoplay loop width="250">
    <source
        id="my-video-url"
        src = ${URL_gif}
        type="video/mp4"
    />

    Sorry, your browser doesn't support embedded videos.
    </video>
      `;

    })
