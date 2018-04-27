import React, { Component } from 'react';

class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      text: ""
    };
  };

  handleChange = (event) => {
    let currentSearch = event.target.value;
    this.setState({
      text: currentSearch
    });
  };

  handleClick = () => {
    this.setState({
      items: [...this.state.items, this.state.text]
    });
  }

  render() {
    return (
      <div className="todolist">
        <input type="text" onChange={ this.handleChange } />
        <input type="submit" onClick={ this.handleClick } />
      </div>
    );
  }
}

export default ToDoList;
