import {Direcoes} from '@/data/enums'
import {DirecoesTipo} from '@/data/tipos'
import dispositivos from '@/resources/dispositivos'
import styled from 'styled-components'

interface ContainerExternoConteudoProps {
  corBackground: string
  altura?: number
  direcao?: DirecoesTipo
  reverso: string
}

export const ContainerExternoConteudo = styled.section<ContainerExternoConteudoProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props) =>
    props.direcao === Direcoes.V
      ? 'column'
      : props.reverso === 'true'
        ? 'column-reverse'
        : 'row'};

  height: 'fit-content';

  min-height: ${(props) => props.altura}px;
  background: ${(props) => props.corBackground};

  @media ${dispositivos.laptop} {
    flex-wrap: nowrap;
  }

  @media ${dispositivos.laptop} {
    flex-wrap: nowrap;
    flex-direction: ${(props) =>
    props.direcao === Direcoes.V ? 'column' : 'row'};
  }
`
