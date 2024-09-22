//Promesas

import { getHeroesById } from "./bases/08-imp-exp";

// const promesa = new Promise((res,rej)=>{
//     setTimeout(() => {
//         const hereo = getHeroesById(1)
//         console.log(hereo);
//         res(hereo);
//         // rej('No se pudo encontrar el heroe');
//         // console.log('5 segundos')
//     }, 2000);
// });

// promesa.then((heroe)=>{
//     console.log('Hereo: ',heroe);
// })
// .catch((mensajeError)=>{
//     console.log('Mensaje de error:  ',mensajeError)
// })




const getHeroesByIdAsync = (id)=>{

    const promesa = new Promise((res,rej)=>{
        setTimeout(() => {
            const hereo = getHeroesById(id)
            // console.log(hereo);
            if(hereo != null){
                res(hereo);
            }else{
                rej('No se pudo encontrar el heroe');
            }
            // console.log('5 segundos')
        }, 2000);
    });

    return promesa;
}

getHeroesByIdAsync(2)
    .then(console.log)
    .catch(console.error)
    .finally(()=>{console.log("Gracias por ayudar")})