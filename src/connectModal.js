import { connect } from 'react-redux';

import { ModalManager } from './modalManager';
import { isModalOpenSelector } from './selector';
import { open, close, toggle } from './actions';

export const connectModal = (name, props = {}, gate = 'root') => {
  return Component => {
    const HOC =  connect(
      state => ({
        isOpen: isModalOpenSelector(name)(state),
      }),
      ({
        openModal: () => open(name),
        closeModal: () => close(name),
        toggleModal: () => toggle(name),
      })
    );
    ModalManager.register({
      name,
      gate,
      props,
      component: HOC(Component),
    });
    return HOC(Component);
  };
}
