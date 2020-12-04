import {SET_SEARCH_INPUT, SET_SELECTED_MOVIE, SET_SEARCH_RESULTS, CLEAR_SELECTED_MOVIE} from './tmdbTypes'

const initialState = {
    searchInput: '',
    searchResults: [],
    selectedMovie: {}
}

const tmdbReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SEARCH_INPUT:
            return {
                ...state,
                searchInput: action.payload
            }
        case SET_SELECTED_MOVIE:
            return {
                ...state,
                selectedMovie: action.payload
            }
        case SET_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: action.payload
            }
        case CLEAR_SELECTED_MOVIE:
            return {
                ...state,
                selectedMovie: {}
            }
        default:
            return state
    }
}

export default tmdbReducer;