const cardContainer = document.getElementById("card-container");



axios.get("https://lanciweb.github.io/demo/api/pictures/").then((resp) => {
    const cardArray = resp.data;
    let cardString = "";
    cardArray.forEach((curCard, index) => {

        cardString += `
            <div class="card-rotate col col-sm-12 col-md-6 col-lg-4 mb-5 ">
                <div id="cardElem" class="card  position-relative">
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

    const card = document.querySelectorAll(".card");
    console.log(card);
    const overlay = document.getElementById("overlay-elem");

    card.forEach(card => {

        card.addEventListener("click", function () {
            overlay.classList.remove("d-none");
        });
    });



});

