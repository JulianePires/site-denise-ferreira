import { Cabecalho } from '@components/Cabecalho';
import { Head } from '@components/Head';
import { ReactNode } from 'react';
import { Container } from './LayoutPaginaSite.styled';

interface Props {
  children: ReactNode;
  titulo: string;
}

export function LayoutPaginasSite({ children, titulo }: Props) {
  return (
    <Container>
      <Head titulo={titulo} />
      <Cabecalho />
      {children}
    </Container>
  );
}