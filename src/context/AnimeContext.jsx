import { createContext,useReducer } from 'react';

export const AnimeContext = createContext();

export const animeReducer = (state,action) => {
    switch(action.type) {
        case 'SHOW_SEASON': 
            return {
                isOpen: action.payload
            }
        default: 
            return state
    }
}

export const AnimeContextProvider = ({children}) => {
    
    const [state,dispatch] = useReducer(animeReducer,{
        isOpen: false
    })

    return (
        <AnimeContext.Provider value={{...state,dispatch}}>
            {children}
        </AnimeContext.Provider>
    )
}
