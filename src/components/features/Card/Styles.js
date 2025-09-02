import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.4rem;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  padding: 1.6rem;
  width: 100%;
  max-width: 30rem;
  transition: box-shadow 0.2s;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }
`;

export const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.font.black};
`;

export const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
