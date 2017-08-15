export const isModalOpenSelector = name => state => {
  if (!state[name]) return false;
  return !!state[name].open;
}
