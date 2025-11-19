const cardContainer = document.querySelector("#card-container");



axios.get("https://lanciweb.github.io/demo/api/pictures/").then((resp) => {
    const cardArray = resp.data;
    let cardString = "";
    cardArray.forEach((curCard, index) => {

        cardString += `
            <div class="card-rotate col col-sm-12 col-md-6 col-lg-4 mb-5">
                <div class="card position-relative" data-img="${curCard.url}">
                    <div>
                        <img width="10%" class="red-pin position-absolute top-0 start-50 translate-middle" src="./img/pin.svg"
                            alt="">
                    </div>
                    <div class="container mt-4 mb-4 px-4">
                        <img src="${curCard.url}" class="card-img-top" alt="...">
                    </div>

                    <div class="card-body">
                        <p class="card-text"><small class="text-body-secondary">${curCard.date}</small></p>
                        <h2 class="card-text font-sometype-mono">${curCard.title}</h2>
                    </div>
                </div>
            </div>`
    });

    cardContainer.innerHTML = cardString;

    const cards = document.querySelectorAll(".card");
    const overlay = document.querySelector("#overlay-elem");
    const imageInOverlay = document.querySelector("#img-overlay");
    const button = document.querySelector("#button-close");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            imageInOverlay.src = card.dataset.img;
            overlay.classList.remove("d-none");
        });
    });


    button.addEventListener("click", () => {
        overlay.classList.add("d-none");
    });


    // facendo in questo modo scompare tutto l'overlay ma anche cliccando sull'immagine
    // overlay.addEventListener("click", function () {
    //     overlay.classList.add("d-none");
    // });
});



