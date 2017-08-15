import { isModalOpenSelector } from '../src/selector';

describe('Selector', () => {
  it('returns isOpen value', () => {
    const state = {
      myform: {
        isOpen: false,
      },
    };
    const actual = isModalOpenSelector('myform')(state);
    expect(actual).toEqual(false);
  });
});
