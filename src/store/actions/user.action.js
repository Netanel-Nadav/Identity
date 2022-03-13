import { userService } from "../../services/user.service";

export function loadUsers(filterBy) {
    return async (dispatch) => {
        try {
            const users = await userService.query(filterBy)
            const action = {type: 'SET_USERS', users}
            dispatch(action)
        } catch (err) {
            console.log('Couldn\'t load users', err);
        }
    }
}

export function removeUser(userId) {
    return async (dispatch) => {
        try {
            await userService.remove(userId)
            const action = {type: 'REMOVE_USER', userId}
            dispatch(action)
        } catch (err) {
            console.log('Couldn\'t remove user', err);
        }
    }
}

export function addUser(newUser) {
    return async (dispatch) => {
        try {
            const addedUser = await userService.add(newUser)
            const action = {type: 'ADD_USER', addedUser}
            dispatch(action)
        } catch (err) {
            console.log('Couldn\'t add new user', err);
        }
    }
}

export function updateUser(userToUpdae) {
    return async (dispatch) => {
        try {
            const updatedUser = await userService.update(userToUpdae)
            const action = {type: 'UPDATE_USER', updatedUser}
            dispatch(action)
            return updatedUser
        } catch (err) {
            console.log('Coulden\'t update user', err);
        }
    }
}