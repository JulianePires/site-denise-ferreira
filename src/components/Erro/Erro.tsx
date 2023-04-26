import * as S from './Erro.styled'

import error from '@/assets/arquivosLottie/error.json'
import {Stack} from '@/components/Stack'
import {Texto} from '@/components/Texto'
import {Titulo} from '@/components/Titulo'
import {Direcoes, StatusRequisicao, TamanhosTexto} from '@/data/enums'
import margens from '@/resources/margens'
import imagens from '@/resources/imagens'
import {buscaAsset} from '@/infrastructure/requisicoes/asset'
import {Asset} from '@/data/tipos'
import {useEffect, useState} from 'react'

interface Props {
  codigo: number
  mensagem: string
  largura?: string
}

export function Erro({codigo, mensagem, largura}: Props) {
  const [imagemFundo, setImagemFundo] = useState('')
  const {idTexturaVinho} = imagens

  const reqTexturaVinho = buscaAsset(idTexturaVinho)

  useEffect(() => {
    reqTexturaVinho.then((resposta) => {
      const {status, dados} = resposta
      const imagem = dados.asset as Asset

      if (status === StatusRequisicao.SUCESSO) {
        setImagemFundo(imagem.url)
      }
    })
  }, [reqTexturaVinho])

  return (
    <S.ContainerErro
      largura={largura}
      padding={`${margens.xxxlarge}px ${margens.xxxlarge}px`}
      imagemFundo={imagemFundo}
      justificar="center"
      altura="650px">
      <S.ImagemErro
        animationData={error}
        alt="Mulher com as mãos erguidas em um gesto de confusão por encontrar um erro em seu computador"
      />
      <Stack direcao={Direcoes.V} gap="1rem" alinhar="center">
        <Titulo>{codigo}</Titulo>
        <Texto tamanho={TamanhosTexto.M}>{mensagem}</Texto>
      </Stack>
    </S.ContainerErro>
  )
}
