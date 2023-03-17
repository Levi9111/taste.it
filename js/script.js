const bullet1 = document.querySelector(".bullet1");
const bullet2 = document.querySelector(".bullet2");

const btnRed = document.querySelectorAll("#btn--red");
const btnClass = document.querySelectorAll(".button")[0];
const header = document.querySelector(".header");

const sliderMenu = document.querySelector(".slider--menu");

const navbarMenu = document.querySelector(".navbar--menu");

const menuLinksSlider = document.querySelector(".slider--li-link");
const menuLinksNav = document.querySelector(".navbar--li-link");

/////Slider Navbar
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    document.querySelector(".slider").style.top = "0";
  } else {
    document.querySelector(".slider").style.top = "-25rem";
  }
}

function changeBg() {
  const images = ["url(../img/bg_1.jpg)", "url(../img/bg_2.jpg)"];
  const bg = images[Math.floor(Math.random() * images.length)];
  header.style.backgroundImage = bg;
}

setInterval(changeBg, 1500);

sliderMenu.addEventListener("click", function (e) {
  e.preventDefault();
  menuLinksSlider.classList.toggle("active");
});

navbarMenu.addEventListener("click", function (e) {
  e.preventDefault();
  menuLinksNav.classList.toggle("active");
});

//////flatpickr js
const config = {
  enableTime: true,
  dateFormat: "d/m/y",
};
flatpickr('input[type="datetime"]', config);

for (let i = 0; i < btnRed.length; i++) {
  btnRed[i].addEventListener("click", function (e) {
    e.preventDefault();
    btnRed[i].style.backgroundColor = "var(--blue)";
    btnRed[i].style.border = "none";
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  });
}

const slides = document.querySelectorAll(".testimony--statement");
const btns = document.querySelectorAll(".testimony--manual-btn");

const btnContainer = document.querySelector(".testimonial--manual");

slides.forEach((el, i) => {
  el.style.transform = `translateX(${100 * i}%)`;
});

btnContainer.addEventListener("click", function (e) {
  if ((e.target.classList.contains = "testimony--manual-btn")) {
    const slide = e.target.dataset.slide;

    console.log(slide);

    slides.forEach((el, i) => {
      el.style.transform = `translateX(${100 * (i - slide)}%)`;
      btns.forEach((el, i) => {
        el.addEventListener("click", function () {
          el.style.backgroundColor = "red";
        });
      });
    });
  }
});
