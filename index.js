const celsiusEl = document.getElementById("Celsius");
const FahrenheitEl = document.getElementById("Fahrenheit");
const KelvinEl = document.getElementById("Kelvin");

function computeTemp(){
    const currentValue = +event.target.value;
    switch (event.target.name) {
        case "Celsius":
            KelvinEl.value = currentValue + 273.15;
            FahrenheitEl.value= currentValue * 1.8 + 32; 
            break;
    
        case "Fahrenheit":
            celsiusEl.value = (currentValue -32) / 1.8;
            KelvinEl.value= (currentValue -32) /1.8 + 273.15; 
            break;
    
            case "Kelvin":
            celsiusEl.value = currentValue - 273.15;
            FahrenheitEl.value= (currentValue -273.15) * 1.8 + 32; 
            break;
    
           default:
            break;
    }

}
