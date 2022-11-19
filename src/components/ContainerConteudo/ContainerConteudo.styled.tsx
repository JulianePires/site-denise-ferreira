import dispositivos from "@resources/dispositivos";
import styled from "styled-components";

interface ContainerExternoConteudoProps {
  corBackground: string;
}

export const ContainerExternoConteudo = styled.section<ContainerExternoConteudoProps>`
  display: flex;
  flex-wrap: wrap;

  height: 764px;

  background: ${(props) => props.corBackground};

  @media ${dispositivos.tablet} {
    flex-wrap: nowrap;
  }
`;
