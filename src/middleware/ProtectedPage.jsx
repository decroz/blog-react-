import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function ProtectedRoute(props) {
    let { children, ...rest } = props;
    return (
      <Route {...rest} render={({ location }) =>
        props.isAuthenticate ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/Login",
                state: { from: location }
              }}
            />
          )
      }
      />
    );
  }
