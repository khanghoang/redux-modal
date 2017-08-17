export const isModalOpenSelector = name => state => {
  if (!(state.modals && state.modals[name])) return false;
  return !!state.modals[name].open;
}

export const portalSelector = state => {
  if (!state.modals) {
    if (__DEV__) {
      throw new Error('You need to register portal modal reducer to root reducer');
    }

    return {};
  }

  return state.modals;
};
