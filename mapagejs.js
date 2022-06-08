const LIMIT = 15;
const API_KEY = 'QIrDmmXVWDKptBxoJZRjwODaycU7zvq9'


function randomizer(min, max) {
    return Math.floor(Math.random() * max) + min
}

function getOneFromGiphy(gifID) {
    return fetch(`https://api.giphy.com/v1/gifs/${gifID}?api_key=${API_KEY}`)
        .then(res => res.json())
}


// 1- extraire le gif id, 2- le coller a notre url, 3- indiquer a mon site quelle image correspond a l'id dans la liste qu'il peut lire ~ quand la liste trending change, le find ne va pas trouver le ID c'est pourquoi on lui indique le match id/image a parttir de l,api giphy //
fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&rating=pg&limit=${LIMIT}`)
    .then((res) => { return res.json(); })
    .then(async (obj) => {
        let gifChoiceNumber = randomizer(0, LIMIT); /* pourquoi on utilise let ? */
        let gifID = obj.data[gifChoiceNumber].id /*On vient récupérer et isoler dans une variable l'ID du gif */
        const currentURL = window.location.href; /* On vient récupérer l'URL tel qu'affiché sur mon navigateur */
        if (!currentURL.includes('gif')) {
            window.location.href = `${window.location.href}?gif=${gifID}`  /* Si l'URL ne contient PAS le mot gif alors on vient lui ajouter le parametre en indiquant la valeur qu'il doit prendre, ici l'ID*/
        } else {
            gifID = currentURL.split('=')[1];  /* Si l'URL contient le mot gif, alors on indique quel parametre il doit prendre */

            const gif = await getOneFromGiphy(gifID);
            const URL_gif = gif.data.images.original.mp4;

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
        }


    })
