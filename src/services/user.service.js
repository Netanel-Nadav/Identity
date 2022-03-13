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
    if (!users.length) {
        users = await storageService.postMany(STORAGE_KEY, gUsers)
    }
    if (filterBy) {
        const { firstName, lastName, id } = filterBy
        return users.filter(user => (user.id.toString().includes(id)
        && user.firstName.toLowerCase().includes(firstName.toLowerCase())
        && user.lastName.toLowerCase().includes(lastName.toLowerCase())))
    }
    return users
}

async function getById(id) {
    const user = await storageService.get(STORAGE_KEY, id)
    return user
}

async function add(newEntity) {
    const users = await storageService.query(STORAGE_KEY)
    const user = users.find(user => {
        if (user.id === newEntity.id) throw new Error('ID is already taken')
    })
    newEntity.imgUrl = `https://robohash.org/${newEntity.id}`
    const newUser = await storageService.post(STORAGE_KEY, newEntity)

    return newUser
}

async function remove(entityId) {
    await storageService.remove(STORAGE_KEY, entityId)
}

async function update(entityToUpdate) {
    const updatedUser = await storageService.put(STORAGE_KEY, entityToUpdate)
    return updatedUser
}