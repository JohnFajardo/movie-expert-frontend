import React from 'react'
import Movie from './Movie';

const Movies = (props) => {

    const {movies} = props;

    return movies ? (<div className="row">
        {movies.map(movie => {
            return <Movie key={movie.id} movie={movie} />
        })}
        
        </div>
    ) : null;
}

export default Movies;
