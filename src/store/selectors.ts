import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './index';
import { Todo, Filter } from '../types';

const selectAllTodos = (state: RootState): Todo[] => state.todos.list;
const selectActiveFilter = (state: RootState): string => state.todos.filter;

const todosCountersSelector = createSelector([selectAllTodos], (todos) => {
  const all = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const notCompleted = all - completed;

  return { all, completed, notCompleted };
});

const getActiveFilter = createSelector(
  [selectActiveFilter],
  (filter) => filter,
);

const selectTodosByFilter = createSelector(
  [selectAllTodos, selectActiveFilter],
  (allTodos, activeFilter) => {
    if (activeFilter === Filter.All) return allTodos;

    if (activeFilter === Filter.Completed) {
      return allTodos.filter((todo) => todo.completed);
    }

    return allTodos.filter((todo) => !todo.completed);
  },
);

export { selectTodosByFilter, todosCountersSelector, getActiveFilter };
