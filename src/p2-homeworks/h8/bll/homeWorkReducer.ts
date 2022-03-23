import {InitialPeopleType} from "../HW8";

export type ActionType = {
    type: 'sort' | 'check' | 'age'
    payload: 'up' | 'down' | 18
}


export const homeWorkReducer = (state: InitialPeopleType, action: ActionType): InitialPeopleType => {
    console.log(action.type)
    // need to fix any
    switch (action.type) {
        case 'sort': {
           return [...state].sort((a, b) => a.name > b.name ? 1 : -1);
            // need to fix
        }
        case 'check': {
            // need to fix

            return [...state].sort((a, b) => a.name > b.name ? -1 : 1);
        }

        case 'age': {
            return state.filter(user => user.age > action.payload)
        }
        // default: return state
    }
}