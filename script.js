const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

// console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = "Dux<br>Gang";   // Lo convierte a código HTML
h1.innerText = "Dux<br>Gang";   // Lo convierte a texto normal
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');
// h1.classList.toggle('rojo');
// console.log(h1.classList.contains('rojo'));

input.value = "456";

const img  = document.createElement('img');
img.setAttribute('src','https://avatars.githubusercontent.com/u/99379160?s=48&v=4');
console.log(img);

pid.innerHTML = null;
pid.append(img);
// pid.appendChild(img);