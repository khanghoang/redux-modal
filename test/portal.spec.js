import { Provider } from 'react-redux';
import React, { Component } from 'react';

import { combineReducers, createStore } from 'redux';
import TestUtils from 'react-dom/test-utils';

import { ModalManager } from '../src/modalManager';
import { ModalPortal } from '../src/portal';
import { close, open } from '../src/actions';
import modalReducer from '../src/reducer';

class DumpModal extends Component {
  render() {
    return null;
  }
}

class AnotherDumpModal extends Component {
  render() {
    return null;
  }
}

describe('connectModal', () => {
  it('changes isOpen after connect to store', () => {
    const store = createStore(combineReducers(modalReducer));
    const container = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ModalPortal wrapComponent="div" />
      </Provider>
    );
    ModalManager.register({
      name: 'mypopup',
      component: DumpModal,
    });

    ModalManager.register({
      name: 'mypopup2',
      component: AnotherDumpModal,
    });

    store.dispatch(open('mypopup'));
    store.dispatch(open('mypopup2'));
    const modal1 = TestUtils.findRenderedComponentWithType(
      container,
      DumpModal
    );
    const modal2 = TestUtils.findRenderedComponentWithType(
      container,
      AnotherDumpModal
    );
    expect(modal1).toBeDefined();
    expect(modal2).toBeDefined();
  });
});
