async function userGetir() {

    //butonu çek
const buttonn = document.getElementById('user')    
//more butonu
const more = document.getElementById('more')
//container divi
const div = document.querySelector(".container")    
//loaderı yakala
const loader = document.getElementById("loader")
loader.classList.remove("active")

//fetch api = api istekleri yapmak için kullanılan fonksiyon
const request = await fetch("https://randomuser.me/api/?results=50")
const response = await request.json()

//more active clası kaldırıp görünür yap
more.classList.remove("active")
//loader'e active classını tekrar ver
loader.classList.add("active")
//butonu disabled yap
buttonn.disabled = true;
buttonn.title = "Tekrar veri yüklemek için sayfanın en sonuna gidiniz."
//kullanıcıları foreach'ladım
response.results.forEach(user => {
    console.log(user)
    const kullanici = `
    <div class="user">
        <h3>${user.name.title+" "+user.name.first}</h3>
        <div class="image-container">
            <img src="${user.picture.large}" alt="user">
            <p>${user.nat}</p>
            <p><b>Phone: </b>${user.phone}</p>
            <p><b>Gender: </b>${user.gender}</p>
            <p><b>Email: </b>${user.email}</p>
            <p><b>City: </b>${user.city}</p>
            <p><b>Country: </b>${user.country}</p>

        </div>
    </div>
    
    `
    div.innerHTML += kullanici
});



} 
