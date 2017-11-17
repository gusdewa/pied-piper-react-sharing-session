import React from 'react';
import PropTypes from 'prop-types';

const Widget = props => {
  return (
    <div>
      {`Total number of cards: ${props.items.length}`}
    </div>
  );
};

Widget.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Widget;
