import React, { Component } from 'react';
import Card from '../Card';
import CardAddNew from '../CardAddNew';

import data from './data';
import './styles.css';

const getNewId = (items) => {
  if (items && items.length !== 0) {
    return Math.max.apply(null, items.map(v => v.id)) + 1 + '';
  }
  return '0';
}

class Cards extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddNew = this.handleAddNew.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.state = {
      items: data,
      isAddingNewItem: false,
      itemToAdd: {
        title: '',
        description: '',
      },
    }
  }

  handleDelete(id) {
    this.setState((prevStates) => ({
      items: prevStates.items.filter(x => x.id !== id)
    }));
  }

  handleAddNew() {
    this.setState({ isAddingNewItem: true });
  }

  handleSave() {
    this.setState((prevStates) => ({
      items: [...prevStates.items, {
        ...prevStates.itemToAdd,
        id: getNewId(prevStates.items)
      }],
      isAddingNewItem: false,
      itemToAdd: {
        title: '',
        description: '',
      },
    }));
  }

  handleFormChange(e) {
    const { name, value } = e.currentTarget;
    this.setState((prevStates) => ({
      itemToAdd: {
        ...prevStates.itemToAdd,
        [name]: value
      },
    }));
  }

  render() {
    return (
      <div className="cards">
        <button className="cards__addButton" onClick={this.handleAddNew}>
          Add
        </button>
        {
          this.state.isAddingNewItem && (
            <CardAddNew
              itemToAdd={this.state.itemToAdd}
              onSave={this.handleSave}
              onFormChange={this.handleFormChange}
            />
          )
        }
        {
          this.state.items.map((v) => (
            <Card
              key={v.id}
              id={v.id}
              title={v.title}
              description={v.description}
              onDelete={this.handleDelete}
            />
          ))
        }
      </div>
    );
  }
}

export default Cards;
