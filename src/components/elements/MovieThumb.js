import React from 'react';
import { StyledMovieThumb } from '../styles/StyledMovieThumb';
import { Link } from '@reach/router';
const MovieThumb = ({ image, movieId, clickable }) => {
  if (image) {
    return (
      <StyledMovieThumb>
        {clickable ? (
          <Link to={`/${movieId}`}>
            <img className="clickable" src={image} alt="moviethumb"></img>
          </Link>
        ) : (
          <img src={image} alt="moviethumb"></img>
        )}
      </StyledMovieThumb>
    );
  }
  return null;
};

export default MovieThumb;
