import { storageService } from './async-storage.service'

const STORAGE_KEY = 'user'


export const userService = {
    query,
    getById,
    add,
    remove,
    update
}


const gUsers = [
    {
        id: 203338124,
        firstName: 'Netanel',
        lastName: 'Nadav',
        imgUrl: 'https://robohash.org/203338124'
    },
    {
        id: 203338234,
        firstName: 'James',
        lastName: 'Jonshon',
        imgUrl: 'https://robohash.org/203338234'
    },
    {
        id: 556338124,
        firstName: 'Dumble',
        lastName: 'Dor',
        imgUrl: 'https://robohash.org/556338124'
    },
]


async function query(filterBy = null) {
    let users = await storageService.query(STORAGE_KEY)
    if(!users.length) {
        users = gUsers
        await storageService.postMany(STORAGE_KEY, users)
    }
    if (filterBy) {
        return users.filter(user => (user.firstName.toLowerCase() === filterBy.firstName.toLowerCase() && user.lastName.toLowerCase() === filterBy.lastName.toLowerCase()))
    }
   
    return users
}

async function getById(id) {
    const user = await storageService.get(STORAGE_KEY, id)
    return user
}

async function add(newEntity) {
    
    const users = await storageService.query(STORAGE_KEY)
    console.log(users);
    const user = users.find(user => {
        if (user.id === newEntity.id) {
            throw new Error ('Cannot Sign up')
        } else {
            newEntity.imgUrl = `https://robohash.org/${newEntity.id}`
            const newUser = storageService.post(STORAGE_KEY, newEntity)
            return newUser
        }
    })
    return user
}

async function remove(entityId) {
    await storageService.remove(STORAGE_KEY, entityId)
}

async function update(entityToUpdate) {

}