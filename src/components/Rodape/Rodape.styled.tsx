import cores from '@resources/cores'
import dispositivos from '@resources/dispositivos'
import margens from '@resources/margens'
import {paragrafo, subtitulo} from '@resources/textos'
import styled from 'styled-components'

export const ContainerRodape = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  align-self: flex-end;

  @media ${dispositivos.tablet} {
    flex-direction: row;
  }

  width: 100%;
  height: fit-content;
  padding: ${margens.xlarge}px ${margens.xxxlarge}px;

  background: ${cores.amarelo};

  transition: 0.3s ease-in-out all;
`

export const TextoRodape = styled.p`
  ${paragrafo}

  text-align: center;
  color: ${cores.terra};

  margin: ${margens.medium}px ${margens.small}px;

  @media ${dispositivos.tablet} {
    font-size: ${subtitulo.fontSize};
  }
`
