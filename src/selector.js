export const isModalOpenSelector = name => state => {
  if (!state[name]) return false;
  return !!state[name].open;
}

export const portalSelector = state => state.modals;
