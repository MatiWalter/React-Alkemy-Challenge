import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { LoginScreen } from '../components/login/LoginScreen'
import { PrivateRoute } from './PrivateRoute';
import { HomeRoutes } from './HomeRoutes';
import { AuthContext } from '../auth/AuthContext';

export const AppRouter = () => {

  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/login"
            component={LoginScreen}
            isAuthenticated={user.logged}
          />
          <PrivateRoute
            path="/"
            component={HomeRoutes}
            isAuthenticated={user.logged}
          />
        </Switch>
      </div>
    </Router>
  )
}