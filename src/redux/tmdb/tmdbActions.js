import {SET_SEARCH_INPUT, SET_SELECTED_MOVIE, SET_SEARCH_RESULTS, CLEAR_SELECTED_MOVIE} from './tmdbTypes';

export const setSearchTerm = (searchInput) => {
    return {
        type: SET_SEARCH_INPUT,
        payload: searchInput
    }
}

export const setSearchResults = (movies) => {
    return {
        type: SET_SEARCH_RESULTS,
        payload: movies
    }
}

export const setSelectedMovie = (movie) => {
    return {
        type: SET_SELECTED_MOVIE,
        payload: movie
    }
}

export const clearMovie = () => {
    return {
        type: CLEAR_SELECTED_MOVIE
    }
}

export const getSearchResults = str => {
    return async (dispatch) => {
        await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&query=${str}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(movies => dispatch(setSearchResults(movies)));
    }
}

export const setSeletedMovieRequest = (movieId) => {
    return async (dispatch) => {
        const getMovie = await fetch(` https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`)
            .then(response => response.json())
        
        const getCredits = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`)
            .then(response => response.json())

        const movie = {...getCredits, ...getMovie}

        dispatch(setSelectedMovie(movie));
    }
}