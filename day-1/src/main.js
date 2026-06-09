import "./style.css";
import gsap from "gsap";

const boxes = {
  right: document.querySelector(".right"),
  left: document.querySelector(".left"),
  top: document.querySelector(".top"),
  bottom: document.querySelector(".bottom"),
  scale: document.querySelector(".scale"),
  rotate: document.querySelector(".rotate"),
  fade: document.querySelector(".fade"),
};

let rightOpen = false;

boxes.right.addEventListener("click", () => {
  rightOpen = !rightOpen;

  gsap.to(".right", {
    x: rightOpen ? 800 : 0,
    rotation: rightOpen ? 360 : 0,
    scale: rightOpen ? 1.2 : 1,
    duration: 1.5,
    ease: "power3.inOut",
  });
});

boxes.left.addEventListener("click", () => {
  const tl = gsap.timeline();

  tl.from(".left", {
    x: 800,
    opacity: 0,
    rotation: 180,
    duration: 1.2,
    ease: "back.out(1.7)",
  }).to(".left", {
    scale: 1.2,
    duration: 0.3,
    yoyo: true,
    repeat: 1,
  });
});

boxes.top.addEventListener("click", () => {
  gsap.fromTo(
    ".top",
    {
      y: -500,
      scale: 0.5,
      opacity: 0,
    },
    {
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "bounce.out",
    },
  );
});

boxes.bottom.addEventListener("click", () => {
  gsap.to(".bottom", {
    y: 500,
    rotation: 720,
    duration: 2,
    ease: "elastic.out(1, 0.3)",
  });
});

boxes.scale.addEventListener("click", () => {
  gsap.to(".scale", {
    scale: 2,
    rotation: 180,
    duration: 1,
    ease: "power2.out",
    yoyo: true,
    repeat: 1,
  });
});

boxes.rotate.addEventListener("click", () => {
  gsap.to(".rotate", {
    rotation: "+=360",
    scale: 1.3,
    duration: 1.2,
    ease: "power4.out",
    yoyo: true,
    repeat: 1,
  });
});

let faded = false;

boxes.fade.addEventListener("click", () => {
  faded = !faded;

  gsap.to(".fade", {
    opacity: faded ? 0 : 1,
    scale: faded ? 0.5 : 1,
    rotation: faded ? 180 : 0,
    duration: 1,
    ease: "power2.inOut",
  });
});
