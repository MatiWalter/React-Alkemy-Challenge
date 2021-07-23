import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const TeamScreen = () => {

  const { dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleClick = () => {
    history.replace('/login');

    dispatch({
      type: types.logout
    });
  }

  return (
    <div>
      <h1>TeamScreen</h1>
      <button
        className="btn btn-primary"
        onClick={handleClick}
      >
        Logout
      </button>
    </div>
  )
}
