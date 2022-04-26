
export type StateThemeType = Array<ThemeType>

export type ThemeType = {
    name: string
    isActive: boolean
}

export type ActionThemeType = ReturnType<typeof changeThemeC>

const initState: StateThemeType = [
    {name: 'dark', isActive: false},
    {name: 'red', isActive: true},
    {name: 'some', isActive: false},
    {name: 'blue', isActive: false},
]


// theme: ['dark', 'red', 'some']

export const themeReducer = (state:StateThemeType = initState, action: ActionThemeType): StateThemeType => { // fix any
    switch (action.type) {
        case "THEME_IS_ACTIVE": {
            return [
            ...state.map((theme) => {
                    if (theme.name === action.theme) {
                        return {...theme, isActive: true}
                    } else {
                        return {...theme, isActive: false}
                    }
                })
            ]
        }
        default: return state;
    }
};

export const changeThemeC = (theme: string) => {
    return {
        type: 'THEME_IS_ACTIVE',
        theme
    } as const
}; // fix any