import dispositivos from '@resources/dispositivos'
import styled from 'styled-components'

interface ContainerExternoConteudoProps {
  corBackground: string
}

export const ContainerExternoConteudo = styled.section<ContainerExternoConteudoProps>`
  display: flex;
  flex-wrap: wrap;

  height: fit-content;

  background: ${(props) => props.corBackground};

  @media ${dispositivos.laptop} {
    flex-wrap: nowrap;
    height: 764px;
  }
`
