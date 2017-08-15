export const modalReducer = (state, action) => {
  if (!(action.type && action.type.startsWith('REDUX_MODAL/'))) {
    return state;
  }

  const { payload: { name } } = action;
  const open = action.type.includes('OPEN') ||
    (action.type.includes('TOGGLE') && !state[name].open);
  return {
    ...state,
    [name]: {
      ...state[name],
      open,
    },
  };
};
