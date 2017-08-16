import { connect } from 'react-redux';
import React from 'react';

import { ModalManager } from './modalManager';
import { portalSelector } from './selector';

const Portal = ({ modals, wrapComponent = "div" }) => {
  const modalComponents = Object.keys(modals).map(name =>
    ModalManager.getModalByName(name));

  return (
    React.createElement(wrapComponent, {},
      modalComponents.map(({ name, component }) => {
        return React.createElement(component, {
          key: name,
        });
      })
    ));
}


export const ModalPortal = connect(
  state => ({
    modals: portalSelector(state),
  }),
  null
)(Portal);
