function randomizer(min, max) {
    return Math.floor(Math.random() * max) + min
}
const LIMIT = 15;


fetch(`https://api.giphy.com/v1/gifs/trending?api_key=QIrDmmXVWDKptBxoJZRjwODaycU7zvq9&rating=pg&limit=${LIMIT}`)
    .then((res) => { return res.json(); })
    .then((obj) => {
        let gifChoiceNumber = randomizer(0, LIMIT);
        const currentURL = window.location.href;
        if (!currentURL.includes('gif')) {
            window.location.href = `${window.location.href}?gif=${gifChoiceNumber}`
        } else {
            gifChoiceNumber = currentURL.split('=')[1];
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