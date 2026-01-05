const carousel = document.querySelector(".carousel__track");
const prevButton = document.querySelector(".carousel__prev-button");
const nextButton = document.querySelector(".carousel__next-button");
const premierItem = document.querySelector(".carousel-artist");
const scrollAmount = premierItem.clientWidth;
if (carousel) {
  // Scroll au clic sur le bouton précédent
  prevButton.addEventListener("click", () => {
    carousel.scrollBy({left:-scrollAmount, behavior:"smooth"});
  });

  // Scroll au clic sur le bouton suivant
  nextButton.addEventListener("click", () => {
    carousel.scrollBy({left:scrollAmount, behavior:"smooth"});
  });
}