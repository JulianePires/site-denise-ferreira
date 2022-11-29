import {Direcoes} from '@data/enums'
import {DirecoesTipo} from '@data/tipos'
import dispositivos from '@resources/dispositivos'
import styled from 'styled-components'

interface ContainerStackProps {
  direcao: DirecoesTipo
  gap: string
  margem?: string
  wrap?: string
}

export const ContainerStack = styled.span<ContainerStackProps>`
  display: flex;
  flex-wrap: ${(props) => (props.wrap === 'true' ? 'wrap' : 'nowrap')};
  flex-direction: ${(props) =>
    props.direcao === Direcoes.H ? 'row' : 'column'};
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margem};

  @media ${dispositivos.laptop} {
    flex-wrap: nowrap;
  }
`
