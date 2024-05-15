// her klavye girişi olduğunda
// girilen değeri al (büyük harfe çevir)
// listeyi döngüye sok
// listenin değerini, girilen karakterlerle karşılaştır
// eğer eşleşme var ise listenin görünümü açık kalsın
// eşleşme yoksa listeyi sakla

function searchMenu() {
  const searchInput = document.querySelector("input");

  searchInput.addEventListener("keyup", function () {
    let data = this.value.toUpperCase();
    let li = document.querySelectorAll("section div");

    for (let i = 0; i < li.length; i++) {
      console.log(li[i].innerHTML);
      if (li[i].innerHTML.toUpperCase().indexOf(data) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  });
}

searchMenu();

function toggleFavorite(button) {
  var product = button.parentElement;
  var productName = product.querySelector("span").textContent;

  button.classList.toggle("active");
  if (button.classList.contains("active")) {
    button.textContent = "Favoriden Çıkar";
    addToFavorites(productName);
  } else {
    button.textContent = "Favorilere Ekle";
    removeFromFavorites(productName);
  }
}

function addToFavorites(productName) {
  var favoritesList = document.getElementById("favorites-list");
  var listItem = document.createElement("li");
  listItem.textContent = productName;
  favoritesList.appendChild(listItem);
}

function removeFromFavorites(productName) {
  var favoritesList = document.getElementById("favorites-list");
  var items = favoritesList.getElementsByTagName("li");
  for (var i = 0; i < items.length; i++) {
    if (items[i].textContent === productName) {
      favoritesList.removeChild(items[i]);
      break;
    }
  }
}
