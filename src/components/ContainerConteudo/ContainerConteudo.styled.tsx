import styled from "styled-components";

interface ContainerExternoConteudoProps {
  corBackground: string;
}

export const ContainerExternoConteudo = styled.div<ContainerExternoConteudoProps>`
  display: flex;
  flex-wrap: wrap;

  height: 764px;

  background: ${(props) => props.corBackground};
`;
