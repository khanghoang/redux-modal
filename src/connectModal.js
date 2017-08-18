import { connect } from 'react-redux';

import { ModalManager } from './modalManager';
import { isModalOpenSelector } from './selector';

export const connectModal = (name, props = {}, gate = 'root') => {
  return Component => {
    const HOC =  connect(
      state => ({
        isOpen: isModalOpenSelector(name)(state),
      }),
      null
    );
    ModalManager.register({
      name,
      gate,
      props,
      component: HOC(Component),
    })
  };
}
