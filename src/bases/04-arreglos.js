//Arreglos en javascript
// const arreglo = new Array(100);
const arreglo =[1,2,3,4]
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

let arrreglo2 = [...arreglo,5];
// arrreglo2.push(5)
const arreglo3 = arrreglo2.map(function(numero){
     return numero * 2
})



console.log(arreglo);
console.log(arrreglo2);
console.log(arreglo3);

