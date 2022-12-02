import {Direcoes} from '@data/enums'
import {AlinhamentoTipo, DirecoesTipo} from '@data/tipos'
import dispositivos from '@resources/dispositivos'
import styled from 'styled-components'

export interface ContainerStackProps {
  direcao: DirecoesTipo
  gap: string
  margem?: string
  wrap?: string
  alinhar?: AlinhamentoTipo
  justificar?: AlinhamentoTipo
  autoAlinhar?: AlinhamentoTipo
}

export const ContainerStack = styled.span<ContainerStackProps>`
  display: flex;
  flex-wrap: ${(props) => (props.wrap === 'true' ? 'wrap' : 'nowrap')};
  flex-direction: ${(props) =>
    props.direcao === Direcoes.H ? 'row' : 'column'};
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margem};

  align-items: ${(props) => props.alinhar};
  justify-content: ${(props) => props.justificar};
  align-self: ${(props) => props.autoAlinhar};

  @media ${dispositivos.laptop} {
    flex-wrap: nowrap;
  }
`
