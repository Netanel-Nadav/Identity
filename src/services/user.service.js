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
    
    return users
}

async function getById(id) {

}

async function add(newEntity) {

}

async function remove(entityId) {

}

async function update(entityToUpdate) {

}