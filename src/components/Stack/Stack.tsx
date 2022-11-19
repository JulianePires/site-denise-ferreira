import { DirecoesTipo } from "@data/tipos";
import { ReactNode } from "react";
import { ContainerStack } from "./Stack.styled";

interface Props {
  direcao: DirecoesTipo;
  gap: string;
  margem?: string;
  children: ReactNode;
}

export function Stack({ direcao, gap, margem, children }: Props) {
  return (
    <ContainerStack direcao={direcao} gap={gap} margem={margem}>
      {children}
    </ContainerStack>
  );
}
