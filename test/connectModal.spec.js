import { Provider } from 'react-redux';
import React, { Component } from 'react';

import { createStore } from 'redux';
import TestUtils from 'react-dom/test-utils';

import { close, open, toggle } from '../src/actions';
import { connectModal } from '../src/connectModal';
import { modalReducer } from '../src/reducer';

class DumpModal extends Component {
  render() {
    return null;
  }
}

describe('connectModal', () => {
  it('changes isOpen after connect to store', () => {
    const ConnectedModal = connectModal('mypopup')(DumpModal);
    const store = createStore(modalReducer);
    const container = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedModal />
      </Provider>
    );
    const stub = TestUtils.findRenderedComponentWithType(container, DumpModal)
    store.dispatch(open('mypopup'));
    expect(stub.props.isOpen).toEqual(true);
    store.dispatch(close('mypopup'));
    expect(stub.props.isOpen).toEqual(false);
    store.dispatch(toggle('mypopup'));
    expect(stub.props.isOpen).toEqual(true);
  });
});
