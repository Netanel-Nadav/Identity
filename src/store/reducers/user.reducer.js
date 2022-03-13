

const initialState = {
    users: null
}


export function userReducer(state = initialState, action) {

    switch (action.type) {
        case 'SET_USERS':
            return {
            ...state,
            users: [...action.users]
        }
        case 'REMOVE_USER':
            return {
                ...state, 
                users: state.users.filter(user => user._id !== action.userId)
            }
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.addedUser]
            }
        case 'UPDATE_USER':
            return {
                ...state,
                users: state.users.map(user => (user.id === action.updatedUser.id ? action.updatedUser : user))
            }
        default:
            return state
    }
}