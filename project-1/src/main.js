import gsap from "gsap";

const btn = document.querySelector("button");

const tl = gsap.timeline();

gsap.set(".background", {
  scale: 1.3,
});

btn.addEventListener("click", () => {
  tl.to(".loading", {
    y: "-100%",
    duration: 1.6,
    ease: "expo.inOut",
  }).to(".background", {
    scale: 1,
    duration: 1.6,
    ease: "expo.inOut",
  });
});
