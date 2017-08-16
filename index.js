import modalReducer from './src/reducer';

export { close, open, toggle } from './src/actions';
export { connectModal } from './src/connectModal';
export { ModalManager, ModalManagerClass } from './src/modalManager';
export { ModalPortal } from './src/portal';
export { isModalOpenSelector, portalSelector } from './src/selector';
export const reducer = modalReducer;
