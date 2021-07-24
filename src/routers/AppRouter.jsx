import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { LoginScreen } from '../components/login/LoginScreen'
import { PrivateRoute } from './PrivateRoute';
import { HomeRoutes } from './HomeRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { startLogin } from '../actions/auth';

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {token} = useSelector(state => state.user);

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
      dispatch(startLogin(token));
    } else {
      setIsLoggedIn(false);
    }
  }, [dispatch, setIsLoggedIn, token]);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/login"
            component={LoginScreen}
            isAuthenticated={isLoggedIn}
          />
          <PrivateRoute
            path="/"
            component={HomeRoutes}
            isAuthenticated={isLoggedIn}
          />
        </Switch>
      </div>
    </Router>
  )
}