import {ContainerTipo} from '@data/tipos'
import dispositivos from '@resources/dispositivos'
import margens from '@resources/margens'
import styled from 'styled-components'

export const Container = styled.span<ContainerTipo>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: ${(props) =>
    props.imagemFundo
      ? `url(${props.imagemFundo})`
      : props.corFundo
        ? props.corFundo
        : 'none'};
  background-size: cover;

  padding: ${margens.xlarge}px;
  width: 100%;

  @media ${dispositivos.laptop} {
    padding: ${props => props.padding ? props.padding : `0 0 0 ${margens.xxxlarge}px`};
  }

  @media ${dispositivos.laptopL} {
    padding: ${margens.xxxlarge}px;
  }
`
