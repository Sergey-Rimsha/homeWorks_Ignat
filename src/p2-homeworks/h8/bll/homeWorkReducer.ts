import {InitialPeopleType} from "../HW8";

export type ActionType = {
    type: 'sort' | 'check'
    payload: 'up' | 'down' | number
}


export const homeWorkReducer = (state: InitialPeopleType, action: ActionType): InitialPeopleType => {
    // need to fix any
    switch (action.type) {
        case 'sort':
            
            let sortState = [...state].sort((a, b) => a.name > b.name ? 1 : -1);

            if (action.payload === 'down') {
                return sortState.reverse();
            } else {
                return sortState;
            }

            // need to fix
        case 'check': 
            // need to fix
            return state.filter((user) => user.age > action.payload)

        default: return state
    }
}