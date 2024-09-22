import heroes, {owners} from '../data/heroes'

// console.log(heroes)

// const getHeroesById = (id)=>{
//     return heroes.find((heroes) => {
//        if(heroes.id === id){
//         return true;
//        }else{
//         return false;
//        }
//     }
//     )
// }

const getHeroesById = (id)=>{
    return heroes.find((heroes) => 
       heroes.id === id 
    )
}

// console.log(getHeroesById(3))

const getHeroesByOwner = (owner) => heroes.filter((owne) => owne.owner == owner)


// console.log(getHeroesByOwner('DC'));

export{
    getHeroesById,
    getHeroesByOwner,
}