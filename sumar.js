let botonSuma = document.querySelector('#boton-suma');
let botonResta = document.querySelector('#boton-resta');
let contador = document.querySelector('#contador');
console.log(contador, botonResta, botonSuma);


valorInicial = 0;

const countAdd = ()=>{
    contador.innerHtml = valorInicial += 1;
}
const countSubstract = ()=>{
    contador.innerHtml = valorInicial -= 1;
}

botonSuma.addEventListener('click',()=>{
    countAdd();
})

botonResta.addEventListener('click',()=>{
    countSubstract();
})
