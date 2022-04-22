import { groups } from 'mocks/data/groups';
import React, { useState } from 'react';

export const GroupContext = React.createContext({
  actualGroup: '',
  handleGroupChange: () => {},
});

const ActualGroupProvider = ({ children }) => {
  const [actualGroup, setActualGroup] = useState('');

  const handleGroupChange = (group) => {
    setActualGroup(group);
  };

  return (
    <GroupContext.Provider
      value={{
        actualGroup,
        handleGroupChange,
      }}>
      {children}
    </GroupContext.Provider>
  );
};

export default ActualGroupProvider;
