import React, { Component } from "react";
import List from "./List";
import AddItems from "./AddItems";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  // Add Items
  addItems = item => {
    if (!item) {
      return "Please enter valid item";
    } else if (this.state.todos.indexOf(item) > -1) {
      return "Item already in the list options";
    }

    this.setState({
      todos: [...this.state.todos, item]
    });
    console.log("heee", this.state.todos);
  };

  // Remove Item
  removeItem = item => {
    console.log("remove item", item);
    this.setState({
      todos: this.state.todos.filter(fItem => {
        return fItem !== item;
      })
    });
  };

  // Clear All Items
  clearList = () => {
    this.setState({
      todos: []
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <React.Fragment>
        <AddItems addItems={this.addItems} hasItem={todos.length > 0} />
        <List
          todos={todos}
          hasItem={todos.length > 0}
          removeItem={this.removeItem}
          clearList={this.clearList}
        />
      </React.Fragment>
    );
  }
}

export default App;
