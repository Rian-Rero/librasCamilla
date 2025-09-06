import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  margin: 0 auto;
`;

export const WelcomeSection = styled.div`
  background-color: ${({ theme }) => theme.colors.welcomeGirl}; // Azul-claro
  --r: 40px; /* radius */
  font-size: 5rem;
  font-family: ${({ theme }) => theme.fonts.cooper};
  text-align: center;
  width: 100%;
  height: 90rem;
  border-radius: 0rem;
  border-top-right-radius: var(--r);
  mask:
    radial-gradient(var(--r) at 10rem 100%, #0000 100%, #000 calc(100% + 1px))
      100% 100% / var(--r) var(--r) no-repeat,
    linear-gradient(0, #0000 var(--r), #000 0);
`;

export const ContentSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr; /* Colunas para imagem e caixas direitas */
  gap: 20px; // Fonte ajustada p
  align-items: stretch;
`;

export const ImageBox = styled.div`
  background-color: ${({ theme }) => theme.colors.yellowGirl}; // Amarelo
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden; /* Garante que a imagem dentro não "vaze" do clip-path */
  border-radius: 3.6rem;
  > img {
    height: 100%;
    width: 100%;
  }
`;

export const RightBoxesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Line = styled.div`
  display: flex;
  height: 100%;
  gap: 2rem;
  width: 100%;
  text-align: center;
  justify-content: center;
  font-size: 5rem;
`;

export const PurpleBox = styled.div`
  background-color: ${({ theme }) => theme.colors.purple}; // Azul-claro
  padding: 20px;
  flex: 1;
  overflow: hidden;
  border-radius: 2rem 0rem 2rem 2rem;
  clip-path: polygon(0 0, calc(90% - 3rem) 0, 100% 20%, 100% 100%, 0 100%);
`;

export const LightBlueBox = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBlue}; // Azul-claro
  padding: 20px;
  flex: 0.5;
  overflow: hidden;
  border-radius: 3.1rem;
`;

export const OrangeBox = styled.div`
  background-color: ${({ theme }) => theme.colors.orange}; // Azul-claro
  padding: 20px;
  overflow: hidden;
  width: 100%;
  border-radius: 3.1rem;
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
  font-size: 5rem;
`;
