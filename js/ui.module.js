export default class ui {
    abbrLetter (sentence, charsLimit = 11) {
      return sentence ? sentence.length > charsLimit ? sentence.substr(0, charsLimit-3 ) + '...' : sentence : null;
    }
    async showCards(data) {
        let container = '';
        for (let i = 0; i < data.length; i++) {
            container += `<div class="gamee col-xl-3 col-lg-4 col-md-6  p-2  " style="padding-right: 12px;padding-left: 12px;" game-id="${data[i].id}">
              <div class="content  card game h-100 w-100">
                <div class="image w-100 h-100">
                  <img class="w-100 object-fit-cover h-100 object-fit-cover card-img-top" src="${data[i].thumbnail}" alt="tarisland">

                </div>
                <div class="details">
                  <div class="price-name  d-flex justify-content-between align-items-center">
                    <p class="name">${data[i].title}</p>
                    <p class="price  badge p-2">Free</p>
                  </div>
                  <p class="card-text text-center  small  opacity-50">
                  ${data[i].short_description?data[i].short_description.length > 53 ? data[i].short_description.substr(0, 50 ) + '...' : data[i].short_description : null}</p>
                  <div class="cat-platform d-flex justify-content-between align-items-center small">
                    <p class=" cat mb-0 badge badge-color">${data[i].genre}</p>
                    <p class=" plat mb-0 badge badge-color">${data[i].platform}</p>
                  </div>
                </div>
              </div>
            </div>`;
        }
       $('#gameContainer').html(container);
    }
    async showgameDetail(data) {
        let gameDetails = '';
        gameDetails += `<div class="container">
          <div class="details-header row justify-content-between ">
            <div class="col-md-6 title">
              <h2>Details Game </h2>
            </div>
            <button class="col-md-1 close  ms-0 btn-close btn-close-white" id="closeBtn"></button>
          </div>
          <div class="row">
            <div class="col-md-4 game-image">
             <img class=" w-100" src="${data.thumbnail}" alt="">
            </div>
            <div class="col-md-8 game-details">
              <h3 class="game-name">Title: <span>${data.title}</span></h3>
              <p class="cat">Category: <span class="badge">${data.genre}</span></p>
              <p class="cat">Platform: <span class="badge">${data.platform}</span></p>
              <p class="cat">Status: <span class="badge">Live</span></p>
              <p class="desc">${data.description}
            </p>
              <a class="show-mar-btn btn  btn-outline-warning" href="#">
                Show Game
              </a>
            </div>
          </div>
        </div>`;
       $('#detailsSec').html(gameDetails);
    }

}