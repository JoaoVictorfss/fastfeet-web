import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import DefaultLayout from '~/pages/_Layouts/default';
import AuthLayout from '~/pages/_Layouts/auth';

import { store } from '~/store';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = store.getState().auth;

  // if the user is not logged in and the route he wants to access is private, they will be directed to the login route
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  // if the user is logged and the route is not private, he will  be directed to the orders route
  if (signed && !isPrivate) {
    return <Redirect to="/orders" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
