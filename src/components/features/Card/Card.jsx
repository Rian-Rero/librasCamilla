import { useTheme } from 'styled-components';

import { Card, IconWrapper, Separator, Text, Title } from './Styles';
import { Button } from '../../common';
import { FaPersonWalkingDashedLineArrowRight } from 'react-icons/fa6';

export default function CardComponent({ data }) {
  return (
    <Card backgroundcolor={data?.backgroundColor}>
      <div>
        <Title>{data?.title}</Title>
        <Separator />
        <Text>{data?.description}</Text>
      </div>
      <IconWrapper>{data?.icon && <data.icon />}</IconWrapper>
    </Card>
  );
}
