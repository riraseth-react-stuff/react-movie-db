import React from 'react';

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
        <StyledRMDBLogo src={RMDBlogo} alt="rmdb-logo" />
        <StyledTMDBLogo src={TMDBLogo} alt="tmbdb-logo" />
      </div>
    </StyledHeader>
  );
};

Header.propTypes = {};

export default Header;
