const url = 'https://softuni-hood-shop-default-rtdb.europe-west1.firebasedatabase.app/idem'


async function getAll(){
    const response=await fetch(`${url}.json `)
    const result = await response.json()
    const item = Object.keys(result).map(id =>({id,...result[id]}))

    //console.log(result);

    return item
    
}

async function getOne(itemId) {
    const response = await fetch(`${url}/${itemId}.json`)
    const data = await response.json()

    return data
}
async function create(data) {
    const response = await fetch(`${url}.json`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })
    const result = await response.json()

    return result
}

async function remove(itemId) {
    const response = await fetch(`${url}/${itemId}.json`,{
        method: 'DELETE'
    })
    if(!response.ok){
        throw new Error('Failed to delete item')
    }
}

export default{
    getAll,
    create,
    getOne,
    remove
}