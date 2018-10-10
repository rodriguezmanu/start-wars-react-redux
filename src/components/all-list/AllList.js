import React from 'react';
import PropTypes from 'prop-types';

const AllList = ({ title, data }) => (
  <React.Fragment>
    <h3>{title}</h3>
    <ul>
      {data.map(item => (
        <li key={item.name}>{item.name}</li> // add link to each
      ))}
    </ul>
  </React.Fragment>
);

AllList.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.shape({}).isRequired,
};

export default AllList;
