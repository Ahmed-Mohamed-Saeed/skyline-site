const closeForm = document.getElementById("closeForm");
// to close form and back  to home
closeForm?.addEventListener("click", () => {
   const las = location.href.lastIndexOf('/')
   const loc = location.href.slice(0,las + 1)
   location.replace(loc + 'index.html')
});