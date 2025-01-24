const chinese= document.getElementById("chinese")
const fastFood= document.getElementById("fastFood")
const mexican= document.getElementById("mexican")
const promptText= document.getElementById("promptText")



const apiUrl = "https://allforonealan.azurewebsites.net"


chinese.addEventListener('click', async () =>{
    let Input = "Chinese"
    let response = await fetch(apiUrl + `/RestaurantPicker/RestaurantPicker/`+Input);
    let data = await response.text();
    console.log(data)
    promptText.innerText = (data);
})

fastFood.addEventListener('click', async () =>{
    let Input = "Fast Food"
    let response = await fetch(apiUrl + `/RestaurantPicker/RestaurantPicker/`+Input);
    let data = await response.text();
    console.log(data)
    promptText.innerText = (data);
})

mexican.addEventListener('click', async () =>{
    let Input = "Mexican"
    let response = await fetch(apiUrl + `/RestaurantPicker/RestaurantPicker/`+Input);
    let data = await response.text();
    console.log(data)
    promptText.innerText = (data);
})