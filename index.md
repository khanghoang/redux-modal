---
layout: home
title: Home
permalink: /
---

# Installation
You can install via `yarn`
```
yarn add @khanghoang/redux-modal
```
or `npm`
```
npm install @khanghoang/redux-modal
```

# Usage
### Simple example
Example code at `examples/simple/`  

#### Define your modal
`./MyConnectedModal.js`
```
import React, { Component } from 'react';
import { Modal, Text } from 'react-native';
import { connectModal } from '@khanghoang/redux-modal';

const MyModal = ({ isOpen }) => {
  return (
    <Modal
      open={isOpen}
      >
      <Text>This is a modal</Text>
    </Modal>
  );
}

export default connectModal('mymodal')(MyModal);
```
#### Set the input
Add the `modal` to the view heirarchy as usually
```
import React, { Component, View, Text } from 'react';
import MyConnectedModal from './MyConnectedModal.js'

const MyView = () => (
  <View>
    <View>
      <Text>Dummy view</Text>
    <View>
    <MyConnectedModal />
  </View>
)
```

#### Set the output
In the place you want it to display, usually it's your root view. 
```
import React, { Component, View } from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { reducer as modalReducer, ModalPortal } from '@khanghoang/redux-modal';

const store = createStore(combineReducers(modalReducer));

const App = () => {
  <Provider store={store}>
    <ModalPortal wrapComponent={View}/>
  </Provider>
};
```

#### To open the modal
Then you want to `open` `mymodal` component from somewhere else in your app.
```                                  
import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { open } from '@khanghoang/redux-modal';

const OpenPopupButton = ({ open }) => (
  <TouchableOpacity
    onPress={() => {
      open('mymodal');
    }}
    >
    <Text>Tap Me</Text>
  </TouchableOpacity>
);

export default connect(null, { open });
```

### Advanced example
In some apps, you may want to have multilple portals which are at different places. We support 
them as well.  
### Define your modal.
```
import React, { Component } from 'react';
import { Modal, Text } from 'react-native';
import { connectModal } from '@khanghoang/redux-modal';

const MyModal = ({ isOpen }) => {
  return (
    <Modal
      open={isOpen}
      >
      <Text>This is a modal</Text>
    </Modal>
  );
}

export default connectModal('mymodal', {}, 'gate_1')(MyModal);
```
#### Get your portal for that modal.
```
import React, { Component, View } from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { reducer as modalReducer, getPortalByGate } from '@khanghoang/redux-modal';

const PortalOne = getPortalByGate('gate_1');

const store = createStore(combineReducers(modalReducer));

const App = () => {
  <Provider store={store}>
    <PortalOne wrapComponent={View}/>
  </Provider>
};
```

Then you can `open` the modal with the same action as what we discuss above in `simple` example

## FAQ
#### Q: Can I have 2 or more modal with the same name?
A: No, we use name as unique id for each modals.

#### Q: I really need your help now, how can I ping you?
A: I always want to listen to your feedbacks and help you out.
Just ping my twitter [@khanght](https://twitter.com/@khanght)
