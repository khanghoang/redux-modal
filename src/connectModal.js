import { connect } from 'react-redux';

import { ModalManager } from './modalManager';
import { isModalOpenSelector } from './selector';

export const connectModal = name => {
  return Component => {
    const HOC =  connect(
      state => ({
        isOpen: isModalOpenSelector(name)(state),
      }),
      null
    );
    ModalManager.register({
      name,
      component: HOC(Component),
    })
  };
}
