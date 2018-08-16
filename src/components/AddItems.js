import React, { Component } from "react";

class AddItems extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     error: undefined
  //   };
  // }

  handleAddItems = e => {
    e.preventDefault();

    const inputTxt = e.target.elements.inputvalue.value.trim();
    const error = this.props.addItems(inputTxt);

    // this.setState({
    //   //error: error  old fashion
    //   error
    // });

    if (!error) {
      e.target.elements.inputvalue.value = "";
    }
  };
  render() {
    const { hasItem, error } = this.props;

    return (
      <React.Fragment>
        {error && hasItem && <p>{error}</p>}

        <form onSubmit={this.handleAddItems}>
          <input type="text" name="inputvalue" />
          <button>Add Items</button>
        </form>
      </React.Fragment>
    );
  }
}

export default AddItems;
