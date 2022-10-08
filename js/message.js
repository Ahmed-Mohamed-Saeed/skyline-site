const countTime = document.getElementById("countTime");
const countDown = setInterval(function () {
   countTime.innerHTML--;
   if(countTime.innerText == 0) {
     clearInterval(countDown)
    open('index.html','_self')
   }
}, 1000);
