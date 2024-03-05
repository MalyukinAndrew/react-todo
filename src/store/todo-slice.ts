import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Filter, Todo } from '../types';

type TodosState = {
  list: Todo[];
  filter: Filter;
};

const initialState: TodosState = {
  list: [{ id: '123asd', title: 'test', completed: false }],
  filter: Filter.All,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.list.push({
        id: new Date().toISOString(),
        title: action.payload,
        completed: false,
      });
    },

    toggleComplete(state, action: PayloadAction<string>) {
      state.list.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    },

    removeTodo(state, action: PayloadAction<string>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },

    setFilter(state, action: PayloadAction<Filter>) {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleComplete, removeTodo, setFilter } =
  todoSlice.actions;

export default todoSlice.reducer;
