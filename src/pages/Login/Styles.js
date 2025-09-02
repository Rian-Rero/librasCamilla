import styled from 'styled-components';

import { VacineBackGround } from '../../assets';
import { universalBreakPoints as breakPoints } from '../../utils/breakpoints';

export const Container = styled.div`
  display: flex;
  background: url(${VacineBackGround}) center / cover no-repeat;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  margin: 0rem 0.5rem 0.5rem 0.5rem;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 28%;
  height: 65%;
  align-items: center;
  justify-content: center;
  border-radius: 10rem;
  box-shadow: 0px -1px 50px 1px ${({ theme }) => theme.colors.grey};
  justify-content: space-evenly;
  gap: 3rem;
  @media (max-width: ${breakPoints.desktopBreak}) {
    width: 35%;
  }
  @media (max-width: ${breakPoints.smallDesktopBreak}) {
    width: 45%;
  }
  @media (max-width: ${breakPoints.tabletBreak}) {
    width: 70%;
    border-radius: 5rem;
  }
  @media (max-width: ${breakPoints.mobileBreak}) {
    width: 90%;
  }
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  @media (max-width: ${breakPoints.mobileBreak}) {
    flex-direction: column;
  }
  > a {
    color: ${({ theme }) => theme.colors.darkGreen};
  }
`;

export const WelcomeBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  align-items: center;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 0.5rem;
`;
