const cardContainer = document.getElementById("card-container");
console.log(cardContainer);

axios.get("https://lanciweb.github.io/demo/api/pictures/").then((resp) => {
    const cardArray = resp.data;
    let cardString = "";
    cardArray.forEach((curCard, index) => {

        cardString += `
            <div class="col col-sm-12 col-md-6 col-lg-4 mb-5 ">
                <div class="card  position-relative">
                    <div>
                        <img width="10%" class="position-absolute top-0 start-50 translate-middle" src="./img/pin.svg"
                            alt="">
                    </div>
                    <div class="container mt-4 mb-4 px-4">
                        <img src="${cardArray[index].url}" class="card-img-top" alt="...">
                    </div>

                    <div class="card-body">
                        <p class="card-text"><small class="text-body-secondary">${cardArray[index].date}</small></p>
                        <h2 class="card-text font-sometype-mono">${cardArray[index].title}</h2>
                    </div>
                </div>
            </div>`
    });

    cardContainer.innerHTML = cardString;
});