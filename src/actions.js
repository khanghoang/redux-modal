export const TOGGLE = 'REDUX_MODAL/TOGGLE';
export const OPEN = 'REDUX_MODAL/OPEN';
export const CLOSE = 'REDUX_MODAL/CLOSE';

export const toggle = name => ({
  type: TOGGLE,
  payload: {
    name,
  },
});

export const close = name => ({
  type: CLOSE,
  payload: {
    name,
  },
});

export const open = name => ({
  type: OPEN,
  payload: {
    name,
  },
});
