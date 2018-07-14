import React from "react";

// List Component
const List = ({ todos, removeItem, clearList }) => {
  const ulStyle = { listStyleType: "none" };

  return (
    <React.Fragment>
      <button onClick={clearList}>Clear List</button>

      <ul style={ulStyle}>
        {todos.map((list, i) => {
          return (
            <li key={list}>
              {list}
              <button onClick={() => removeItem(list)}>x</button>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default List;
