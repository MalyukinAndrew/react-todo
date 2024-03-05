import React from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { classes } from './styles';
import { setFilter } from '../../store/todo-slice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { Filter } from '../../types';
import { getActiveFilter, todosCountersSelector } from '../../store/selectors';

const TodoFilters: React.FC = () => {
  const filter = useAppSelector(getActiveFilter);
  const { all, completed, notCompleted } = useAppSelector(
    todosCountersSelector,
  );

  const dispatch = useAppDispatch();

  const handleAllClick = (): void => {
    dispatch(setFilter(Filter.All));
  };
  const handleCompletedClick = (): void => {
    dispatch(setFilter(Filter.Completed));
  };
  const handleNotCompletedClick = (): void => {
    dispatch(setFilter(Filter.NotCompleted));
  };

  return (
    <ButtonGroup sx={classes.buttons} size="small" color="primary">
      <Button
        variant={filter === Filter.All ? 'contained' : 'outlined'}
        onClick={handleAllClick}
      >
        <span>All ({all})</span>
      </Button>

      <Button
        variant={filter === Filter.Completed ? 'contained' : 'outlined'}
        onClick={handleCompletedClick}
      >
        <span>Completed ({completed})</span>
      </Button>

      <Button
        variant={filter === Filter.NotCompleted ? 'contained' : 'outlined'}
        onClick={handleNotCompletedClick}
      >
        <span>Not Completed ({notCompleted})</span>
      </Button>
    </ButtonGroup>
  );
};

export default TodoFilters;
