import React, {useEffect, useCallback} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import _ from 'lodash';
import {setSearchTerm, clearScore, getSearchResults, clearMovie} from '../../redux';
import Movies from './Movies';

const MovieList = (props) => {

    const {setSearchTerm, getSearchResults, searchResults, searchInput, clearScore, clearMovie} = props;

    const onInputChange = event => {
        setSearchTerm(event.target.value);
        debouncedSearch(event.target.value);
    }

    useEffect(()=> {
        document.title = 'The movie expert'
        clearMovie()
        clearScore();
    }, [clearMovie, clearScore]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedSearch = useCallback(
        _.debounce((value) => {
            getSearchResults(value)
        }, 500), []
    );

    document.body.style.background = null;

    return (
        <div className="container text-center">
            <Link to="/" className="top-logo">
                <img src="/mr-logo.png" alt="The movie rater"/>
            </Link>
            <input type="text" onChange={onInputChange} value={searchInput} className="form-control movie-search" placeholder="Search for a movie..." />
            <Movies movies={ searchResults.results ? searchResults.results : null } />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        searchInput: state.tmdbSearch.searchInput,
        searchResults: state.tmdbSearch.searchResults
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setSearchTerm: (term) => dispatch(setSearchTerm(term)),
        getSearchResults: (term) => dispatch(getSearchResults(term)),
        clearScore: () => dispatch(clearScore()),
        clearMovie: () => dispatch(clearMovie())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
