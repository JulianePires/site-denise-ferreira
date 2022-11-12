import styled from 'styled-components';

import cores from '@resources/cores';
import dispositivos from '@resources/dispositivos';
import margens from '@resources/margens';
import { subtitulo, titulo1 } from '@resources/textos';

export const ContainerMenuLateral = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${dispositivos.mobileM} {
    width: 100vw;
  }

  @media ${dispositivos.tablet} {
    width: 20vw;
  }

  @media ${dispositivos.laptopL} {
    width: 20vw;
  }

  height: 100vh;
  padding: ${margens.medium}px;

  background: ${cores.vinho};
`;

export const Titulo = styled.h1`
  ${titulo1}
  text-align: center;
`;

export const OpcoesMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  padding: 0;
  width: 100%;
`;

export const Opcao = styled.li<{ atual: string }>`
  ${subtitulo}

  color: ${(props) => (props.atual === 'true' ? cores.amarelo : cores.branco)};
  list-style: none;
  cursor: pointer;

  transition: 0.2s ease-in-out color;

  &:hover {
    color: ${cores.laranja};
  }
`;
