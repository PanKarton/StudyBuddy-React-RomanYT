import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { users } from 'data/users.js';
import { Wrapper } from './UsersList.styles';

class UsersList extends React.Component {
  state = {
    users: [],
  };

  deleteUser = (userName) => {
    const filteredUsers = this.state.users.filter(({ name }) => name !== userName);
    this.setState(() => ({ users: filteredUsers }));
  };

  mockAPI = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (users) {
          resolve([...users]);
        } else {
          reject(new Error(`Błont`));
        }
      }, 2000);
    });
  };

  componentDidMount() {
    this.mockAPI()
      .then((users) => {
        this.setState({ users: users });
      })
      .catch((err) => console.log(err));
  }
  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    const { users } = this.state;
    return (
      <Wrapper>
        {users.map((userData, index) => (
          <UsersListItem deleteUser={this.deleteUser} key={userData.name} userData={userData} index={index}></UsersListItem>
        ))}
      </Wrapper>
    );
  }
}

export default UsersList;
