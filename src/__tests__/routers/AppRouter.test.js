/**
 * @jest-environment jsdom
 */

import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { AppRouter } from '~/routers/AppRouter'

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('<AppRouter /> tests', () => {

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
  
  test('should render LoginScreen if not logged in', () => {
    
    render(
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );

    const h1 = screen.getByRole('heading', { name: /login/i })
    expect(h1).toHaveTextContent('Login');

  });
  
  test('should render navbar if logged in', () => {

    const initState = {
      user: {
        token: 'token',
        logged: true
      },
      team: {
        team: []
      }
    }

    let store = mockStore(initState);

    render(
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    
  });
  


})
