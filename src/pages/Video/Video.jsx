import { useLocation, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Container } from './Styles';
import { Button } from '../../components/common';
import { useTheme } from 'styled-components';
import { IoArrowBackSharp } from 'react-icons/io5';

export default function Video() {
  const location = useLocation();
  const videoUrl = location.state?.video; // pega o vídeo passado no state
  const backColor = location.state?.backgroundColor; // pega o vídeo passado no state

  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Container>
      <Button
        backgroundColor={backColor}
        onClick={() => navigate('/')}
        borderRadius="2rem"
        minHeight="4rem"
        fontSize="2rem"
        borderStyle="none"
        hoverBackgroundColor={theme.colors.white}
        hoverColor={theme.colors.black}
        marginTop="2rem"
      >
        <IoArrowBackSharp />
        &emsp; Voltar ao Início
      </Button>
      {videoUrl ? (
        <ReactPlayer
          src={videoUrl}
          playing
          controls
          width="100%"
          height="90vh"
          style={{ borderRadius: '12px' }}
        />
      ) : (
        <p>Nenhum vídeo selecionado.</p>
      )}
    </Container>
  );
}
