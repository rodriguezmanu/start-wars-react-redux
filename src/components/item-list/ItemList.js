import React from 'react';
import PropTypes from 'prop-types';

const ItemList = ({ title, name }) => (
  <React.Fragment>
    <p>
      <b>{title}: </b>
      {name}
    </p>
  </React.Fragment>
);

ItemList.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ItemList;
