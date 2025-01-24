const doneBtn= document.getElementById("doneBtn")
const promptText= document.getElementById("promptText")
const input = document.getElementById("input")
const input2 = document.getElementById("input2")
const input3 = document.getElementById("input3")
const input4 = document.getElementById("input4")
const input5 = document.getElementById("input5")
const input6 = document.getElementById("input6")
const input7 = document.getElementById("input7")
const input8 = document.getElementById("input8")
const input9 = document.getElementById("input9")
const input10 = document.getElementById("input10")


const apiUrl = "https://allforonealan.azurewebsites.net"


doneBtn.addEventListener('click', async () =>{
    let Input = input.value.trim();
    let InputTwo = input2.value.trim();
    let InputThree = input3.value.trim();
    let InputFour = input4.value.trim();
    let InputFive = input5.value.trim();
    let InputSix = input6.value.trim();
    let InputSeven = input7.value.trim();
    let InputEight = input8.value.trim();
    let InputNine = input9.value.trim();
    let InputTen = input10.value.trim();
    const response = await fetch(apiUrl + `/MadLib/MadLib/${Input}/${InputTwo}/${InputThree}/${InputFour}/${InputFive}/${InputSix}/${InputSeven}/${InputEight}/${InputNine}/${InputTen}`);
    const data = await response.text();
    console.log(data)
    promptText.innerText =(data);
})