import {combineReducers} from 'redux';
import scoreReducer from './score/scoreReducer';
// import selectedMovie from './score/selectedMovieReducer';
import tmdbReducer from './tmdb/tmdbReducer'

const rootReducer = combineReducers({
    tmdbSearch: tmdbReducer,
    scoreInfo: scoreReducer
});

export default rootReducer;