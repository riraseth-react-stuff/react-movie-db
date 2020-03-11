import React from 'react';
import { Link } from '@reach/router';
import RMDBlogo from '../images/reactMovie_logo.png';
import TMDBLogo from '../images/tmdb_logo.svg';

import {
  StyledHeader,
  StyledRMDBLogo,
  StyledTMDBLogo
} from '../styles/StyledHeader';

const Header = props => {
  return (
    <StyledHeader>
      <div className="header-content">
        <Link to="/">
          <StyledRMDBLogo src={RMDBlogo} alt="rmdb-logo" />
        </Link>
        <StyledTMDBLogo src={TMDBLogo} alt="tmbdb-logo" />
      </div>
    </StyledHeader>
  );
};

Header.propTypes = {};

export default Header;
