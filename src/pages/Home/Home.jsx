import { BiSearchAlt } from 'react-icons/bi';

import { Box, CardsContainer, Container, Line } from './Styles';
import { CardComponent, SearchInput } from '../../components/features';

export default function Home() {
  const postsData = [{ name: 'Libras', videoLink: 'youtube.com' }];
  return (
    <Container>
      <Box>
        <Line>
          <SearchInput
            name="search"
            placeholder="Digite para Buscar"
            icon={BiSearchAlt}
            customWidth="20%"
            customColor="#666"
            borderRadius="2rem"
          />
        </Line>
        <CardsContainer>
          {postsData?.map((card) => (
            <CardComponent key={card?.title} data={card} />
          ))}
        </CardsContainer>
      </Box>
    </Container>
  );
}
