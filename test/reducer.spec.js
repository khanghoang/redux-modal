import { close, open, toggle } from '../src/actions';
import { modalReducer } from '../src/reducer';

describe('Reducer', () => {
  it('handles open action', () => {
    const openAction = open('mypopup');
    const actual = modalReducer({}, openAction);
    const expected = {
      mypopup: {
        open: true,
      },
    };

    expect(actual).toEqual(expected);
  });
  it('handles close action', () => {
    const openAction = close('mypopup');
    const actual = modalReducer({}, openAction);
    const expected = {
      mypopup: {
        open: false,
      },
    };

    expect(actual).toEqual(expected);
  });
  describe('handles toggle action', () => {
    describe('when current state is close', () => {
      it('handles as open', () => {
        const openAction = toggle('mypopup');
        const actual = modalReducer({
          mypopup: {
            open: true,
          }
        }, openAction);
        const expected = {
          mypopup: {
            open: false,
          },
        };

        expect(actual).toEqual(expected);
      });
    });
    describe('when current state is close', () => {
      it('handle as close', () => {
        const openAction = toggle('mypopup');
        const actual = modalReducer({
          mypopup: {
            open: false,
          }
        }, openAction);
        const expected = {
          mypopup: {
            open: true,
          },
        };

        expect(actual).toEqual(expected);
      });
    });
  });
});
