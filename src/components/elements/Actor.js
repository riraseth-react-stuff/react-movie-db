import React from 'react';
import NoImage from '../images/no_image.jpg';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { StyledActor } from '../styles/StyledActor';

const Actor = ({ actor }) => {
  console.log(actor);
  return (
    <StyledActor>
      <img
        src={
          actor.profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            : NoImage
        }
        alt="actor thumb"
      />
      <span className="actor-name">{actor.name}</span>
      <div className="actor-character">{actor.character}</div>
    </StyledActor>
  );
};

export default Actor;
