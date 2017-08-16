export const ModalManagerClass = () => {
  let modals = {};

  return {
    register: ({ name, component = () => null }) => {
      modals[name] = component;
    },
    getModals: () => {
      return Object.keys(modals).map(k => {
        return { name: k, component: modals[k] };
      });
    },
    getModalByName: name => {
      if (!modals[name]) return undefined;
      return { name, component: modals[name] };
    },
  };
};

export const ModalManager = ModalManagerClass();
