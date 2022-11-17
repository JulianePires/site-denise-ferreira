import { Logo } from '@components/Logo';
import opcoesMenuHome from '@routes/menu';
import { useRouter } from 'next/router';
import {
  ContainerCabecalho,
  ContainerOpcoesMenu,
  OpcaoMenu,
} from './Cabecalho.styled';

export function Cabecalho() {
  const router = useRouter();
  const caminho = router.pathname;

  function aoClicarNaOpcao(caminho: string) {
    router.push(caminho);
  }

  return (
    <ContainerCabecalho>
      <Logo />
      <ContainerOpcoesMenu>
        {opcoesMenuHome.map((opcao, index) => (
          <OpcaoMenu
            onClick={() => aoClicarNaOpcao(opcao.caminho)}
            atual={String(caminho === opcao.caminho)}
            key={index}
          >
            {opcao.nome}
          </OpcaoMenu>
        ))}
      </ContainerOpcoesMenu>
    </ContainerCabecalho>
  );
}
