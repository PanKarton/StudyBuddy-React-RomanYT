import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import styled from 'styled-components';

export const ArticleWrapper = styled(ViewWrapper)`
  width: 100%;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.darkGrey};
  & > * {
    margin: 0;
  }
  & > p {
    font-size: ${({ theme }) => theme.fontSize.xm};
  }
`;

export const StyledHeader = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  margin: 1.5rem 0;
  p {
    font-size: ${({ theme }) => theme.fontSize.xm};
    line-height: 1.6;
    margin: 0;
  }
  img {
    max-width: 200px;
    object-fit: cover;
  }
`;
