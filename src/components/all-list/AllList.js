import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllList = ({ title, data, isLink }) => (
  <React.Fragment>
    <h3>{title}</h3>
    <ul>
      {data.map(item => (
        <li key={item.name}>
          {isLink ? (
            <Link to={`/character/${item.url.replace(/\D/g, '')}`}>{item.name}</Link>
          ) : (
            <div>{item.name}</div>
          )}
        </li>
      ))}
    </ul>
  </React.Fragment>
);

AllList.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLink: PropTypes.bool,
};

AllList.defaultProps = {
  isLink: false,
};

export default AllList;
