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

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 5 seconds

}
