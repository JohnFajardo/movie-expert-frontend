import React from 'react';
import {FaStar, FaStarHalf} from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

function StarRatingDisplay(props) {

    const {score} = props;

    const stars = score => {
        return (
            [...Array(5)].map((el, i) => {
                return i < score && i+1 > score ?
                <div key={uuidv4()} className="half-star">
                    <span key ={uuidv4()} style={{ display: 'inline-block', position: 'relative', height: '30px' }}>
                        <FaStarHalf textAnchor="middle" alignmentBaseline="middle" key={uuidv4()} className="fa-stack-1x" color="#ffc107" size={30} style={{position: 'relative', 'zIndex': '10'}} />
                        <FaStar
                            key={uuidv4()} className="fa-stack-1x" color="#e4e5e9" size={30}
                            textAnchor="middle"
                            alignmentBaseline="middle"
                            style={{ position: 'absolute', left: '0', bottom: '0', 'zIndex': '5' }}
                        />
                    </span>
                </div>
                :
                i < score ?
                <FaStar key={uuidv4()} size={30} color="#ffc107" />
                :
                <FaStar key={uuidv4()} size={30} color="#e4e5e9"/>;
                
            })
        );
    }

    return (
        <div className="star-rating">
            {stars(score)} <span className="score-display-light"> &nbsp; {score}</span>
        </div>
    )
}

export default StarRatingDisplay;
