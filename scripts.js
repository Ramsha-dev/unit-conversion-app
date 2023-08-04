const convertBtn = document.getElementById('convert-btn');
const inputEl = document.getElementById('input-el');
const lengthEl = document.getElementById('length-para');
const volumeEl = document.getElementById('volume-para');
const massEl = document.getElementById('mass-para');

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

function renderLength(value) {

    let mtToFt = value * 3.281;
    let ftTomt = value / 3.281;
    lengthEl.textContent = `${value} meters = ${mtToFt.toFixed(3)} feet | ${value} feet = ${ftTomt.toFixed(3)} meters`;

}
function renderVolume(value) {

    let ltToGl = value * 0.264;
    let glToLt = value / 0.264;
    volumeEl.textContent = `${value} liters = ${ltToGl.toFixed(3)} gallons | ${value} gallons = ${glToLt.toFixed(3)} liters`;
}
function renderMass(value) {

    let klToPd = value * 2.204;
    let pdToKl = value / 2.204;
    massEl.textContent = `${value} kilos = ${klToPd.toFixed(3)} pounds | ${value} pounds = ${pdToKl.toFixed(3)} kilos`;
}
convertBtn.addEventListener("click", function () {

    let inputValue = inputEl.value
    renderLength(inputValue);
    renderVolume(inputValue);
    renderMass(inputValue);
})