const title = document.getElementsByClassName("title");
const picture = document.getElementsByClassName("picture");

function reset() {
  for (var i = 0, len = picture.length; i < len; i++) {
    picture[i].style.flex = "1";
  }
  for (var i = 0, len = picture.length; i < len; i++) {
    title[i].style.opacity = "0";
  }
}

function pictureC(e) {
  reset();
  e.style.flex = "4";
  e.childNodes[1].style.opacity = "100%";
  console.log(e.childNodes[1]);
}
