import cores from '@resources/cores';
import imagens from '@resources/imagens';
import margens from '@resources/margens';
import { titulo2 } from '@resources/textos';
import styled from 'styled-components';

export const ContainerExternoLayout = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;

  background: ${cores.azulPetroleo};
`;

export const ContainerInternoLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-self: flex-end;

  width: 80%;
  padding: ${margens.medium}px ${margens.large}px;
`;

export const TituloLayout = styled.h2`
  ${titulo2}
  width: 100%;
  height: max-content;
`;

export const BannerLayout = styled.div`
  width: 100%;
  height: 140px;
  background: url(${imagens.texturaAmarelo.src});
  background-size: contain;
  background-repeat: repeat;
`;
