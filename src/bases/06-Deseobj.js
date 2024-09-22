//desestruturacion

//Asignacion Desetructurante

const persona = {
    nombre : 'Piero',
    edad: 45,
    clave: 'abc123,'
}

// const {nombre,edad,clave,} = persona;

// console.log(nombre) ;
// console.log(edad) ;
// console.log(clave) ;

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

const useContextx = ({ clave, nombre,edad,rango= 'Capitan'})=>{
    // const {nombre,edad,clave,} = Usuario;
    // console.log(edad, clave,nombre);
    // console.log(nombre,edad,rango)
    return {
        nombreClave : clave,
        anios : edad,
        latIng:{
            lat: 12321,
            log : 123.545
        }
    }
}

const {nombreClave,anios,latIng: {lat,log}} = useContextx(persona)
console.log(nombreClave,anios)
console.log(lat, log)
