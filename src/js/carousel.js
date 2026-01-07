document.querySelectorAll('.carousel').forEach((carouselSection, sectionIndex) => {
  const track = carouselSection.querySelector(".carousel__track");
  const prevBtn = carouselSection.querySelector(".carousel__button-left");
  const nextBtn = carouselSection.querySelector(".carousel__button-right");
  const dots = carouselSection.querySelectorAll(".carousel__dot");
  const firstCard = carouselSection.querySelector(".carousel__card");

  if (track && prevBtn && nextBtn && firstCard && dots.length) {
    const scrollAmount = firstCard.clientWidth + 25;

    // Boutons flèches
    prevBtn.addEventListener("click", () => {
      track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
    nextBtn.addEventListener("click", () => {
      track.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    // Dots cliquables
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        track.scrollTo({ left: index * scrollAmount, behavior: "smooth" });
        dots.forEach(d => d.classList.remove("active"));
        dot.classList.add("active");
      });
    });

    // Sync dots sur scroll
    track.addEventListener("scroll", () => {
      const index = Math.round(track.scrollLeft / scrollAmount);
      dots.forEach((d, i) => d.classList.toggle("active", i === index));
    });
  }
});
