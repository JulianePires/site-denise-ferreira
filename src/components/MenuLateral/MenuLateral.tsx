import {InformacoesPessoais} from '@components/InformacoesPessoais'
import {Logo} from '@components/Logo'
import {OpcaoMenu} from '@data/tipos'
import {
  ContainerMenuLateral,
  Opcao,
  OpcoesMenu,
  Titulo,
} from './MenuLateral.styled'

interface Props {
  titulo: string
  opcoes: OpcaoMenu[]
  opcaoAtual: string
  aoAlterarOpcao: (opcao: OpcaoMenu) => void
}

export function MenuLateral({
  titulo,
  opcoes,
  aoAlterarOpcao,
  opcaoAtual,
}: Props) {
  return (
    <ContainerMenuLateral>
      <Logo cor="amarela" />

      <Titulo>{titulo}</Titulo>

      <InformacoesPessoais imagem="" nome="Juliane" />

      <OpcoesMenu>
        {opcoes.map((opcao, index) => (
          <Opcao
            atual={String(opcao.caminho === opcaoAtual)}
            onClick={() => aoAlterarOpcao(opcao)}
            key={index}>
            {opcao.nome}
          </Opcao>
        ))}
      </OpcoesMenu>
    </ContainerMenuLateral>
  )
}
