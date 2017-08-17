jest.mock('../src/modalManager');
import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { combineReducers, compose } from 'redux';

import { createStore } from 'redux';
import TestUtils from 'react-dom/test-utils';

import { ModalManagerClass, __purge } from '../src/modalManager';
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
  beforeEach(__purge);
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

  describe('DEV environment', () => {
    it('warns the user when he forgets to add reducer to root reducer', () => {
      compose(
        connectModal('mypopup'),
      )(DumpModal);
      const store = createStore(() => ({}));

      global.__DEV__ = true;

      expect(() => {
        TestUtils.renderIntoDocument(
          <Provider store={store}>
            <ModalPortal wrapComponent="div" />
          </Provider>
        );
        store.dispatch(open('mypopup'));
      }).toThrowError(/You need to register portal modal reducer/);
    });
  });

  describe('DEV production', () => {
    it('does not warn the user when he forgets to add reducer to root reducer', () => {
      compose(
        connectModal('mypopup'),
      )(DumpModal);
      const store = createStore(() => ({}));

      global.__DEV__ = false;

      expect(() => {
        TestUtils.renderIntoDocument(
          <Provider store={store}>
            <ModalPortal wrapComponent="div" />
          </Provider>
        );
        store.dispatch(open('mypopup'));
      }).not.toThrowError(/You need to register portal modal reducer/);
    });
  });

  describe('Unregistered modal', () => {
    it('will not raise error when it is called to open', () => {
      expect(() => {
        const store = createStore(combineReducers(modalReducer));
        const container = TestUtils.renderIntoDocument(
          <Provider store={store}>
            <ModalPortal wrapComponent="div" />
          </Provider>
        );
        store.dispatch(open('mypopup'));
      }).not.toThrow();
    });
  });
});
