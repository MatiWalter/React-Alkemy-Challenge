import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe('authReducer tests', () => {
  
  test('should login', () => {
    
    const initState = {}

    const action = {
      type: types.login,
      payload: 'fakeToken',
    };

    const state = authReducer(initState, action);

    expect(state).toEqual({
      token: 'fakeToken',
      logged: true
    });
  });

  test('should logout', () => {
    
    const initState = {
      toke: 'fakeToken',
      logged: true
    }

    const action = {
      type: types.logout
    }

    const state = authReducer(initState, action);

    expect(state).toEqual({
      logged: false
    });
  });

  test('should not mutate the state', () => {
    
    const initState = {
      token: 'fakeToken',
      logged: true
    }

    const action = {
      type: 'wrong type'
    }

    const state = authReducer(initState, action);

    expect(state).toEqual(initState);

  });
});