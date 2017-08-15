import React, { Children } from 'react';
import { connect } from 'react-redux';

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
