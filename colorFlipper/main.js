const div = document.querySelector("div")
const button = document.querySelector("button")
const renkler = ["red","black","yellow","blue","purple","orange","brown","aqua","bisque","darkblue","limegreen","green"]



function rastgele() {
    const sayi= Math.floor(Math.random() * renkler.length)
    const renk= renkler[sayi]
    div.style.backgroundColor = renk
    console.log(renk)
}
button.addEventListener("click", rastgele)
