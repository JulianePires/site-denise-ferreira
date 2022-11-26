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

export const ContainerTab = styled.span`
  display: flex;
  flex-direction: column;

  width: 100%;
`

export const ControleTab = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 50px;

  list-style: none;
`

interface OpcaoTabProps {
  ativa: string
}

export const OpcaoTab = styled.li<OpcaoTabProps>`
  text-transform: uppercase;
  font-family: ${detalhe.fontFamily};
  font-size: 21px;
  transition: 0.5s ease-in-out all;

  border-bottom: ${(props) => (props.ativa === 'true' ? '1px solid' : 'none')};
  cursor: pointer;

  &:hover {
    color: ${cores.amarelo};
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
