import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.to("img", {
  scale: 2.8,
  scrollTrigger: {
    trigger: ".page2",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    pin: true,
  }.to(
    "h1",
    {
      scale: 2.8,
    },
    "<",
  ),
});
