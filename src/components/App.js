import React, { Component } from "react";
import { connect } from "react-redux";
import { actions } from "../redux-store/Store";
import List from "./List";
import AddItems from "./AddItems";

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { todos: [] };
  // }

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
    const { todos } = this.props;

    return (
      <React.Fragment>
        <AddItems addItems={this.props.onAddItems} hasItem={todos.length > 0} />
        <List
          todos={todos}
          hasItem={todos.length > 0}
          removeItem={this.props.onDeleteItem}
          clearList={this.props.onClearList}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddItems(newItem) {
      dispatch(actions.addItems(newItem));
    },
    onClearList() {
      dispatch(actions.clearList());
    },
    onDeleteItem(item) {
      dispatch(actions.deleteItem(item));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
