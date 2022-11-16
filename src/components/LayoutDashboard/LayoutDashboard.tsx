import { ReactNode } from 'react';
import {
  BannerLayout,
  ContainerLayout,
  TituloLayout,
} from './LayoutDashboard.styled';

interface Props {
  titulo: string;
  children: ReactNode;
}

export function LayoutDashboard({ titulo, children }: Props) {
  return (
    <ContainerLayout>
      <BannerLayout />
      <TituloLayout>{titulo}</TituloLayout>
      {children}
    </ContainerLayout>
  );
}
