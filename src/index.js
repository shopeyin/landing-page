// DEMO JOKE APP
import generateJoke from "./generateJoke";
import "./styles/main.scss";
import laughing from "./assets/laughing.svg";

import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

// let tl = gsap.timeline()
// tl
// .from("#demo", {duration:5, opacity:0})
// .from("#title", {scale:0, opacity:0, ease:'back'})
// .from("#freds img", {duration:0.8, stagger:0.1, y:160, ease:'back'})
// .from("#time", {duration:0.8, stagger:0.1, y:160, ease:'back', xPercent:100})

// gsap.registerPlugin(ScrollTrigger);
// const bgVideo = document.querySelector("#bgVideo");
// bgVideo.pause();
// bgVideo.currentTime = 0;
// let sections = gsap.utils.toArray(".step");
// sections.forEach((step, i) => {
//     ScrollTrigger.create({
//         trigger: step,
//         start: "bottom bottom",
//         end: "+=1000",
//         pin: true,
//         anticipatePin: 1,
//     });
//     gsap.fromTo(bgVideo, { currentTime: 3 * i }, {
//         scrollTrigger: {
//             trigger: step,
//             scrub: 2,
//             start: "top bottom",
//             end: "bottom bottom",
//         },
//         currentTime: 3 * (i + 1),
//         duration: 1,
//         ease: "none",
//     });
// });
// gsap.to("#bgVideo", {
//     scrollTrigger: {
//         scrub: true
//     },
//     scale: 1.5
// })

// gsap.registerPlugin(ScrollTrigger);

// const coolVideo = document.querySelector("video");

// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: "video",
//     start: "top top",
//     end: "bottom+=200% bottom",
//     scrub: true,
//     markers: true
//   }
// });

// // wait until video metadata is loaded, so we can grab the proper duration before adding the onscroll animation. Might need to add a loader for loonng videos
// coolVideo.onloadedmetadata = function () {
//   tl.to(coolVideo, { currentTime: coolVideo.duration });
// };

// // Dealing with devices
// function isTouchDevice() {
//   return (
//     "ontouchstart" in window ||
//     navigator.maxTouchPoints > 0 ||
//     navigator.msMaxTouchPoints > 0
//   );
// }
// if (isTouchDevice()) {
//   coolVideo.play();
//   coolVideo.pause();
// }

gsap.registerPlugin(ScrollTrigger);

// const coolVideo = document.querySelector("video");

// let tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: "video",
//     start: "top top",
//     end: "bottom+=200% bottom",
//     scrub: true,
//     markers: true
//   }
// });

// // wait until video metadata is loaded, so we can grab the proper duration before adding the onscroll animation. Might need to add a loader for loonng videos
// coolVideo.onloadedmetadata = function () {
//   tl.to(coolVideo, { currentTime: coolVideo.duration });
// };

// // Dealing with devices
// function isTouchDevice() {
//   return (
//     "ontouchstart" in window ||
//     navigator.maxTouchPoints > 0 ||
//     navigator.msMaxTouchPoints > 0
//   );
// }
// if (isTouchDevice()) {
//   coolVideo.play();
//   coolVideo.pause();
// }


// gsap.from(".herman", {
//   duration: 8,
//   x: "-50vw",
//   rotation: -360,
//   ease: "linear",
//   scrollTrigger: {
//      trigger: ".herman",
//      markers:true,
//      start:"50% 100%",
//      end:"top 100%",

//      toggleActions:"restart pause resume none"
//      },
// });
