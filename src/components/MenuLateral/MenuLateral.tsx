import { OpcaoMenu } from '@data/tipos';
import {
  ContainerMenuLateral,
  OpcoesMenu,
  Opcao,
  Titulo,
} from './MenuLateral.styled';

interface Props {
  titulo: string;
  opcoes: OpcaoMenu[];
  opcaoAtual: string;
  aoAlterarOpcao: (opcao: OpcaoMenu) => void;
}

export function MenuLateral({
  titulo,
  opcoes,
  aoAlterarOpcao,
  opcaoAtual,
}: Props) {
  return (
    <ContainerMenuLateral>
      <Titulo>{titulo}</Titulo>
      <OpcoesMenu>
        {opcoes.map((opcao, index) => (
          <Opcao
            atual={String(opcao.caminho === opcaoAtual)}
            onClick={() => aoAlterarOpcao(opcao)}
            key={index}
          >
            {opcao.nome}
          </Opcao>
        ))}
      </OpcoesMenu>
    </ContainerMenuLateral>
  );
}
