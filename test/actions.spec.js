import { close, open, toggle } from '../src/actions';

describe('Actions', () => {
  describe('Toggle', () => {
    it('dispatchs redux action with toggle type', () => {
      const actual = toggle('mypopup');
      const expected = {
        type: 'REDUX_MODAL/TOGGLE',
        payload: {
          name: 'mypopup',
        },
      };
      expect(actual).toEqual(expected);
    });
  });
  describe('Open', () => {
    it('dispatchs redux action with open type', () => {
      const actual = open('mypopup');
      const expected = {
        type: 'REDUX_MODAL/OPEN',
        payload: {
          name: 'mypopup'
        },
      };
      expect(actual).toEqual(expected);
    });
  });
  describe('Close', () => {
    it('dispatchs redux action with close type', () => {
      const actual = close('mypopup');
      const expected = {
        type: 'REDUX_MODAL/CLOSE',
        payload: {
          name: 'mypopup',
        },
      };
      expect(actual).toEqual(expected);
    });
  });
});
