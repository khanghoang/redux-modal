import { connect } from 'react-redux';
import React from 'react';

import { ModalManager } from './modalManager';
import { portalSelector } from './selector';

const Portal = props => {
  const { modals, wrapComponent = 'div', gate } = props;
  const modalComponents = Object.keys(modals)
    .map(name => {
      const modal = ModalManager.getModalByName(name);
      return modal;
    })
    .filter(t => t)
    .filter(component => {
      return component.gate === props.gate;
    });

  return React.createElement(
    wrapComponent,
    {},
    modalComponents.map(({ name, component }) => {
      return React.createElement(component, {
        key: name,
      });
    })
  );
};

export const ModalPortal = connect((state, { gate = 'root' }) => {
  return {
    modals: portalSelector(gate)(state),
    gate: gate,
  };
}, null)(Portal);

export const getPortalByGate = (gate = 'root') => {
  return connect(state => {
    return {
      modals: portalSelector(gate)(state),
      gate,
    };
  }, null)(Portal);
};
