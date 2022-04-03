import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { users } from 'data/users.js';
import { Wrapper } from './UsersList.styles';

class UsersList extends React.Component {
  state = {
    users: [],
    isLoading: true,
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
    this.setState({ isLoading: true });
    this.mockAPI()
      .then((data) => {
        this.setState({ isLoading: false });
        this.setState({ users: data });
      })
      .catch((err) => console.log(err));
  }
  componentDidUpdate(_, prevState) {
    if (prevState.isLoading !== this.state.isLoading) console.log(`Loading state has changed`);
  }
  componentWillUnmount() {}

  render() {
    const { users } = this.state;
    return (
      <Wrapper>
        <h1>{this.state.isLoading ? 'Loading...' : 'Users list'}</h1>
        {users.map((userData, index) => (
          <UsersListItem deleteUser={this.deleteUser} key={userData.name} userData={userData} index={index}></UsersListItem>
        ))}
      </Wrapper>
    );
  }
}

export default UsersList;
