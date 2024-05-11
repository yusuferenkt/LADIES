
let urunList = [];
const toggleModal =() => {
    const basketModalEl = document.querySelector(".basket__modal");
    basketModalEl.classList.toggle("active");
};

const getUruns = () => {
    fetch("./products.json").then((res) => res.json()).then((uruns) => (urunList = uruns));
};
getUruns();

const createUrunStars = (starRate) =>{
    let starRateHtml = "";
    for(let i=1; i<=5;i++){
        if(Math.raund(starRate) >= i) starRateHtml+=`<i class="bi bi-star-fill active"></i> `;
        else starRateHtml += `<i class="bi bi-star-fill active"></i> `;
    }
    return starRateHtml;
};

const createUrunItemsHtml = () => {
    const bookListEl = document.querySelector(".urun__list");
    let urunListHtml = "";
    urunList.forEach(urun, index => {
        urunListHtml += ` <div class="col-5 ${index % 2 == 0 && "offset-2"}">
        <div class="row urun__cart">
          <div class="col-6">
            <img class="img-fluid shadow" src="${urun.imgSource}"
              width="258" height="400" />
          </div>
          <div class="col-6 d-flex flex-column justify-content-between">
            <div class="urun__detail">
              <span class="fos gray fs-5">${urun.author}</span><br />
              <span class="fs-4 fw-bold">${urun.name}</span><br />
              <span class="urun__star-rate">
                ${createUrunStars(book.starRate)}
                <span class="gray">${urun.reviewCount}</span>
              </span>
            </div>
            <p class="urun__description fos gray">
            ${urun.description}
            </p>
            <div>
              <span class="black fw-bold fs-4 me-2">${urun.price}$</span>
              ${urun.oldPrice ? `<span class="fs-4 fw-bold old__price">${urun.oldprice}$</span>` :""}
            </div>
            <br />
            <button class="btn__purple">SEPETE EKLE</button><br> <br>
          </div>
        </div>
      </div> `;
    });
    bookListEl.innerHTML = bookListHtml;
};
setTimeout(() => {
    createUrunItemsHtml();
}, 100);