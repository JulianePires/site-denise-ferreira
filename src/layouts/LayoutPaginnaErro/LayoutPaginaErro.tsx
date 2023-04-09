import {Container} from '@/components/Container'
import {ContainerConteudo} from '@/components/ContainerConteudo'
import {Erro} from '@/components/Erro'
import {Stack} from '@/components/Stack'
import {Direcoes, Rotas} from '@/data/enums'
import useNavegacao from '@/hooks/useNavegacao'
import {LayoutPaginasSite} from '@/layouts/LayoutPaginasSite'
import cores from '@/resources/cores'
import margens from '@/resources/margens'
import {BsArrowLeft} from 'react-icons/bs'

import * as S from './LayoutPaginaErro.styled'

interface Props {
  erro: {
    status: number
    mensagem: string
  }
  titulo: string
}

export function LayoutPaginaErro({erro, titulo}: Props) {
  const {navegarParaRota} = useNavegacao()
  const {status, mensagem} = erro

  function navegarParaHome() {
    navegarParaRota(Rotas.HOME)
  }

  return (
    <LayoutPaginasSite titulo={titulo}>
      <ContainerConteudo
        corBackground={cores.terra}
        altura={650}
        reverso={true}>
        <Container
          padding={`${margens.xxxlarge}px ${margens.xxxlarge}px`}
          largura="50%"
          altura="650px"
          justificar="center">
          <Stack
            direcao={Direcoes.V}
            gap="1rem"
            largura="100%"
            margem="0 0 2rem 0">
            <S.TextoDescritivo>
              Sentimos muito, o conteúdo não pôde ser carregado.
            </S.TextoDescritivo>
            <S.TextoDescritivo>
              <S.LinkParaContato href="/contato">
                Entre em contato conosco
              </S.LinkParaContato>{' '}
              para mais informações.
            </S.TextoDescritivo>
          </Stack>
          <S.BotaoRetorno
            ariaLabel="Botão de volta para tela inicial"
            aoClicar={navegarParaHome}>
            <BsArrowLeft color={cores.branco} className="mr-2" /> Voltar para
            página inicial
          </S.BotaoRetorno>
        </Container>

        <Erro codigo={status} mensagem={mensagem} />
      </ContainerConteudo>
    </LayoutPaginasSite>
  )
}
