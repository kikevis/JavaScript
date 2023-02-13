// console.log("Manipulacion del DOM básica")

const h1 = document.querySelector('h1')
const p = document.querySelectorAll('p')
const parrafito = document.querySelector('.parrafito')
const pid = document.querySelector('#pid')
const input = document.querySelector('input')
const pResult = document.querySelector('#pResult')
const btn = document.querySelector('#btnCalcular')
const from = document.querySelector('#form')

// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// });

// h1.innerHTML = 'Manipulacion del DOM básica JS innerHTML';
// h1.innerText = 'Manipulacion del DOM básica JS innerText';
// console.log(h1.getAttribute('pantalla'));
// console.log(h1.setAttribute('pantalla', 'pantalla2'));

// h1.classList.add('rojo');
// h1.classList.remote('rojo');
// h1.classList.toggle('rojo');
// h1.classList.contains('rojo');

// input.value = "4321";

// console.log(document.createElement('img'));
// const img = document.createElement('img');
// img.setAttribute('src', 'https://imagenpng.com/wp-content/uploads/2015/03/Ing-Pina.png');
// console.log(img);

// pid.append(img);
// console.log(pid.append(img));


// function btnOnClick() {
    // const sumaInputs = input1.value + input2.value;
    // pResult.innerText = "Resultado: " + sumaInputs;
    // console.log('Click boton click');
    // console.log(input1.value + input2.value);
// }

// function inputOnChange() {
//     console.log('Cambio input');
// }

function sumarInputValues(event) {
    console.log(event);
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}

form.addEventListener('submit', sumarInputValues);