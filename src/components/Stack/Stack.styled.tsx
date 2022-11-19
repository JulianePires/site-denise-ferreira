import { Direcoes } from "@data/enums";
import { DirecoesTipo } from "@data/tipos";
import styled from "styled-components";

interface ContainerStackProps {
  direcao: DirecoesTipo;
  gap: string;
  margem?: string;
}

export const ContainerStack = styled.span<ContainerStackProps>`
  display: flex;
  flex-direction: ${(props) =>
    props.direcao === Direcoes.H ? "row" : "column"};
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margem};
`;
