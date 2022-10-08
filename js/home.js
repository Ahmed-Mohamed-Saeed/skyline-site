// --------------- Select Elemetns
const navLinks = document.querySelectorAll("nav .nav-link");
const itemQuestion = document.querySelectorAll(".question .item");
const openQuestion = document.querySelector(".question .open-question");
const closeQuestion = document.querySelector(".question .close-question");
const navBar = document.getElementById("navBar");
const videpWho = document.getElementById("videoWho");
const posterVideo = document.getElementById("posterVid");
const sectionWho = document.getElementById("whoAre");
const sections = document.querySelectorAll("section");
let curentSection;
// --------------- Function
// --------------- Events
// scroll behavir to section
navLinks.forEach((link) => {
   link.addEventListener("click", (e) => {
      const curentAttr = document.getElementById(e.target.dataset.section);
      scrollTo({
         top: curentAttr?.offsetTop - 70,
         behavior: "smooth",
      });
   });
});
// scroll nav chang fixed nav
addEventListener("scroll", () => {
   if (scrollY > sectionWho?.offsetTop ) {
      navBar?.classList.add("fixed-top");
      navBar.style.transition = "all .5s";
      navBar.classList.add("bg-light");
   } else {
      navBar?.classList.remove("fixed-top");
      navBar?.classList.remove("bg-light");
   }
   // when scroll chang active
   for (let i = 0; i < sections.length; i++) {
      if (scrollY >= sections[i].offsetTop - 150) {
         curentSection = sections[i];
      }
   }
   navLinks.forEach((link) => {
      if (link.dataset.section?.includes(curentSection.id)) {
         document
            .querySelector("nav .nav-link.active")
            .classList.remove("active");
         link.classList.add("active");
      }
   });
});
// Question Active
itemQuestion.forEach((item) => {
   item.addEventListener("click", (e) => {
      item
         .closest(".right")
         .querySelector(".active")
         .classList.remove("active");
      e.target.closest(".item").classList.add("active");
   });
});
// for video
document.getElementById("playVideo")?.addEventListener("click", () => {
   if (!posterVideo.classList.contains("d-none")) {
      videpWho.play();
      posterVideo.classList.add("d-none");
   } else {
      videpWho.pause();
      posterVideo.classList.remove("d-none");
   }
});
// loadind
addEventListener("load", () => {
   setTimeout(() => {
      document.querySelector(".spinner")?.classList.add("opacity-0");
   }, 1000);
   setTimeout(() => {
      document.querySelector(".first__page-load")?.classList.add("opacity-0");
      document
         .querySelector("body.home-page")
         ?.classList.remove("overflow-hidden");
   }, 1700);
   setTimeout(() => {
      document.querySelector(".spinner")?.remove();
      document.querySelector(".first__page-load")?.remove();
   }, 3000);
});
