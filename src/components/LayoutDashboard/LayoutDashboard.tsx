import { ReactNode } from 'react';
import { ContainerLayout, TituloLayout } from './LayoutDashboard.styled';

interface Props {
  titulo: string;
  children: ReactNode;
}

export function LayoutDashboard({ titulo, children }: Props) {
  return (
    <ContainerLayout>
      <TituloLayout>{titulo}</TituloLayout>
      {children}
    </ContainerLayout>
  );
}
