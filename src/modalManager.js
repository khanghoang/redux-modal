export const ModalManagerClass = () => {
  let modals = {};

  return {
    register: ({ name = '', gate = 'root', component = () => null }) => {
      modals[name] = {
        component,
        gate,
        name,
      };
    },
    getModals: () => {
      return Object.keys(modals).map(k => {
        return modals[k];
      });
    },
    getModalByName: name => {
      if (!modals[name]) return undefined;
      return modals[name];
    },
  };
};

export const ModalManager = ModalManagerClass();
