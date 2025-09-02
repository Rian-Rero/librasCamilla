import { useTheme } from 'styled-components';

import { Card, Line, Title } from './Styles';
import { Button } from '../../common';

export default function CardComponent({ data }) {
  const theme = useTheme();
  return (
    <Card>
      <Title>{data?.title}</Title>
      <Line>Número de Instâncias: {data?.instanceCount}</Line>
      <Line style={{ alignItems: 'stretch' }}>
        <Button
          backgroundColor={theme.colors.blueFlux}
          hoverBackgroundColor={theme.colors.darkGreen}
          hoverColor={theme.colors.font.black}
          color={theme.colors.font.white}
          borderStyle="none"
          borderRadius="2rem"
          fontSize="1.5rem"
          boxShadow={`0px -1px 4px -1px ${theme.colors.grey}`}
        >
          Ver no Flux
        </Button>
        <Button
          backgroundColor={theme.colors.midGreen}
          hoverBackgroundColor={theme.colors.darkGreen}
          hoverColor={theme.colors.font.black}
          color={theme.colors.font.white}
          borderStyle="none"
          borderRadius="2rem"
          minHeight="3rem"
          minWidth="15rem"
          fontSize="1.5rem"
          boxShadow={`0px -1px 4px -1px ${theme.colors.grey}`}
        >
          Instâncias
        </Button>
      </Line>
    </Card>
  );
}
