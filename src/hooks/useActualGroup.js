import React, { useContext, useState } from 'react';

export const ActualGroupContext = React.createContext({});

export const ActualGroupProvider = ({ children }) => {
  const [actualGroup, setActualGroup] = useState(null);

  const changeActualGroup = (group) => setActualGroup(group);

  return <ActualGroupContext.Provider value={{ actualGroup, changeActualGroup }}>{children}</ActualGroupContext.Provider>;
};

export const useActualGroup = () => {
  const group = useContext(ActualGroupContext);

  if (Object.keys(group).length === 0) throw Error('useActualGroup can be used only in ActualGroupContex.Provider component');

  return group;
};
