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
