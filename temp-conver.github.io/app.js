const celciusInput = document.querySelector("#celcius > input");
const farrenheitInput = document.querySelector("#farrenheit > input");
const kelvinInput = document.querySelector("#kelvin > input");

function roundNum(num) {
    return Math.round(num*100)/100;
}

function celciusConverter() {
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9 / 5)) + 32;
    const kTemp = cTemp + 273.15;
    farrenheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
    console.log(cTemp);
    console.log(fTemp);
    console.log(kTemp);
}

function farrenheitConverter() {
    const fTemp = parseFloat(farrenheitInput.value);
    const cTemp = (fTemp - 32) * (5 / 9);
    const kTemp = (fTemp + 459.67) * (5 / 9);
    celciusInput.value = roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp);
    console.log(cTemp);
    console.log(fTemp);
    console.log(kTemp);
}

function kelvinConverter() {
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = 9 / 5 * (kTemp - 273) + 32;
    farrenheitInput.value = roundNum(fTemp);
    celciusInput.value = roundNum(cTemp);
    console.log(cTemp);
    console.log(fTemp);
    console.log(kTemp);
}

function main() {
    celciusInput.addEventListener('input', celciusConverter);
    farrenheitInput.addEventListener('input', farrenheitConverter);
    kelvinInput.addEventListener('input', kelvinConverter);
}

main();