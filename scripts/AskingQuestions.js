const doneBtn = document.getElementById("doneBtn")
const promptText = document.getElementById("promptText")
const input = document.getElementById("input")
const input2 = document.getElementById("input2")


const apiUrl = "https://allforonealan.azurewebsites.net"


doneBtn.addEventListener('click', async () => {
    let Input = input.value.trim();
    let InputTwo = input2.value.trim();
    const response = await fetch(apiUrl + `/AskingQuestions/AskingQuestions/${Input}/${InputTwo}`);
    const data = await response.json();
    console.log(data[0])
    promptText.innerText = (data[0]);
})

