import axios from 'axios';
import React, { Children, useContext, useEffect, useState } from 'react';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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
        console.log(e);
      }
    })();
  }, []);

  const signIn = async ({ login, password }) => {
    try {
      const response = await axios.post('/login', { login, password });
      setUser(response.data);
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      console.log(e);
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

  if (!auth) throw Error('useAuth needs to be used inside AuthContext, not outside');

  return auth;
};
