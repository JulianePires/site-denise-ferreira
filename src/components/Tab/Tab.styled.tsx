import {ImagemComFallback} from '@components/ImagemComFallback'
import {Titulo} from '@components/Titulo'
import {TemasCores} from '@data/tipos'
import cores from '@resources/cores'
import dispositivos from '@resources/dispositivos'
import {detalhe, paragrafo, subtitulo, titulo1} from '@resources/textos'
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

export const BarraControleTab = styled.span`
  display: flex;
  align-items: center;

  background: ${cores.vinho};

  width: 100%;
  height: 140px;
  margin: 0;
  padding: 0;
`

interface ControleTabProps {
  imagemFundo?: string
  corFundo?: string
}

export const ControleTab = styled.ul<ControleTabProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;

  width: 100%;

  list-style: none;

  @media ${dispositivos.laptop} {
    width: 50vw;
  }
`

export const ImagemOpcaoTab = styled(ImagemComFallback)`
  height: 50px;
  width: auto;
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
  font-family: ${paragrafo.fontFamily};
  font-size: 21px;
  transition: 0.5s ease-in-out all;

  padding: 2px;
  border-radius: 4px;

  color: ${cores.branco};
  cursor: pointer;
  text-decoration: ${(props) =>
    props.ativa === 'true' ? 'underline' : 'none'};

  transform: scale(${(props) => (props.ativa === 'true' ? 1.1 : 1)});

  &:hover {
    color: ${cores.terra};
  }
`

export const TituloLayoutTab = styled(Titulo)``

interface TextoLayoutTabProps {
  corTexto: string
}

export const TextoLayoutTab = styled.p<TextoLayoutTabProps>`
  ${paragrafo}

  color: ${({corTexto}) => corTexto};

  width: 100%;
  
  text-align: justify;
  text-justify: newspaper;
  word-spacing: 5px;
  letter-spacing: unset;

  font-family: ${detalhe.fontFamily};
  font-size: ${paragrafo.fontSize};
  line-height: 2rem;

  @media ${dispositivos.tablet} {
    font-size: ${titulo1.fontSize};
    line-height: 4rem;
  }
`
