export const classes = {
  textValue: {
    paddingLeft: '6px',
  },
  listItem: {
    width: '100%',
    display: 'flex',
    padding: '4px',
    border: '1px solid light-gray',
    borderRadius: '6px',
    transition: 'background .1s',
    '&:hover': {
      background: '#edeef0',
    },
  },
  text: {
    cursor: 'pointer',
    display: 'flex',
    width: 'calc(100% - 120px)',
    alignItems: 'center',
    flexGrow: 1,
  },
};
