import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { LoginScreen } from '../components/login/LoginScreen'
import { PrivateRoute } from './PrivateRoute';
import { HomeRoutes } from './HomeRoutes';
import { useSelector } from 'react-redux';

export const AppRouter = () => {

  const { logged } = useSelector(state => state.user);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/login"
            component={LoginScreen}
            isAuthenticated={logged}
          />
          <PrivateRoute
            path="/"
            component={HomeRoutes}
            isAuthenticated={logged}
          />
        </Switch>
      </div>
    </Router>
  )
}