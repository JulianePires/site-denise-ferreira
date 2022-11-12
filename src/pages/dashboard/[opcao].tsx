import { Head } from '@components/Head';
import { MenuLateral } from '@components/MenuLateral';
import { OpcaoMenu } from '@data/tipos';
import opcoesMenuDashboard from '@routes/dashboard';
import { Container } from '@styles/Dashboard.styled';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const router = useRouter();
  const { opcaoParametro } = router.query;
  const opcaoAtual = opcaoParametro as string;

  function aoAlterarOpcao(opcao: OpcaoMenu) {
    router.push(`/dashboard/${opcao.caminho}`);
  }

  return (
    <Container>
      <Head titulo="Dashboard" />
      <MenuLateral
        titulo="Administrar Blog"
        opcoes={opcoesMenuDashboard}
        opcaoAtual={opcaoAtual}
        aoAlterarOpcao={aoAlterarOpcao}
      />
    </Container>
  );
}
