import cores from '@resources/cores'
import dispositivos from '@resources/dispositivos'
import margens from '@resources/margens'
import { detalhe, paragrafo, subtitulo } from '@resources/textos'
import styled from 'styled-components'

export const ContainerCabecalho = styled.header`
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

  background: ${cores.vinho};

  transition: 0.3s ease-in-out all;
`

export const ContainerOpcoesMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;

  @media ${dispositivos.tablet} {
    gap: 40px;
  }

  padding: 0;

  list-style: none;
`

interface OpcaoMenuProps {
  atual: string
}

export const OpcaoMenu = styled.li<OpcaoMenuProps>`
  ${paragrafo}

  @media ${dispositivos.tablet} {
    font-family: ${detalhe.fontFamily};
    font-size: ${subtitulo.fontSize};
  }

  color: ${(props) => (props.atual === 'true' ? cores.laranja : cores.branco)};

  cursor: pointer;
  transition: 0.3s ease-in-out all;

  &:hover {
    color: ${cores.amarelo};
  }
`
