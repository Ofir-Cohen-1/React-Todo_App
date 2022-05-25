import React, { Component } from 'react';

export default class Item extends Component {
  //? controlled state ↓
  state = { task: '' };
  handleOnChange = ({ target }) => {
    this.setState({ task: target.value });
  };
  render() {
    return (
      <div className='item'>
        <input onChange={this.handleOnChange} value={this.state.task} />

        <button
          onClick={() =>
            this.props.handleUpdate(this.props.id, this.state.task)
          }
        >
          Update
        </button>

        <button
          onClick={() => {
            this.props.handleDelete(this.props.id);
          }}
        >
          Delete
        </button>
        <p>{this.props.task}</p>
      </div>
    );
  }
}
