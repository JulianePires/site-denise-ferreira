import cores from "@resources/cores";
import dispositivos from "@resources/dispositivos";
import margens from "@resources/margens";
import { paragrafo, subtitulo } from "@resources/textos";
import styled from "styled-components";

export const ContainerRodape = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media ${dispositivos.tablet} {
    flex-direction: row;
  }

  width: 100%;
  height: 140px;
  padding: ${margens.xsmall}px ${margens.xxxlarge}px;

  background: ${cores.amarelo};

  transition: 0.3s ease-in-out all;
`;

export const TextoRodape = styled.p`
  ${paragrafo}

  font-size: ${subtitulo.fontSize};

  color: ${cores.terra};
`;
