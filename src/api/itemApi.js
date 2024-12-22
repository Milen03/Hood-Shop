const url = 'https://softuni-hood-shop-default-rtdb.europe-west1.firebasedatabase.app/idem'


async function getAll(){
    const response=await fetch(`${url}.json `)
    const result = await response.json()
    const item = Object.keys(result).map(id =>({id,...result[id]}))

    //console.log(result);

    return item
    
}

export default{
    getAll,
}