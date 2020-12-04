import React from 'react';
import { connect } from 'react-redux';
import { addMovieToDatabase, addUpvoteRequest, addDownvoteRequest } from '../../redux';

const Rating = (props) => {

    const {upvotes, downvotes, tmdb_id, title} = props.scoreInfo;
    const {selectedMovie, addMovieToDatabase, addUpvoteRequest, addDownvoteRequest} = props;

    const upvoteHandler = async (movieId, movieTitle) => {
        if(!title) {
            await addMovieToDatabase(movieId, movieTitle);
            await addUpvoteRequest(movieId);
        } else {
            await addUpvoteRequest(movieId);
        }
    }

    const downvoteHandler = async (movieId, movieTitle) => {
        if(!title) {
            await addMovieToDatabase(movieId, movieTitle);
            await addDownvoteRequest(movieId);
        } else {
            await addDownvoteRequest(movieId);
        }
    }

    return (
        <div className="row px-3 d-flex flex-row justify-content-center vote-container">
            <button className="col-md-5 btn btn-danger mt-3 mr-auto" name="thumbsup" onClick={() => upvoteHandler(selectedMovie.id, selectedMovie.title)}>👍 Upvote ({title ? upvotes : 0})</button>
            <button className="col-md-5 btn btn-danger mt-3 ml-auto" onClick={()=> downvoteHandler(selectedMovie.id, selectedMovie.title)} >👎 Downvote ({title ? downvotes : 0})</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        scoreInfo: state.scoreInfo,
        selectedMovie: state.tmdbSearch.selectedMovie
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMovieToDatabase: (id, title) => dispatch(addMovieToDatabase(id, title)),
        addUpvoteRequest: (id) => dispatch(addUpvoteRequest(id)),
        addDownvoteRequest: (id) => dispatch(addDownvoteRequest(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Rating)
