import {ContainerTipo} from '@data/tipos'
import dispositivos from '@resources/dispositivos'
import margens from '@resources/margens'
import styled from 'styled-components'

export const Container = styled.span<ContainerTipo>`
  display: flex;
  flex-direction: column;
  justify-content: ${({justificar}) => (justificar ? justificar : 'center')};

  background: ${(props) =>
    props.imagemFundo
      ? `url(${props.imagemFundo})`
      : props.corFundo
        ? props.corFundo
        : 'none'};
  background-size: cover;
  background-position: center;

  padding: ${margens.xlarge}px;
  width: 100%;
  min-height: ${(props) => (props.altura ? props.altura : 'initial')};
  height: 100%;

  @media ${dispositivos.laptop} {
    padding: ${(props) =>
    props.padding ? props.padding : `0 0 0 ${margens.xxxlarge}px`};
  }

  @media ${dispositivos.laptopL} {
    padding: ${margens.xxxlarge}px;
  }
`
