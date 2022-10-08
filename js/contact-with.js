var swiper = new Swiper(".mySwiper", {
   pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
   },
   autoplay: {
      delay: 5000,
      disableOnInteraction: false,
   },
});
// to send data first page
document.getElementById("form1")?.addEventListener("submit", (e) => {
   e.preventDefault();
   const las = location.href.lastIndexOf("/");
   const loc = location.href.slice(0, las + 1);
   location.replace(loc + "contact-with-next.html");
});
document.getElementById("form2")?.addEventListener("submit", (e) => {
   e.preventDefault();
   const las = location.href.lastIndexOf("/");
   const loc = location.href.slice(0, las + 1);
   location.replace(loc + "meassage.html");
});
document.getElementById("back")?.addEventListener("click", () => {
   const las = location.href.lastIndexOf('/')
   const loc = location.href.slice(0,las + 1)
   location.replace(loc + 'contact-with-ex.html')
});
// to send data last page
document.getElementById("sendData")?.addEventListener("submit", (e) => {
   e.preventDefault();
   const las = location.href.lastIndexOf('/')
   const loc = location.href.slice(0,las + 1)
   location.replace(loc + 'index.html')
});
