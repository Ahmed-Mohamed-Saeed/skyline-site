const closeForm = document.getElementById("closeForm");
const replaceNum = document.getElementById("replaceNum");
const inputPhone = document.querySelector(".input-phone");
const mailInput = document.querySelector(".mail-input");
const textPass = document.querySelector(".text-password");
const btnToRight = document.getElementById("btnToRight");
const confirmPage = document.getElementById("confirmPage");
closeForm?.addEventListener("click", () => {
   const las = location.href.lastIndexOf('/')
   const loc = location.href.slice(0,las + 1)
   location.replace(loc + 'index.html')
});
// to change input filed when select 
replaceNum?.addEventListener("click", (e) => {
   e.preventDefault();
   if (replaceNum.innerText == "استبدال برقم الهاتف") {
      inputPhone.classList.remove("d-none");
      mailInput.classList.add("d-none");
      document.querySelector('.res-mail').setAttribute('disabled','true')
      replaceNum.innerText = "استبدال بالبريد الالكتروني";
      textPass.innerText = "أدخل رقم الهاتف لـتغير الكلمة المرور";
      document.querySelectorAll('.phone-in').forEach(item=>{
         item.removeAttribute('disabled')
      })
   } else if (replaceNum.innerText == "استبدال بالبريد الالكتروني") {
      inputPhone.classList.add("d-none");
      mailInput.classList.replace("d-none", "d-block");
      replaceNum.innerText = "استبدال برقم الهاتف";
      textPass.innerText = "أدخل البريد الالكتروني لـتغير الكلمة المرور";
      document.querySelector('.res-mail').removeAttribute('disabled')
      document.querySelectorAll('.phone-in').forEach(item=>{
         item.setAttribute('disabled','true')
      })

   }
});
// to go login page 
btnToRight?.addEventListener("click", (e) => {
   e.preventDefault()
   const las = location.href.lastIndexOf('/')
   const loc = location.href.slice(0,las + 1)
   location.replace(loc + 'login.html')
});
// to go page confirm
confirmPage?.addEventListener('submit',(e)=> {
   e.preventDefault()
   const las = location.href.lastIndexOf('/')
   const loc = location.href.slice(0,las + 1)
   location.replace(loc + 'confirm.html')
})