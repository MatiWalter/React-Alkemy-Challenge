import React from 'react';
import { Redirect, Route } from 'react-router';
import { PropTypes } from 'prop-types';

export const PrivateRoute = ({
	isAuthenticated,
	component: Component,
	...rest
}) => {

	localStorage.setItem('lastPath', rest.location.pathname);

	return (
		<Route {...rest}
			component={(props) => (
				(!isAuthenticated)
				? (<Redirect to="/login" />)
				: (<Component {...props} />)
			)}
		/>
	)
}

PrivateRoute.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired
}