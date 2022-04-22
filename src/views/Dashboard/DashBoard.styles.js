import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';

export const GroupWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  position: relative;
`;

export const StyledHeader = styled.h4`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  margin: 0;
  padding: 0;
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  width: min(30rem, 100%);
`;

export const GroupButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
