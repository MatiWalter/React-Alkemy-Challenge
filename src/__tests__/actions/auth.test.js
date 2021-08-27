import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { types } from '../../types/types';
import { login, logout, startLogin, startLogout } from '../../actions/auth';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {};

let store = mockStore(initState);

describe('auth actions tests', () => {
    
  beforeEach(()=> {
      store = mockStore(initState);
  });

  test('should create corresponding action', () => {
    const token = 'fakeToken';
    const logged = 'true';

    const loginAction = login(token);
    const logoutAction = logout();

    expect(loginAction).toEqual({
      type: types.login,
      payload: token
    });

    expect(logoutAction).toEqual({
      type: types.logout
    });
  });

  test('should dispatch startLogout', () => {
    store.dispatch(startLogout());

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.logout
    });
  });

  test('should dispatch startLogin', () => {
    store.dispatch(startLogin('fakeToken'));

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: types.login,
      payload: 'fakeToken'
    });
  });
});
