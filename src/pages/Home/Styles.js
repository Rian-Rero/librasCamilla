import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  margin: 0 auto;
`;

/* Caixa verde superior */
export const WelcomeSection = styled.div`
  background-color: ${({ theme }) => theme.colors.welcomeGirl};
  width: 100%;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-family: ${({ theme }) => theme.fonts.cooper};
  text-align: center;

  /* Recorte no canto superior direito */
  clip-path: polygon(0 0, calc(100% - 2rem) 0, 100% 2rem, 100% 100%, 0 100%);
  border-radius: 1rem;
`;

export const ContentSection = styled.img`
  width: 100%;
  height: 100%;
`;

/* Caixa amarela com imagem */
export const ImageBox = styled.div`
  background-color: ${({ theme }) => theme.colors.yellowGirl};
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  overflow: hidden;

  > img {
    width: 100%;
    height: auto;
  }
`;

export const RightBoxesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Line = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
`;

/* Roxo com recorte na direita */
export const PurpleBox = styled.div`
  background-color: ${({ theme }) => theme.colors.purple};
  flex: 1;
  height: 5rem;
  border-radius: 1rem;

  /* recorte diagonal na ponta direita */
  clip-path: polygon(
    0 0,
    calc(100% - 1.5rem) 0,
    100% 1.5rem,
    100% 100%,
    0 100%
  );
`;

/* Caixa azul pequena */
export const LightBlueBox = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBlue};
  flex: 0.4;
  height: 5rem;
  border-radius: 1rem;
`;

/* Caixa laranja */
export const OrangeBox = styled.div`
  background-color: ${({ theme }) => theme.colors.orange};
  width: 100%;
  height: 4rem;
  border-radius: 1rem;
`;

export const CardsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const TextLine = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 900;
  font-family: ${({ theme }) => theme.fonts.cooper};
`;
