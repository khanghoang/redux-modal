const {
  ModalManagerClass: OriginModalManagerClass,
  ModalManager: OriginModalManager,
} = require.requireActual('../modalManager');

let ModalManager = OriginModalManagerClass();
let ModalManagerClass = OriginModalManagerClass;

const __purge = () => {
  ModalManager = ModalManagerClass();
};

export { ModalManager, ModalManagerClass, __purge };
