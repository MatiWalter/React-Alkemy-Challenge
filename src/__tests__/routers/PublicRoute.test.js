/**
 * @jest-environment jsdom
 */

import React from 'react';
import {prettyDOM, render, screen} from '@testing-library/react'
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('<PrivateRoute /> tests', () => {

  const props = {
    location: {
      pathname: '/'
    }
  }

  test('should block the component if not authenticated', () => {

    render(
      <MemoryRouter>
        <PrivateRoute 
          isAuthenticated={false}
          component={() => <span>Renderizado</span> }
          { ...props }
        />
      </MemoryRouter>
    );

    const span = screen.queryByText('Renderizado');
    expect(span).not.toBeInTheDocument();
  });

  test('should render the component if authenticated', () => {
  
    render(
      <MemoryRouter>
        <PrivateRoute 
          isAuthenticated={true}
          component={() => <span>Renderizado</span> }
          { ...props }
        />
      </MemoryRouter>
    );
    
    expect(screen.getByText(/renderizado/i)).toBeInTheDocument();
  });
  
});
