const btnToRightCon = document.getElementById("btnToRightCon");
const inputNumber = document.querySelectorAll(`input[type="number"]`);
const confirmBtn = document.getElementById("confirmBtn");
// back bage
btnToRightCon?.addEventListener("click", () => {
   const las = location.href.lastIndexOf("/");
   const loc = location.href.slice(0, las + 1);
   location.replace(loc + "respass.html");
});
// to add back ground in input otp
inputNumber.forEach((item, index) => {
   item?.addEventListener("input", function () {
      if (inputNumber.length - 1 > index) {
         this.nextElementSibling.focus();
      } else {
         inputNumber.forEach(function (item) {
            item.classList.add("opacity-75");
         });
      }
     
      if (this.value != "") {
         this.style.cssText = `background-color: #515D79; color:#fff;`;
      } else {
         this.style.cssText = `background-color: transparent; ;`;
      }
      if (this.value.length > this.maxLength)
         this.value = this.value.slice(0, this.maxLength);
   });
});
// to go page change password
confirmBtn?.addEventListener("submit", (e) => {
   e.preventDefault();
   const las = location.href.lastIndexOf("/");
   const loc = location.href.slice(0, las + 1);
   location.replace(loc + "changePass.html");
});
