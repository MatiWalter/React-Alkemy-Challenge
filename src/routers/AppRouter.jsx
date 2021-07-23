import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { LoginScreen } from '../components/login/LoginScreen'
import { PrivateRoute } from './PrivateRoute';
import { HomeRoutes } from './HomeRoutes';

export const AppRouter = () => {

  const token = localStorage.getItem('user');

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/login"
            component={LoginScreen}
            isAuthenticated={token}
          />
          <PrivateRoute
            path="/"
            component={HomeRoutes}
            isAuthenticated={token}
          />
        </Switch>
      </div>
    </Router>
  )
}