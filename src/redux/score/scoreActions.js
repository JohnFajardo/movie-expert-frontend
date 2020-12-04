import {GET_SCORE, CLEAR_SCORE} from './scoreTypes';

export const getScore = (movie) => {
    return {
        type: GET_SCORE,
        payload: movie
    }
}

export const clearScore = () => {
    console.log('Clearing score');
    return {
        type: CLEAR_SCORE,
    }
}

export const getScoreRequest = (tmdb_id) => {
    return async (dispatch) => {
        await fetch(`http://localhost:3000/movies/${tmdb_id}`)
        .then(response => response.json())
        .then(movie => {
            if(movie === null) {
                console.log('No movie found');
                dispatch(clearScore());
            } else {
                console.log('Movie found');
                dispatch(getScore(movie));
                return movie;
            }
        });
    }
}

export const addMovieToDatabase = (tmdb_id, title) => {
    return async (dispatch) => {
        await fetch(`http://localhost:3000/movies/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
                'Accept': 'Application/json'
            },
            body: JSON.stringify({
                'movie': {
                    'tmdb_id': tmdb_id,
                    'title': title
                }
            })
        })
        .then(response => response.json())
        .then(movie => dispatch(getScore(movie)));
    }
}

export const addUpvoteRequest = (tmdb_id) => {
    return async (dispatch) => {
        await fetch(`http://localhost:3000/upvotes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
                'Accept': 'Application/json'
            },
            body: JSON.stringify({
                'upvote': {
                    'movie_tmdb_id': tmdb_id,
                }
            })
        })
        .then(response => response.json())
        .then(upvote => dispatch(getScoreRequest(upvote.movie_tmdb_id)))
    }
}

export const addDownvoteRequest = (tmdb_id) => {
    return async (dispatch) => {
        await fetch(`http://localhost:3000/downvotes`, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json',
                'Accept': 'Application/json'
            },
            body: JSON.stringify({
                'downvote': {
                    'movie_tmdb_id': tmdb_id,
                }
            })
        })
        .then(response => response.json())
        .then(downvote => dispatch(getScoreRequest(downvote.movie_tmdb_id)))
    }
}