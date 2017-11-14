import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-fontawesome';

import './styles.css';
import image from './dummy_image.jpg';

const CardAddNew = props => {
  return (
    <div className="cardAddNew">
      <img src={image} alt="A dummy one" className="cardAddNew_image"/>
      <div className="cardAddNew__textBlock">
        <input className="cardAddNew__textBlock__title" value={props.itemToAdd.title}/>
        ​<textarea className="cardAddNew_textBlock__description" rows="3" cols="50">{props.itemToAdd.description}</textarea>
      </div>
      <div className="cardAddNew_button">
        <Icon
          name="save"
          size="2x"
          onClick={() => props.onSave() }
        />
      </div>
    </div>
  );
};

CardAddNew.propTypes = {
  itemToAdd: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  onSave: PropTypes.func.isRequired,
};

export default CardAddNew;