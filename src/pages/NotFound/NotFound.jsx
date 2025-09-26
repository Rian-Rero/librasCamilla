import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { Box, Container, Line, Title } from './Styles';
import { Button, Logo } from '../../components/common';

export default function NotFound() {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Container>
      <Button
        backgroundColor={theme.colors.midGreen}
        hoverBackgroundColor={theme.colors.darkGreen}
        hoverColor={theme.colors.font.black}
        borderStyle="none"
        borderRadius="2rem"
        minHeight="4rem"
        fontSize="2rem"
        fontSize990="2rem"
        fontSize800="2rem"
        boxShadow={`0px -1px 10px 1px ${theme.colors.grey}`}
        onClick={() => navigate('/')}
      >
        Voltar ao Início
      </Button>
    </Container>
  );
}
