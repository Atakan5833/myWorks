const saka =  document.querySelectorAll(".saka")

saka.forEach((sakaa) => {
    sakaa.addEventListener("click" , function() {
        sakaa.classList.toggle("active")
    })
});
