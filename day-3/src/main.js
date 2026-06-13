import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
  x: 1000,
  ease: "expo.inOut",
  scrollTrigger: {
    trigger: ".page2",
    start: "top top",
    end: "top -100%",
    scrub: true,
    pin: true,
  },
});
