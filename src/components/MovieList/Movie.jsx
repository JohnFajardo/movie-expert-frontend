import React from 'react'
import {Link} from 'react-router-dom';

const Movie = (props) => {

    const {movie} = props;

    return (
        <div key={movie.id} className="col-md-2 my-3 poster">
            <Link to={{pathname: `/movies/${movie.id}`}}>
            <figure>
                <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'no-image.jpg'} alt={movie.title} className="img-fluid m-auto" />
                <figcaption>{movie.title}</figcaption>
            </figure>
            </Link>
        </div>
    )
}

export default Movie;
