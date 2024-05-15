function addToFavorites(productName) {
  var favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favorites.includes(productName)) {
    favorites.push(productName);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
}
