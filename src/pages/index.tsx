import { Head } from '@components/Head/Head';
import { Cabecalho } from '@components/Cabecalho';
import { LayoutPaginasSite } from '@layouts/LayoutPaginasSite/LayoutPaginasSite';

export default function Home() {
  return (
    <LayoutPaginasSite titulo="Página Inicial">
      <h1>Home</h1>
    </LayoutPaginasSite>
  );
}
