import margens from '@resources/margens';
import { titulo2 } from '@resources/textos';
import styled from 'styled-components';

export const ContainerLayout = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: ${margens.medium}px;
`;

export const TituloLayout = styled.h2`
  ${titulo2}
  width: 100%;
  height: max-content;
`;
