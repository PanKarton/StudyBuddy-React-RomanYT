import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useError } from 'hooks/useError';
const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { dispatchError } = useError();

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;
        const response = await axios.get('/me', {
          headers: {
            autentication: `Bearer ${token}`,
          },
        });
        setUser(response.data.user);
      } catch (e) {
        dispatchError(`xD czesc`);
      }
    })();
  }, [dispatchError]);

  const signIn = async ({ login, password }) => {
    try {
      const response = await axios.post('/login', { login, password });
      setUser(response.data);
      localStorage.setItem('token', response.data.token);
    } catch (err) {
      dispatchError(`Invalid login or password, please note it somewhere for nex time... `);
      setTimeout(() => {
        dispatchError(null);
      }, 6500);
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (Object.keys(auth) === 0) throw Error('useAuth needs to be used inside AuthContext, not outside');

  return auth;
};
