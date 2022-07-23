const cityName = document.querySelector("#cityname");
const submit= document.querySelector("#submitbtn")
const temp = document.querySelector("#temp");
const city = document.querySelector("#city")
const weatherstatus = document.querySelector("#weastatus")

const getinfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value
  if (cityName===""){
    console.log("pleae..enter");
  }else{
    try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=94efb2f1119a2af41fdb8549fb069e65`
        let responce = await fetch(url)
        let data  = await responce.json()
        const arrDta= [data]
     temp.innerHTML=arrDta[0].main.temp
     city.innerHTML= `${arrDta[0].name}, ${arrDta[0].sys.country} `
     weatherstatus.innerHTML= arrDta[0].weather[0].main
       

    }catch{
        console.log("please..");
    }
  }

}
submit.addEventListener("click",getinfo)
