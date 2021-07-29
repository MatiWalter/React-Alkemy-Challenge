import React from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { teamLogout } from '../../actions/team';

export const Navbar = () => {

  const dispatch = useDispatch();

  const history = useHistory();

  const handleLogout = () => {
    dispatch(teamLogout());
    dispatch(startLogout());
    history.replace('/login');
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
        >
          SuperheroesApp
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navCollapse"
          aria-controls="navCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navCollapse">
          <div className="navbar-nav me-auto mb-2 mb-lg-0">

            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/team"
            >
              Team
            </NavLink>

            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/search"
            >
              Search
            </NavLink>
          </div>

          <div className="navbar-nav">
            <ul className="navbar-nav me-auto">
              <button
                className="nav-item nav-link btn p-0"
                onClick={handleLogout}
              >
                Logout
              </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
