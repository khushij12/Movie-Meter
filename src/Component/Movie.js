import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar} from '@fortawesome/free-regular-svg-icons'
import { faStarHalfAlt} from "@fortawesome/free-solid-svg-icons";
library.add(fasFaStar, farFaStar, faStarHalfAlt)




//const defaultPlaceholderImage="https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg";
function Movie({movie}) {
    //const Poster=(movie.poster_path===null)?defaultPlaceholderImage:"https://image.tmdb.org/t/p/w500".concat(movie.poster_path);
    const Poster="https://image.tmdb.org/t/p/w500".concat(movie.poster_path)
    const year=[]
    
    if (movie.release_date !== undefined)
    year.push(String(movie.release_date.substring(0, 4)))

    var rating=[]
    if(movie.vote_average)
    {
        var x=movie.vote_average*10
        for(var i=0;i<5;i++)
        {
            if(x>=20)
            rating.push(fasFaStar);
            else if(x>=10)
            rating.push(faStarHalfAlt);
            else
            rating.push(farFaStar);

            x-=20;
        }

    }
    return (
        <div className="movie">
            <center><h3>{movie.title}</h3>
            <div className="tooltip">
                <img src={Poster} alt="Not Available" ></img>
                <span className="overview">{movie.overview}</span>
            </div>
            <p style={{fontSize:"small"}}>Year: {year[0]}</p>
            <div className="ratings">
            <FontAwesomeIcon icon={rating[0]}/>
            <FontAwesomeIcon icon={rating[1]}/>
            <FontAwesomeIcon icon={rating[2]}/>
            <FontAwesomeIcon icon={rating[3]}/>
            <FontAwesomeIcon icon={rating[4]}/>
            </div>
            </center>
        </div>
    )
}

export default Movie
