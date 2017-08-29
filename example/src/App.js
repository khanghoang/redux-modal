import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { reducer as modalReducer, ModalPortal } from '@khanghoang/redux-modal';
import { combineReducers, createStore } from 'redux';
import logo from './logo.svg';
import './App.css';
import Example from './Example';

const store = createStore(combineReducers({ ...modalReducer }));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <Example />
          </div>
          <ModalPortal />
        </div>
      </Provider>
    );
  }
}

export default App;
