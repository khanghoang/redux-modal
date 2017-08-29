import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { open, connectModal } from '@khanghoang/redux-modal';
import { connect } from 'react-redux';

const ExampleModal = ({ isOpen, closeModal }) => (
  <Modal show={isOpen}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4>Text in a modal</h4>
      <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
        magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
        ullamcorper nulla non metus auctor fringilla.
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={closeModal}>Close</Button>
    </Modal.Footer>
  </Modal>
);
const ConnectedModal = connectModal('exampleModal')(ExampleModal);

const ExampleModal2 = ({ isOpen, closeModal }) => (
  <Modal show={isOpen}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading 2</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4>Text in a modal</h4>
      <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
        magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
        ullamcorper nulla non metus auctor fringilla.
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={closeModal}>Close</Button>
    </Modal.Footer>
  </Modal>
);
const ConnectedModal2 = connectModal('exampleModal2')(ExampleModal2);

const Example = ({ open }) => {
  return (
    <div>
      <p>Click to get the full Modal experience!</p>
      <Button
        bsStyle="primary"
        bsSize="large"
        onClick={() => {
          open('exampleModal');
        }}
      >
        Launch demo modal
      </Button>
      <Button
        bsStyle="primary"
        bsSize="large"
        onClick={() => {
          open('exampleModal2');
        }}
      >
        Launch demo modal2
      </Button>
      <ConnectedModal />
      <ConnectedModal2 />
    </div>
  );
};

export default connect(null, { open })(Example);
