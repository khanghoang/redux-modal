export const isModalOpenSelector = name => state => {
  if (!(state.modals && state.modals[name])) return false;
  return !!state.modals[name].open;
}

export const portalSelector = state => state.modals;
