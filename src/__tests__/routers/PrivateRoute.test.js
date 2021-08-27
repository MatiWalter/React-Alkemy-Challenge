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

  Storage.prototype.setItem = jest.fn();

  test('should render component and save in localStorage', () => {

    render(
      <MemoryRouter>
        <PrivateRoute 
          isAuthenticated={true}
          component={() => <span>Renderizado</span> }
          { ...props }
        />
      </MemoryRouter>
    );

    expect(screen.getByText(/Renderizado/i)).toBeInTheDocument();
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/');
  });

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
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/');
  });
  
});
