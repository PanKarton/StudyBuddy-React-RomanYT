import React, { useCallback, useContext, useState } from 'react';

export const ErrorContext = React.createContext({});

export const ErrorProvider = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatchError = useCallback((message) => setErrorMessage(message), []);

  return <ErrorContext.Provider value={{ errorMessage, dispatchError }}>{children}</ErrorContext.Provider>;
};

export const useError = () => {
  const error = useContext(ErrorContext);
  console.log(error);
  if (!error) throw Error('useError should be used inside ErrorContext.Provider');

  return error;
};
