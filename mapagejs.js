<script>
    fetch ("https://api.giphy.com/v1/gifs/random?api_key=QIrDmmXVWDKptBxoJZRjwODaycU7zvq9&tag=&rating=g")
    .then((res) => res.json())
    .then((obj)=>
        const URL_gif = listObj.obj.data.images.original.mp4;
        document.getElementById(gif).innerHTML= <video autoplay width="250">
        <source
            id="my-video-url"
            src = ${URL_gif}
            type="video/mp4"
        />


        Sorry, your browser doesn't support embedded videos.
        </video>



        )

</script>


