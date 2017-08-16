import { ModalManagerClass } from '../src/modalManager';
let ModalManager;

describe('Modal Manager', () => {
  beforeEach(() => {
    ModalManager = ModalManagerClass();
  });
  describe('Setter', () => {
    it('registers add modal with name and component', () => {
      expect(() => {
        ModalManager.register({
          name: 'mymodal',
          component: () => null,
        });
      }).not.toThrow();
    });
  });
  describe('getModals', () => {
    it('can gets all modals which are registered', () => {
      const actual = ModalManager.getModals();
      expect(actual).toEqual([]);
    });
    it('can gets all modals which are registered', () => {
      const modal = {
        name: 'mymodal',
        component: () => null,
      };
      ModalManager.register(modal);
      const actual = ModalManager.getModals();
      expect(actual[0].name).toEqual('mymodal');
    });
  });
  describe('getModalByName', () => {
    describe('already registered modal', () => {
      it('can get registered modal by name', () => {
        const component = () => null;
        const modal = {
          name: 'mymodal',
          component,
        };
        ModalManager.register(modal);
        const actual = ModalManager.getModalByName('mymodal');
        expect(actual).toEqual(modal);
      });
    });
    describe('modal not found', () => {
      it('returns underfined', () => {
        const actual = ModalManager.getModalByName('mymodal');
        expect(actual).toBeUndefined();
      });
    });
  });
});
