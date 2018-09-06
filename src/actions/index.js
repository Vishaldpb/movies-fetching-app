export const MOVIES = "MOVIES"
export const ADD_FAV = 'ADD_FAV'
export const REMOVE_FAV = 'REMOVE_FAV'

export function movies(items){
    const action ={
        type : MOVIES,
        items
    }
    return action
}

export function addToFavorite(movie){
    const action ={
        type : ADD_FAV,
        movie
    }
    return action
}

export function removeFromFavorite(movie){
    const action ={
        type : REMOVE_FAV,
        movie
    }
    return action
}