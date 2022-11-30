import dispositivos from '@resources/dispositivos'
import styled from 'styled-components'

interface ContainerExternoConteudoProps {
  corBackground: string
  altura?: number
}

export const ContainerExternoConteudo = styled.section<ContainerExternoConteudoProps>`
  display: flex;
  flex-wrap: wrap;

  height: ${(props) => (props.altura ? props.altura + 'px' : 'fit-content')};

  background: ${(props) => props.corBackground};

  @media ${dispositivos.laptop} {
    flex-wrap: nowrap;
  }
`
