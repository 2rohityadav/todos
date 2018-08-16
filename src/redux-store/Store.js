// constant
const ADD_ITEMS = "ADD_ITEMS"; //// its comman practice to put in variables so we don't need to use string in every places
const CLEAR_LIST = "CLEAR_LIST";
const DELETE_ITEM = "DELETE_ITEM";

// Action creators
export const actions = {
  addItems(newItem) {
    return {
      type: ADD_ITEMS,
      newItem
    };
  },

  clearList() {
    return {
      type: CLEAR_LIST
    };
  },

  deleteItem(item) {
    return {
      type: "DELETE_ITEM",
      item
    };
  }
};

const initialState = {
  todos: [],
  error: undefined
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEMS: {
      return {
        ...state,
        todos: [...state.todos, action.newItem] // action.newItem is payload
      };
    }
    case CLEAR_LIST: {
      return {
        ...state,
        todos: []
      };
    }
    case DELETE_ITEM: {
      const todos = [...state.todos]; // copy the array
      todos.splice(action.index, 1);
      return {
        ...state,
        todos
      };
    }

    default:
      return state;
  }
};
