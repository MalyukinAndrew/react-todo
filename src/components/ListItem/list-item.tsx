import React from 'react';
import {
  Typography,
  Checkbox,
  ListItem as MuiListItem,
  IconButton,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { classes } from './styles';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { removeTodo, toggleComplete } from '../../store/todo-slice';

interface ListItemProps {
  text: string;
  id: string;
  isDone: boolean;
}

const ListItem: React.FC<ListItemProps> = ({ text, id, isDone }) => {
  const dispatch = useAppDispatch();

  const handleDone = (): void => {
    dispatch(toggleComplete(id));
  };

  const handleDelete = (): void => {
    dispatch(removeTodo(id));
  };

  return (
    <MuiListItem sx={classes.listItem}>
      <Box sx={classes.text} onClick={handleDone}>
        <Checkbox color="primary" checked={isDone} />

        <Typography sx={classes.textValue} color={isDone ? 'primary' : ''}>
          {text}
        </Typography>
      </Box>

      <IconButton color="error" onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </MuiListItem>
  );
};

export default React.memo(ListItem);
