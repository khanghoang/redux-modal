import { connect } from 'react-redux';

import { ModalManager } from './modalManager';
import { isModalOpenSelector } from './selector';

export const connectModal = name =>
  Component => {
    return connect(
      state => ({
        isOpen: isModalOpenSelector(name)(state),
      }),
      null
    )(Component);
  };
