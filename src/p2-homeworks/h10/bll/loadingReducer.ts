
export type InitStateType = {
    isLoading: boolean
}

export type ActionType = ReturnType<typeof loadingAC>

const initState = {
    isLoading: false
}

export const loadingReducer = (state: InitStateType = initState, action: ActionType): InitStateType => { // fix any
    switch (action.type) {
        case 'TOGGLE_IS_LOADING': {
            return {
                ...state,
                isLoading: action.isLoading,
            }
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean) => {
    return {
        type: 'TOGGLE_IS_LOADING',
        isLoading
    } as const
} // fix any