import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { combineReducers, compose } from 'redux';

import { createStore } from 'redux';
import TestUtils from 'react-dom/test-utils';

import { ModalManager } from '../src/modalManager';
import { ModalPortal } from '../src/portal';
import { close, open, toggle } from '../src/actions';
import { connectModal } from '../src/connectModal';
import modalReducer from '../src/reducer';

class DumpModal extends Component {
  render() {
    return null;
  }
}

describe('connectModal', () => {
  it('changes isOpen after connect to store', () => {
    connectModal('mypopup')(DumpModal);
    const store = createStore(combineReducers(modalReducer));
    const container = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ModalPortal wrapComponent="div" />
      </Provider>
    );
    store.dispatch(open('mypopup'));
    const stub = TestUtils.findRenderedComponentWithType(container, DumpModal);
    expect(stub.props.isOpen).toEqual(true);
    store.dispatch(close('mypopup'));
    expect(stub.props.isOpen).toEqual(false);
    store.dispatch(toggle('mypopup'));
    expect(stub.props.isOpen).toEqual(true);
  });

  it('can work with recompose', () => {
    const mapProps = (mapFn) => 
      (Component) => (props) => <Component {...mapFn(props)} />
    compose(
      connectModal('mypopup'),
      mapProps(({ isOpen }) => ({ open: isOpen }))
    )(DumpModal);
    const store = createStore(combineReducers(modalReducer));
    const container = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ModalPortal wrapComponent="div" />
      </Provider>
    );
    store.dispatch(open('mypopup'));
    const stub = TestUtils.findRenderedComponentWithType(container, DumpModal);
    expect(stub.props.open).toEqual(true);
  });
});
