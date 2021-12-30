
// fahrenheit to celsius js code
const farenheit = document.getElementById("Farenheit");
const submitFarenheit = document.getElementById("farenheitSubmit");
const showResult = document.getElementById("showResult");


let inputNumber;
farenheit.addEventListener("change", (e)=>{
   inputNumber = farenheit.value
})

submitFarenheit.addEventListener("click", ()=>{
    const converToCelcius = (inputNumber - 32) * 5/9;
    showResult.innerHTML = `${converToCelcius.toFixed(2)} C`
    farenheit.value = ''; 
})

// celsius to kelvin js code

const kelvin = document.getElementById("kelvin");
const celsiusSubmit = document.getElementById("celsiusSubmit");
const showKelvinResult = document.getElementById("showKelvinResult");

let celsiusValue;
kelvin.addEventListener("change", ()=>{
 celsiusValue = kelvin.value;
})

celsiusSubmit.addEventListener("click", ()=>{
    const convertToKelvin = parseFloat(celsiusValue )+ parseFloat(273);
    showKelvinResult.innerHTML = `${convertToKelvin.toFixed(1)} K`
    kelvin.value = ''
})




