const doneBtn= document.getElementById("doneBtn")
const promptText= document.getElementById("promptText")
const input = document.getElementById("input")
const input2 = document.getElementById("input2")


const apiUrl = "https://allforonealan.azurewebsites.net"


doneBtn.addEventListener('click', async () =>{
    let Input = input.value.trim();
    let InputTwo = input2.value.trim();
    const response = await fetch(apiUrl + `/GreaterOrLess/GreaterOrLess/${Input}/${InputTwo}`);
    const data = await response.text();
    console.log(data)
    promptText.innerText =(data);
})