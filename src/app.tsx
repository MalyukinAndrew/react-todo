import React from 'react';
import { Container, Typography } from '@mui/material';
import TodoInput from './components/TodoInput/todo-input';
import TodoFilters from './components/TodoFilters/todo-filters';
import { classes } from './styles';
import { List } from './components/List/list';

function App(): React.ReactElement {
  return (
    <Container>
      <Typography sx={classes.title} variant="h1">
        ToDo List
      </Typography>

      <TodoInput />

      <TodoFilters />

      <List />
    </Container>
  );
}

export default App;
