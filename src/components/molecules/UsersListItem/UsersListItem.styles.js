import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  width: auto;
  padding: 1.25rem 0;
`;

export const AverageCircle = styled.div`
  width: 2rem;
  aspect-ratio: 1;
  background-color: ${({
    average,
    theme: {
      colors: { success, error, warning },
    },
  }) => (average < 4 ? (average < 3 ? error : warning) : success)};
  border-radius: 50%;
  display: grid;
  place-items: center;
  span {
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const UserAndAttendance = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
  p:first-child {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 400;
  }
`;
