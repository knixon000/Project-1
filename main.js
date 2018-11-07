function scroll() {
  let h2 = document.querySelector('#slidein');
  console.log(window.scrollY);
  if (0 <= window.scrollY){
    h2.className = "animated slideLeft";
  } else {
    h2.className = "";
  }
}

window.addEventListener("scroll", scroll);

function scroll2() {
  let p = document.querySelector('#slidein2');
  console.log(window.scrollY);
  if (0 <= window.scrollY){
    p.className = "animated slideLeft";
  } else {
    p.className = "";
  }
}

window.addEventListener("scroll", scroll2);

function scroll3() {
  let img = document.querySelector('#slidein3');
  console.log(window.scrollY);
  if (0 <= window.scrollY){
    img.className = "animated slideRight";
  } else {
    img.className = "";
  }
}

window.addEventListener("scroll", scroll3);

let slideIndex = 0;
showSlides();
