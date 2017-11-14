import React, { Component } from 'react';
import Card from '../Card';
import CardAddNew from '../CardAddNew';

import data from './data';
import './styles.css';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddNew = this.handleAddNew.bind(this);
    this.handleSave = this.handleSave.bind(this);
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
    const items = this.state.items.filter(x => x.id !== id);
    this.setState({
      items
    });
  }

  handleAddNew() {
    this.setState({
      isAddingNewItem: true,
    });
  }

  handleSave() {
    const { title, description } = this.state.itemToAdd;
    const items = [...this.state.items, {
      id: Math.max.apply(null, this.state.items.map(v => v.id)) + 1 + '',
      title,
      description
    }];

    this.setState({
      items
    });
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
