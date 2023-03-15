const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    // console.log({event});
    event.preventDefault();
    const suma = Number(input1.value) + Number(input2.value);
    pResult.innerHTML = "Resultado: " + suma;
}
