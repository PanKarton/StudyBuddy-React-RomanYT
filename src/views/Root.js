import UsersList from 'components/organisms/UsersList/UsersList';
import styled from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyles';
import { Helmet } from 'react-helmet';

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
`;

const Root = () => (
  <>
    <GlobalStyle />
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Wrapper>
      <UsersList />
    </Wrapper>
  </>
);

export default Root;
