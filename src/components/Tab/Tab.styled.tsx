import {TemasCores} from '@data/tipos'
import cores from '@resources/cores'
import dispositivos from '@resources/dispositivos'
import margens from '@resources/margens'
import {
  detalhe,
  paragrafo,
  subtitulo,
  titulo1,
  titulo2,
} from '@resources/textos'
import styled from 'styled-components'

interface ContainerTabProps {
  corFundo: TemasCores
}

export const ContainerTab = styled.span<ContainerTabProps>`
  display: flex;
  flex-direction: column;

  width: 100%;

  background: ${(props) => props.corFundo};

  transition: 0.5s ease-in-out all;
`

interface ControleTabProps {
  imagemFundo: string
}

export const ControleTab = styled.ul<ControleTabProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;

  background: ${(props) =>
    props.imagemFundo ? `url(${props.imagemFundo})` : cores.azulPetroleo};

  background-size: 25em;

  width: 100%;
  height: 120px;
  margin: 0;
  padding: 0;

  list-style: none;
`

interface OpcaoTabProps {
  ativa: string
}

export const OpcaoTab = styled.li<OpcaoTabProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-transform: uppercase;
  font-family: ${subtitulo.fontFamily};
  font-size: 21px;
  transition: 0.5s ease-in-out all;

  padding: 2px;
  border-radius: 4px;

  color: ${(props) => (props.ativa === 'true' ? cores.azulPetroleo : cores.terra)};
  cursor: pointer;

  transform: scale(${(props) => (props.ativa === 'true' ? 1.1 : 1)});

  &:hover {
    color: ${cores.vinho};
  }
`

export const LayoutTab = styled.span`
  padding: ${margens.xxlarge}px;
  width: 100%;

  @media ${dispositivos.laptop} {
    padding: ${margens.xxxlarge}px;
  }
`

export const TituloLayoutTab = styled.h3`
  font-size: ${titulo1.fontSize};

  @media ${dispositivos.tablet} {
    font-size: ${titulo2.fontSize};
  }
`

export const TextoLayoutTab = styled.p`
  ${paragrafo}

  font-family: ${detalhe.fontFamily};
  font-size: ${subtitulo.fontSize};
  line-height: 3rem;

  @media ${dispositivos.laptopL} {
    font-size: ${titulo1.fontSize};
    line-height: 4rem;
  }
`
