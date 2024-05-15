<<<<<<< Updated upstream

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
=======

let urunList = [], basketList =[];


toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: "toast-bottom-right",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut"
}

const toggleModal =() => {
    const basketModalEl = document.querySelector(".basket__modal");
    basketModalEl.classList.toggle("active");
};



const getUruns = () => {
    fetch("./products.json").then((res) => res.json()).then((uruns) => (urunList =uruns));
};

getUruns();

const createUrunStars = (starRate) =>{
    let starRateHtml = "";
    for(let i=1; i<=5;i++){
        if(Math.round(starRate) >= i) starRateHtml+=`<i class="bi bi-star-fill active"></i> `;
        else starRateHtml += `<i class="bi bi-star-fill active"></i> `;
    }
    return starRateHtml;
};

const createUrunItemsHtml = () => {
    const urunListEl = document.querySelector(".urun__list");
    let urunListHtml = "";
    urunList.forEach((urun, index) => {
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
                ${createUrunStars(urun.starRate)}
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
            <button class="btn__purple" onclick="addUrunToBasket(${urun.id})">SEPETE EKLE</button><br> <br>
          </div>
        </div>
      </div> `;
    });
    urunListEl.innerHTML = urunListHtml;
};

const URUN_TYPES ={
  ALL: "Tümü",
  MAKYAJ: "Makyaj",
  CILTBAKIMI: "Cilt Bakımı",
  SAC: "Saç",
  VUCUTVEBANYO: "Vücut ve Banyo",
  PARFUM: "Parfüm"
}


const createUrunTypesHtml = () =>{
  const filterEl = document.querySelector(".filter");
  let filterHtml = "";
  let filterTypes = ["ALL"];
  urunList.forEach(urun =>{
    if(filterTypes.findIndex((filter) => filter == urun.type)== -1) filterTypes.push(urun.type);
  });
  filterTypes.forEach((type, index) =>{
    filterHtml+= `<li class="${index == 0 ? "active" : null}" onclick="filterUruns(this)" data-type="${type}">${URUN_TYPES[type] || type}</li>`;
  });

  filterEl.innerHTML = filterHtml;
  };

const filterUruns = (filterEl) => {
  document.querySelector(".filter .active").classList.remove("active");
  filterEl.classList.add("active");
  let urunType = filterEl.dataset.type;
  getUruns();
  if(urunType != "ALL") 
    urunList = urunList.filter((urun) => urun.type == urunType);
  createUrunItemsHtml();
};
const listBasketItems = () => {
  localStorage.setItem("basketList",JSON.stringify(basketList));
  const basketListEl = document.querySelector(".basket__list");
  const basketCountEl = document.querySelector(".basket__count");
  basketCountEl.innerHTML=basketList.length > 0 ? basketList.length : null;
  const totalPriceEl = document.querySelector(".total__price");
 
  let basketListHtml ="";
  let totalPrice = 0;
  basketList.forEach(item =>{
    totalPrice += item.product.price * item.quantity;
    basketListHtml += ` <li class="basket__item">
    <img src="${item.product.imgSource}" width="80px" height="80px"/>
    <div class="basket__item-info">
      <h3 class="urun__name">${item.product.name}</h3>
      <span class="urun__price">${item.product.price}$</span><br>
      <span class="urun__remove" onclick="removeItemToBasket(${item.product.id})">remove</span>
    </div>
    <div class="urun__count">
      <span class="decrease" onclick="decreaseItemToBasket(${item.product.id})">-</span>
      <span class="my-4">${item.quantity}</span>
      <span class="increase" onclick="increaseItemToBasket(${item.product.id})">+</span>
    </div>
  </li>`
  });

  basketListEl.innerHTML = basketListHtml ? basketListHtml: `<li class="basket__item">Sepetinizde Ürün Bulunamadı.</li>`; 
  totalPriceEl.innerHTML = totalPrice > 0 ? "Toplam : "+ totalPrice.toFixed(2) + "$" : null;
}

 const addUrunToBasket = (urunId) =>{
  let findedUrun = urunList.find(urun => urun.id == urunId);
  if(findedUrun){
    const basketAlreadyIndex = basketList.findIndex(
      (basket) => basket.product.id == urunId);
    if(basketAlreadyIndex == -1) {
  let addedItem = { quantity: 1, product: findedUrun};
  basketList.push(addedItem); 
} else {
  if(basketList[basketAlreadyIndex].quantity < basketList[basketAlreadyIndex].product.stock)
  basketList[basketAlreadyIndex].quantity +=1;
  else {toastr.error("Üzgünüm, yeterince stoğumuz yok.");
  return;}
}
listBasketItems();
toastr.success("Ürün başarılı bir şekilde sepete eklendi.");
}
};

const removeItemToBasket =(urunId) => {
 const findedIndex = basketList.findIndex(
  (basket) => basket.product.id == urunId
 );
 if(findedIndex != -1){
  basketList.splice(findedIndex, 1);
 }
 listBasketItems();
};
const decreaseItemToBasket =(urunId) =>{
  const findedIndex = basketList.findIndex(
    (basket) => basket.product.id == urunId
   );
   if(findedIndex != -1){
    if(basketList[findedIndex].quantity !=1)
      basketList[findedIndex].quantity -=1;
    else removeItemToBasket(urunId);
    listBasketItems();
   }
};

const increaseItemToBasket =(urunId) =>{
  const findedIndex = basketList.findIndex(
    (basket) => basket.product.id == urunId
   );
   if(findedIndex != -1){
    if(basketList[findedIndex].quantity < basketList[findedIndex].product.stock)
      basketList[findedIndex].quantity +=1;
    else toastr.error("Üzgünüm, yeterince stoğumuz yok.");
    listBasketItems();
   }
};

if(localStorage.getItem("basketList")){
  basketList = JSON.parse(localStorage.getItem("basketList"));
  listBasketItems();
}

setTimeout(() => {
createUrunItemsHtml();
createUrunTypesHtml();
}, 100);


>>>>>>> Stashed changes
