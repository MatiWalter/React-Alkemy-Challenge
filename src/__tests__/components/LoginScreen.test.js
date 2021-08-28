/**
 * @jest-environment jsdom
 */

import React from 'react';
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom';
import { act, render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import '@testing-library/jest-dom';

import { LoginScreen } from '~/components/login/LoginScreen';
import { startLogin } from '~/actions/auth';

jest.mock('~/actions/auth', () => ({
  startLogin: jest.fn()
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
  user: {
    token: null,
    logged: false
  },
  team: {
    team: []
  }
}

let store = mockStore(initState);
store.dispatch = jest.fn();

describe('<LoginScreen /> tests', () => {

  let component;
  
  beforeEach(()=> {
    store = mockStore(initState);
    jest.clearAllMocks();
    component = render(
      <Provider store={store}>
        <MemoryRouter>
          <LoginScreen />
        </MemoryRouter>
      </Provider>
    )
  });

  test('should render <LoginScreen /> component', () => {
    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});

