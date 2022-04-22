import React, { useState } from 'react';
// import { usersData } from 'data/usersData';

export const UsersContext = React.createContext({
  users: [],
  deleteUser: () => {},
  addUser: () => {},
});

const UsersProvider = ({ children }) => {
  // const [users, setUsers] = useState(usersData);
  // const deleteUser = (deleteName) => {
  //   const filteredUsersList = users.filter(({ nam  e }) => name !== deleteName);
  //   setUsers(filteredUsersList);
  // };
  // const addUser = (newUserData) => {
  //   const newUser = {
  //     name: newUserData.name,
  //     attendance: newUserData.attendance,
  //     average: newUserData.average,
  //   };
  //   setUsers([newUser, ...users]);
  // };
  // return (
  //   <UsersContext.Provider
  //     value={{
  //       users,
  //       deleteUser,
  //       addUser,
  //     }}>
  //     {children}
  //   </UsersContext.Provider>
  // );
};

export default UsersProvider;
