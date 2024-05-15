document.addEventListener("DOMContentLoaded", function () {
  var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  var favoritesList = document.getElementById("favorites-list");
  favorites.forEach(function (productName) {
    var listItem = document.createElement("li");
    listItem.textContent = productName;
    favoritesList.appendChild(listItem);
  });
});
