import { isModalOpenSelector, portalSelector } from '../src/selector';

describe('Selector', () => {
  it('returns isOpen value', () => {
    const state = {
      myform: {},
    };
    const actual = isModalOpenSelector('myform')(state);
    expect(actual).toEqual(false);
  });
});

describe('Portal selector', () => {
  it('returns isOpen value', () => {
    const state = {
      modals: {
        myform: {},
      }
    };
    const actual = portalSelector(state);
    expect(actual).toEqual({ myform: {} });
  });
});
