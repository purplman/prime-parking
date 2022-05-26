sections = document.querySelectorAll("section");

const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        window.scrollTo({
          top: entry.target.offsetTop,
          left: 0,
          behavior: "smooth",
        });
      }
    });
  },
  {
    threshold: 0.1,
  }
);

sections.forEach((secion) => {
  scrollObserver.observe(secion);
});
