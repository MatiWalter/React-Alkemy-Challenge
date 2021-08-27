/**
 * @jest-environment jsdom
 */

import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import {getByRole, getByText, render, screen} from '@testing-library/react';
import { HomeRoutes } from '~/routers/HomeRoutes';

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('<HomeRoutes /> tests', () => {
  
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

  test('should render correctly', () => {
    
    render(
      <Provider store={store}>
        <MemoryRouter>
          <HomeRoutes />
        </MemoryRouter>
      </Provider>
    );

    const anchor = screen.getByRole('link', { name: /superheroesapp/i });
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveTextContent('SuperheroesApp');
  });
  
});
