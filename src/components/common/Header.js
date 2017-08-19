import React, {PropTypes} from 'react';
import {Link , IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/courses">Courses</Link>
      {" | "}
      <Link to="/about">About</Link>
      {loading && <LoadingDots interval={100} dots={20} />}
    </nav>
  );
};

export default Header;
