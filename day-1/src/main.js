import "./style.css";
import gsap from "gsap";

gsap.to(".right", {
  x: 800,
  duration: 1.5,
});

gsap.from(".left", {
  x: 800,
  duration: 1.5,
});

gsap.to(".top", {
  y: -500,
  duration: 1.5,
});

gsap.to(".bottom", {
  y: 500,
  duration: 1.5,
});

gsap.from(".scale", {
  scale: 1.5,
  duration: 1.5,
});

gsap.to(".rotate", {
  rotation: 360,
  duration: 1.5,
});

gsap.to(".fade", {
  opacity: 0,
  duration: 1,
});

gsap.from(".fade", {
  delay: 1.5,
  opacity: 1,
  duration: 1,
});
