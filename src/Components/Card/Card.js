import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-fontawesome';

import './styles.css';
import image from './dummy_image.jpg';

const Card = props => {
  return (
    <div className="card">
      <img src={image} alt="A dummy one" className="card__image"/>
      <div className="card__textBlock">
        <h2 className="card__textBlock__title">{props.title}</h2>
        <article className="card__textBlock__description">{props.description}</article>
      </div>
      <div className="card__button">
        <Icon
          name="close"
          size="2x"
          onClick={() => props.onDelete(props.id) }
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,  
};

export default Card;
