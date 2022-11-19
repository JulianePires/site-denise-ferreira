import {InformacoesPessoais} from '@components/InformacoesPessoais'
import {OpcaoMenu} from '@data/tipos'
import imagens from '@resources/imagens'
import Image from 'next/image'
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
      <Image
        src={imagens.sankofaLongaAmarela.src}
        alt={imagens.sankofaLongaTerra.alt}
        width={150}
        height={100}
      />
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
