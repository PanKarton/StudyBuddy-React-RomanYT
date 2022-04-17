import styled from 'styled-components';

export const StyledWrapper = styled.section`
  border-left: 1px solid ${({ theme }) => theme.colors.mainLineColor};
  grid-column: 2/3;
  grid-row: 1/3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
  padding: 2rem 3rem;
  overflow-y: auto;
`;

export const ArticlesWrapper = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
`;

export const StyledHeader = styled.h3`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  margin: 0;
  padding: 0;
`;
