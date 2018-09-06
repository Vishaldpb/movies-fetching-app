import movies from './movies_reducer';
import { combineReducers } from 'redux';
import addToFavorite from './favorite_reducer'


const rootReducer = combineReducers({
	movies,
	addToFavorite
});

export default rootReducer;