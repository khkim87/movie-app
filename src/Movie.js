import PropTypes from "prop-types";
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'

function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie">
            <div className="Movie_Column">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie_Column">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index}/>)}
                </div>
                <p className="Movie_Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </p>
            </div>
        </div>
    );
}

function MoviePoster({poster, alt}){
    return(
      <img src={poster} alt={alt} title={alt} className="Movie_Poster"></img>
    );
}

function MovieGenre({genre}){
    return(
        <spen className="Movie_Genres">{genre}</spen>
    )
}

Movie.propTypes={
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;