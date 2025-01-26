const doneBtn = document.getElementById("doneBtn")
const promptText = document.getElementById("promptText")
const input = document.getElementById("input")


const apiUrl = "https://allforonealan.azurewebsites.net"


doneBtn.addEventListener('click', async () => {
    let Input = input.value.trim();
    const response = await fetch(apiUrl + `/ReverseItNumbers/ReverseItNumbers/${Input}`);
    const data = await response.json();
    console.log(data[0])
    promptText.innerText = data[0];
})