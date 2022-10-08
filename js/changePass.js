const changePassForm = document.getElementById("changePassForm");
changePassForm?.addEventListener("submit", (e) => {
   e.preventDefault()
   const las = location.href.lastIndexOf('/')
   const loc = location.href.slice(0,las + 1)
   location.replace(loc + 'index.html')
});
