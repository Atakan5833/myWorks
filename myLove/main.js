const images = document.querySelectorAll(".image")

images.forEach((image) =>{
    image.addEventListener("click", ()=>{
        remove()
        image.classList.add("active")
    })
})

function remove(){
    images.forEach((image) =>{
        image.classList.remove("active")
    })
}