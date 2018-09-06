import {ADD_FAV} from '../actions/index'
import {REMOVE_FAV} from '../actions/index'

export default function addToFavorite(state=[], action){
    switch(action.type){
        case ADD_FAV :

        let favoriteMovieArray =[...state,action.movie]
        return favoriteMovieArray


        case REMOVE_FAV :
        favoriteMovieArray = state.filter((item)=> item.id !== action.movie.id)
        return favoriteMovieArray

        default :
        return state

    }
}