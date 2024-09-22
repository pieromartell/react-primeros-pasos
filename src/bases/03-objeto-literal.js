const persona = {
    nombre : 'Tommy',
    apellido: 'Star',
    edad : 45,
    direccion : {
        ciudad : 'New York',
        zip: 5555665,
        lat: 14.12,
        lng: 34.1455
    }
};
// console.table({persona : persona});
console.log(persona)

const persona2 = {...persona};

console.log(persona2)