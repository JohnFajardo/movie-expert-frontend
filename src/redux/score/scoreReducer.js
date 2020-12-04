import {GET_SCORE, CLEAR_SCORE} from './scoreTypes';

const initialState = {
    tmdb_id: 0,
    title: '',
    upvotes: 0,
    downvotes: 0
}

const scoreReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_SCORE:
            return {
                ...state,
                tmdb_id: action.payload.tmdb_id,
                title: action.payload.title,
                upvotes: action.payload.upvotes,
                downvotes: action.payload.downvotes
            }
        case CLEAR_SCORE:
            return {
                ...state,
                tmdb_id: 0,
                title: '',
                upvotes: 0,
                downvotes: 0
            }
        default:
            return state
    }
}

export default scoreReducer;
