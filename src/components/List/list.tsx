import React, { FC } from 'react';
import ListItem from '../ListItem/list-item';
import { List as MuiList } from '@mui/material';
import { useAppSelector } from '../../hooks/redux-hooks';
import { selectTodosByFilter } from '../../store/selectors';

export const List: FC = () => {
  const todos = useAppSelector(selectTodosByFilter);

  return (
    <MuiList>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          id={todo.id}
          isDone={todo.completed}
          text={todo.title}
        />
      ))}
    </MuiList>
  );
};
