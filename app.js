'Use strict';
// Suma
/*
function sumar(a, b) {
    let resultado = a + b;
    console.log(resultado);
    return resultado;
}sumar(2, 6);
*/

// Crea una función que determine si un número es par.

/*let valor_3 =parseInt(prompt(`Escribe una cifra para saber si es par o impar`));

if (valor_3 % 2==0) {
    alert(`El número ${valor_3} es par`);
} else {
    alert(`El número ${valor_3} es impar`);
}
*/
//
/*let = carro ={
    marca: "Nissan",
    puertas: "5 puerta",
    precio:"menor a 20.000€",
    caracteristicas:{
        color:"negro",
        asientos: "piel natural",
        accsesorios: "bola remolque",
    }
}
console.log(carro.marca);
console.log(carro.puertas);
console.log(carro.caracteristicas.color);
*/
//Array con diez números.
//let numeros = [0, 1, 2, 3, 4, 5, 6,7, 8, 9];
//For
/*
for (let num = 0; num < numeros.length; num ++) {
    const element = numeros [num];
    console.log(element);
}
*/
/*
for (let num = 0; num < 10; num++) {
    console.log(num);
}
*/
let data = [0, 1, 2, 3, 4, 5, 6,, 6, 7, 7, 8, 9];

/*let numero_pares = data.filter(function (numero) {
    return numero % 2 == 0;
 });
 console.log(numero_pares);
*/
/*
let result = data.reduce((acc, numero_pares)=>{
   if(!acc.includes(numero_pares)){
    acc.push(numero_pares);
   }
   return acc;
},[]);

console.log(result);
*/
for (let num = 0; num < data.length; num++) {
    const element = data[num];
    if (num % 2==0) {
        let mostrar = data.indexOf(element);
        data.splice(0, 9, mostrar);
        console.log(mostrar);
    } 
}


/*
let max = numeros.reduce(function(a, b) {
    return Math.max(a, b);
}, -Infinity);
console.log(max);
let min = numeros.reduce(function(a, b) {
    return Math.min(a, b);
}, -Infinity);
console.log(min)
let x = Math.min([numeros]);
console.log(x);

console.log( "alphabet".toUpperCase() );
console.log( "alphabet".toLowerCase() );
*/
let nombre = [{name:'maria'},{name:'josefina'} ,{name: 'teresita'}];
nombre.forEach(i => {
    // reemplazar total_kills_
    i.name = i.name.replace("total_kills_","");
    // i.name es igual al primer elemento en mayúscula más el 
    // resto de la palabra
    i.name = i.name[0].toUpperCase() + i.name.slice(1);
  });
  
  console.log(nombre);

let suNombre = [
    {nombres: 'Lola'},
    {nombres: 'Josefa'},
    {nombres: 'Pepa'},
    {nombres: 'Manola'},
    {nombres: 'Pepina'},
    {nombres: 'Maria'},
    {nombres: 'Rosa'},
    {nombres: 'Silda'},
    {nombres: 'Silvia'},
    {nombres: 'Carla'},
]
console.log(suNombre);
function mostrarLista(suNombre) {
    //imprimir en pantalla
}

let numbers = [0, 1, 2, 3, 4, 5, 6,7, 8, 9];
numbers.forEach(element => console.log(element));