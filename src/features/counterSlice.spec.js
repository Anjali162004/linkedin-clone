import userReducer, {
  increment,
  decrement,
  incrementByAmount,
} from './userSlice';

describe('user reducer', () => {
  const initialState = {
    user: null,
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(userReducer(undefined, { type: 'unknown' })).toEqual({
      user: null,
      status: 'idle',
    });
  });

  it('should handle increment', () => {
    const actual = userReducer(initialState, increment());
    expect(actual.user).toEqual(4);
  });

  it('should handle decrement', () => {
    const actual = userReducer(initialState, decrement());
    expect(actual.user).toEqual(2);
  });

  it('should handle incrementByAmount', () => {
    const actual = userReducer(initialState, incrementByAmount(2));
    expect(actual.user).toEqual(5);
  });
});
