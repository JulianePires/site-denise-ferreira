import {InformacoesPessoais} from '@components/InformacoesPessoais'
import {Logo} from '@components/Logo'
import {OpcaoMenu} from '@data/tipos'
import * as S from './MenuLateral.styled'

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
    <S.ContainerMenuLateral>
      <Logo cor="amarela" />

      <S.Titulo>{titulo}</S.Titulo>

      <InformacoesPessoais imagem="" nome="Juliane" />

      <S.OpcoesMenu>
        {opcoes.map((opcao, index) => (
          <S.Opcao
            atual={String(opcao.caminho === opcaoAtual)}
            onClick={() => aoAlterarOpcao(opcao)}
            key={index}>
            {opcao.nome}
          </S.Opcao>
        ))}
      </S.OpcoesMenu>
    </S.ContainerMenuLateral>
  )
}
