'Use strict';
// Suma
/*let valor_1 = 2;
let valo_2 = 3;

console.log(valor_1 + valo_2);
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
let numeros = [0, 1, 2, 3, 4, 5, 6,7, 8, 9];
//For
for (let num = 0; num < array.length; num ++) {
    const element = numeros [num];
    console.log(element);
}
/*
for (let num = 0; num < 10; num++) {
    console.log(num);
}
*/
void eliminaPares(){
    int tamanho=vector.length;
    for(int i=0;i<vector.length;i++){
       if(i%2==1){
          for (int j=i;j<vector.length;j++)
             vector[j]=vector[j+1];
       }
    }
 }
 let numero_pares = numeros.filter(function (numeros) {
    return numeros % != 2
 });
 console.log(numero_pares);