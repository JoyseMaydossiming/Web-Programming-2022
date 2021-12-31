let fruits = document.getElementById("fruits");
let images = document.getElementById("images");

fruits.onchange = function () {
  console.log("changed");
  console.log(fruits.value);
  var imgsrc = "";
  switch (fruits.value) {
    case "alpukat":
      imgsrc = "img/alpukat.jpg";
      break;
    case "jeruk":
      imgsrc = "img/jeruk.jpg";
      break;
    case "kiwi":
      imgsrc = "img/kiwi.jpg";
      break;
    case "lemon":
      imgsrc = "img/lemon.jpg";
      break;
    case "semangka":
      imgsrc = "img/semangka.jpg";
      break;
    case "strowberry":
      imgsrc = "img/strowberry.jpg";
      break;
    default:
      imgsrc = "";
      break;
  }
  images.src = imgsrc;
  alert("Ini gambar " + fruits.value);
};
