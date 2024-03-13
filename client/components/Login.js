import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <h2>Login to Your account</h2>
      <button onClick={() => loginWithRedirect()}>Login</button>
    </div>
  );
};

export default LoginPage;