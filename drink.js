var images = document.querySelectorAll(".gallery img");

images.forEach(function (image) {
  image.addEventListener("mouseenter", function () {
    this.style.opacity = "0.3";
  });

  image.addEventListener("mouseleave", function () {
    this.style.opacity = "1";
  });
});