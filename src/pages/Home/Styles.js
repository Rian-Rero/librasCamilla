import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  height: 89vh;
  border-radius: 10rem;
  box-shadow: 0px -1px 50px 1px ${({ theme }) => theme.colors.grey};
  padding: 6rem 4rem 0rem 4rem;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
  flex: 1;
`;
