sections = document.querySelectorAll("section");
const animations = ["slide-x", "slide-y"];

const selectElements = (parent, animationStyle) =>
  document.querySelectorAll(
    `#${parent.attributes.id.nodeValue} [data-animation=${animationStyle}]`
  );

const addAnimationClass = (element, animation) =>
  element.classList.add(`${animation}`);

const removeAnimationClass = (element, animation) =>
  element.classList.remove(`${animation}`);

const slideObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animations.forEach((animation) => {
          selectElements(entry.target, animation).forEach((element) => {
            addAnimationClass(element, animation);
          });
        });
      }
    });
  },
  {
    threshold: 0.5,
  }
);

sections.forEach((section) => {
  slideObserver.observe(section);
});

const hamburger = document.querySelector(".hamburger");
const mobileNavigation = document.querySelector(".mobile-navigation");
hamburger.addEventListener("click", function () {
  this.classList.toggle("hamburger--active");
  mobileNavigation.classList.toggle("mobile-navigation--active");
});
