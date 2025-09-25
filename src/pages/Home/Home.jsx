import { BiSearchAlt } from 'react-icons/bi';

import {
  CardsBox,
  ContentSection,
  ImageBox,
  LightBlueBox,
  Line,
  MainContainer,
  OrangeBox,
  PurpleBox,
  RightBoxesContainer,
  TextLine,
  WelcomeSection,
} from './Styles';
import { CardComponent, SearchInput } from '../../components/features';
import { BackGround, MeninaLibras } from '../../assets';
import { useTheme } from 'styled-components';
import { IoPeopleOutline } from 'react-icons/io5';
import {
  CiMedicalClipboard,
  CiMedicalMask,
  CiHeart,
  CiStethoscope,
  CiUser,
} from 'react-icons/ci';
import { LuHandHeart } from 'react-icons/lu';
import {
  Atendimento,
  Care,
  Cumprimentos,
  Situations,
  Exames,
} from '../../assets/Videos';
export default function Home() {
  const theme = useTheme();
  const postsData = [
    {
      id: 1,
      title: 'Cumprimentos e Interações Básicas',
      description:
        'Aprenda a iniciar conversas em Libras e expressões de gentileza usadas no dia a dia.',
      videoLink: Cumprimentos,
      backgroundColor: theme.colors.lightBlue,
      icon: CiUser,
    },
    {
      id: 2,
      title: 'Atendimento Geral',
      description:
        'Descubra sinais práticos para situações comuns de atendimento em diferentes contextos.',
      videoLink: Atendimento,
      backgroundColor: theme.colors.orange,
      icon: CiStethoscope,
    },
    {
      id: 3,
      title: 'Enfermagem e Cuidados',
      description:
        'Veja como falar sobre bem-estar, consultas e orientações simples relacionadas à saúde em Libras.',
      videoLink: Care,
      backgroundColor: theme.colors.yellowGirl,
      icon: CiHeart,
    },
    {
      id: 4,
      title: 'Exames e Precedimentos  ',
      description:
        'Conheça sinais que ajudam a explicar exames, consultas médicas e procedimentos hospitalares.',
      videoLink: Exames,
      backgroundColor: theme.colors.welcomeGirl,
      icon: CiMedicalClipboard,
    },
    {
      id: 5,
      title: 'Situações e Sintomas ',
      description:
        'Aprenda a expressar desconfortos e sintomas  para facilitar o diálogo entre paciente e profissional de saúde.',
      videoLink: Situations,
      backgroundColor: theme.colors.purple,
      icon: CiMedicalMask,
    },
  ];
  return (
    <MainContainer>
      {/* <WelcomeSection>Bem-vindos ao portal de libras!</WelcomeSection> */}

      <ContentSection src={BackGround}></ContentSection>
      <TextLine>Aumente suas habilidades em Libras</TextLine>
      <CardsBox>
        {postsData?.map((posts) => (
          <CardComponent key={posts?.id} data={posts} />
        ))}
      </CardsBox>
    </MainContainer>
  );
}
