const redLight = document.querySelector('#redLight');
const yellowLight = document.querySelector('#yellowLight');
const greenLight = document.querySelector('#greenLight');

redLight.addEventListener('click', () => {
    redLight.style.backgroundColor = 'red';
    yellowLight.style.backgroundColor = 'black';
    greenLight.style.backgroundColor = 'black';
})

yellowLight.addEventListener('click', () => {
    redLight.style.backgroundColor = 'black';
    yellowLight.style.backgroundColor = 'yellow';
    greenLight.style.backgroundColor = 'black';
})

greenLight.addEventListener('click', () => {
    redLight.style.backgroundColor = 'black';
    yellowLight.style.backgroundColor = 'black';
    greenLight.style.backgroundColor = 'green';
})