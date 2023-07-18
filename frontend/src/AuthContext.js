// 


import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté au montage du composant
    const loggedInUser = localStorage.getItem('isLoggedIn');
    const storedToken = localStorage.getItem('token');
    if (loggedInUser === 'true' && storedToken) {
      setIsLoggedIn(true);
      setToken(storedToken);
    }
  }, []);

  const setAuth = (value, authToken) => {
    setIsLoggedIn(value);
    setToken(authToken);
    localStorage.setItem('isLoggedIn', value);
    localStorage.setItem('token', authToken);
  };

  const authContextValue = {
    isLoggedIn,
    token,
    setAuth,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
