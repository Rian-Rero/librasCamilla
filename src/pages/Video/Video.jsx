import { useLocation, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Container } from './Styles';
import { Button } from '../../components/common';
import { useTheme } from 'styled-components';

export default function Video() {
  const location = useLocation();
  const videoUrl = location.state?.video; // pega o vídeo passado no state
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Container>
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
      <Button
        backgroundColor={theme.colors.white}
        onClick={() => navigate('/')}
      >
        {' '}
        Voltao ao Início
      </Button>
    </Container>
  );
}
