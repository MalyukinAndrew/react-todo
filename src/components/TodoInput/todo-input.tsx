import React, { useEffect, useState } from 'react';
import { Alert, Box, Button, Fade, TextField } from '@mui/material';
import { classes } from './styles';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { addTodo } from '../../store/todo-slice';

export const TodoInput: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  }, [error]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value.length <= 160) {
      setInputValue(event.target.value);
    } else {
      setError(true);
    }
  };

  const enterKeyHandler = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      onCreate();
    }
  };

  const onCreate = (): void => {
    if (!inputValue) return;

    dispatch(addTodo(inputValue));

    setInputValue('');
  };

  return (
    <>
      <Box sx={classes.inputWrapper}>
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          onChange={changeHandler}
          label="Add a new todo (max 160 characters)"
          value={inputValue}
          onKeyDown={enterKeyHandler}
        />

        <Button
          sx={classes.addButton}
          variant="contained"
          color="primary"
          onClick={onCreate}
        >
          Create
        </Button>
      </Box>

      <Fade in={error}>
        <Alert sx={classes.warning} severity="warning">
          Todo must be less or equal to 160 characters
        </Alert>
      </Fade>
    </>
  );
};

export default TodoInput;
