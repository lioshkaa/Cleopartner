const prev = document.querySelector(".prev"),
  next = document.querySelector(".next"),
  slides = document.querySelectorAll(".slide");
function Burger(x) {
  if (x.classList.toggle("change")) openNav();
  else {
    closeNav();
  }
}
function openNav() {
  document.querySelector(".sidenav").style.display = "flex";
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
let index = 0;
const ActiveSlide = (n) => {
  for (slide of slides) {
    slide.classList.remove("active");
  }
  slides[n].classList.add("active");
};
const prepareCurrentSlide = (ind) => {
  ActiveSlide(index);
};
const nextSlide = () => {
  if (index === slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
};
const prevSlide = () => {
  if (index === slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
};
setInterval(nextSlide, 3000);
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
