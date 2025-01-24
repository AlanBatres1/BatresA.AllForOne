const doneBtn= document.getElementById("doneBtn")
const promptText= document.getElementById("promptText")
const input = document.getElementById("input")


const apiUrl = "https://allforonealan.azurewebsites.net"


doneBtn.addEventListener('click', async () =>{
    let Input = input.value.trim();
    const response = await fetch(apiUrl + `/Magic8Ball/Magic8Ball/`+ Input);
    const data = await response.text();
    console.log(data)
    promptText.innerText = (data);
})