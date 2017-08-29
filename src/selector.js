import { reduce } from 'lodash';
import warning from './warning';

export const isModalOpenSelector = name => state => {
  if (!(state.modals && state.modals[name])) return false;

  return !!state.modals[name].open;
};

export const portalSelector = (gate = 'root') => state => {
  if (!state.modals) {
    warning('You need to register portal modal reducer to root reducer');
    return {};
  }

  return state.modals;
};
