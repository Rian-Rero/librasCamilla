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
  width: 50%;
  height: 90%;
  align-items: center;
  justify-content: center;
  border-radius: 10rem;
  box-shadow: 0px -1px 50px 1px ${({ theme }) => theme.colors.grey};
  justify-content: space-evenly;

  @media (max-width: ${breakPoints.desktopBreak}) {
    width: 66%;
  }
  @media (max-width: ${breakPoints.smallDesktopBreak}) {
    width: 75%;
    border-radius: 5rem;
  }
  @media (max-width: ${breakPoints.tabletBreak}) {
    width: 90%;
  }
  @media (max-width: ${breakPoints.mobileBreak}) {
  }
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  font-size: 3rem;
  @media (max-width: ${breakPoints.smallDesktopBreak}) {
    font-size: 2.5rem;
  }
  @media (max-width: ${breakPoints.mobileBreak}) {
    font-size: 2rem;
  }
`;
export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.warningRed};
  font-size: 20rem;
  font-weight: bold;
  @media (max-width: ${breakPoints.smallDesktopBreak}) {
    font-size: 15rem;
  }
  @media (max-width: ${breakPoints.mobileBreak}) {
    font-size: 12rem;
  }
`;
