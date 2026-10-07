(function () {
  var carousel = document.querySelector("[data-carousel]");
  if (!carousel) {
    return;
  }

  var track = carousel.querySelector(".carousel-track");
  var slides = Array.prototype.slice.call(carousel.querySelectorAll(".carousel-slide"));
  var prevBtn = carousel.querySelector("[data-carousel-prev]");
  var nextBtn = carousel.querySelector("[data-carousel-next]");
  var dotsWrap = carousel.querySelector("[data-carousel-dots]");
  var index = 0;

  function goTo(nextIndex) {
    index = (nextIndex + slides.length) % slides.length;
    track.style.transform = "translateX(-" + index * 100 + "%)";
    slides.forEach(function (slide, i) {
      slide.classList.toggle("is-active", i === index);
    });
    Array.prototype.forEach.call(dotsWrap.children, function (dot, i) {
      dot.classList.toggle("is-active", i === index);
    });
  }

  slides.forEach(function (_slide, i) {
    var dot = document.createElement("button");
    dot.type = "button";
    dot.className = "carousel-dot" + (i === 0 ? " is-active" : "");
    dot.setAttribute("aria-label", "Ir a la imagen " + (i + 1));
    dot.addEventListener("click", function () {
      goTo(i);
    });
    dotsWrap.appendChild(dot);
  });

  prevBtn.addEventListener("click", function () {
    goTo(index - 1);
  });

  nextBtn.addEventListener("click", function () {
    goTo(index + 1);
  });
})();
