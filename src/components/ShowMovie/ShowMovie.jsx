import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { setSeletedMovieRequest, getScoreRequest } from '../../redux';
import StarRatingDisplay from '../StarRatingDisplay/StarRatingDisplay';
import Rating from '../Rating/Rating';

const ShowMovie = (props) => {

    const {selectedMovie, setSeletedMovieRequest, getScoreRequest} = props;
    const {scoreInfo} = props;

    const fiveStarScore = scoreInfo.upvotes / (scoreInfo.upvotes + scoreInfo.downvotes)*5;

    const backDrop = selectedMovie.backdrop_path ? `http://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}` : '/mr-no-backdrop.png';

    useEffect(()=>{
        getScoreRequest(props.match.params.id);
        setSeletedMovieRequest(props.match.params.id);        
    }, [getScoreRequest, setSeletedMovieRequest, props.match.params.id]);
    
    useEffect(()=> {
        document.title = `${selectedMovie.title} |  The movie expert`
        document.body.style.background = `rgba(0, 0, 0, 0.95 ) url(${backDrop}) no-repeat center / cover`
        document.body.style.backgroundAttachment = 'fixed';
    }, [selectedMovie.backdrop_path, backDrop]);

    const getDirectors = () => {
        if(selectedMovie.crew){
            let directors = []
            selectedMovie.crew.forEach(entry => {
                if(entry.job === 'Director'){
                    directors.push(entry.name)
                }
            })
            return directors.join(", ");
        } else {
            return null;
        }
    }

    return (
        <>
            <div className="container text-center">
                <Link to="/" className="top-logo">
                    <img src="/mr-logo.png" alt="The movie rater"/>
                </Link>
            </div>
            <div className="container movie-container d-flex flex-column justify-content-between">
                <h1 className="movie-title">{selectedMovie.title}</h1>
        <h6 className="text-center">{selectedMovie.release_date ? `Release date: ${selectedMovie.release_date.split("-")[0]}` : null} - Director: {getDirectors()}</h6>
                <div className="col-md-4 offset-md-4 text-center">
                    <img className="img-fluid" src={selectedMovie.poster_path ? `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}` : '/no-image.jpg'} alt=""/>
                    <Rating tmdb_id={scoreInfo.tmdb_id} title={scoreInfo.title} />
                </div>
                <div className="rating-container">
                    <StarRatingDisplay score={scoreInfo.upvotes > 0 || scoreInfo.upvotes < scoreInfo.downvotes ? fiveStarScore.toFixed(2) : 1} />
                </div>
                <div className="synopsis-container">
                    <p className="movie-synopsis">{selectedMovie.overview}</p>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedMovie: state.tmdbSearch.selectedMovie,
        scoreInfo: state.scoreInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSeletedMovieRequest: (id) => dispatch(setSeletedMovieRequest(id)),
        getScoreRequest: (id) => dispatch(getScoreRequest(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowMovie)
