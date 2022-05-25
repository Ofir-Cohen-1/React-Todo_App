import { Component } from "react";
import Item from "./components/TodoItem";
import { data } from "./Data";

export default class App extends Component {
  state = { arrOfObj: [], taskValue: "" };

  //! CREATE
  handleCreate = () => {
    const newTask = {
      task: this.state.taskValue,
      id: Math.random(),
    };

    this.setState((prev) => {
      return { arrOfObj: [...prev.arrOfObj, newTask] }; 
    });
  };

  //! READ
  componentDidMount() {
    this.setState({ arrOfObj: data }, () => {});
  }

  // //! UPDATE
  handleUpdate = (id, newTask) => {
    const newArrOfObj = this.state.arrOfObj.map((obj) => {
      if (obj.id === id) {
        return { ...obj, task: newTask };
      }
      return obj;
    });
    console.log(newArrOfObj);
    this.setState({ arrOfObj: newArrOfObj });
  };

  //! DELETE
  handleDelete = (id) => {
    const arrOfObjAfterDelete = this.state.arrOfObj.filter((obj) => {
      return obj.id !== id;
    });
    this.setState({ arrOfObj: arrOfObjAfterDelete });
  };

  //? Controlled add item input
  handleOnChange = (event) => {
    this.setState({ taskValue: event.target.value });
  };

  //? Painting data on the screen by calling Item component
  insertData = () => {
    return this.state.arrOfObj.map((obj) => (
      <Item
        handleUpdate={this.handleUpdate}
        handleDelete={this.handleDelete}
        key={obj.id}
        task={obj.task}
        id={obj.id}
      />
    ));
  };
  render() {
    return (
      <div className="wrapper">
        <label>Add Item</label>
        <input
          value={this.state.taskValue}
          onChange={this.handleOnChange}
        />
        <button onClick={this.handleCreate}>Add</button>
        <div className="item-wrapper">{this.insertData()}</div>
      </div>
    );
  }
}
