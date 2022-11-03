const weatherAPI = "http://api.weatherapi.com/v1/current.json?key=091ac909c3f74e63b3892925220311&q=jakarta&aqi=no";
const container = document.getElementById("container")
fetch(weatherAPI)
    .then((res) => res.json())
    .then((data) => {
        const current = data.current;
        const location = data.location;
        console.log(location)
        console.log(current)
        let element = '';
        keadaan = waktu()
        element = showElement(data);
        container.innerHTML += keadaan;
        container.innerHTML += element;
    })
function waktu() {
    jam = new Date().getHours();
    
    if(jam < 11){
        return`<h1 class="ucapan">Selamat Pagi</h1>`
    } else if(jam < 15){
        return`<h1 class="ucapan">Selamat Siang</h1>`
    }else if(jam < 19){
        return`<h1 class="ucapan">Selamat Sore</h1>`
    }else{
        return`<h1 class="ucapan">Selamat Malam</h1>`
    }

}


function showElement(data) {
    days = ["Minggu","Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"]
    let hari = new Date().getDay();
    
    // return`
    //     <div class="cuaca">
    //         <img class="icon-cuaca" src="${data.current.condition.icon}">   
    //         <h3 class="jenis-cuaca">${data.current.condition.text}</h3>
    //     </div>
    //     <h1>Selamat pagi</h1>
    //     <h3>${data.location.name}</h3>
    //     <h3>${data.location.localtime}</h3>
    //     <div>
    //         <h3>${data.current.feelslike_c}°</h3>
    //     </div>

    
    // `

    return`
        <p class="teg">Manage Your Time Better With Us</p>
        <h3>${days[hari]}</h3>
    `
}
