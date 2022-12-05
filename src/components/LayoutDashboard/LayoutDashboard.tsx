import {Asset} from '@data/tipos'
import imagens from '@resources/imagens'
import {buscaAsset} from '@infrastructure/requisicoes/asset'
import {ReactNode, useEffect, useState} from 'react'
import * as S from './LayoutDashboard.styled'

interface Props {
  titulo: string
  children: ReactNode
}

export function LayoutDashboard({titulo, children}: Props) {
  const [textura, setTextura] = useState('')
  const {idTexturaAmarela} = imagens
  const reqTexturaAmarela = buscaAsset(idTexturaAmarela)

  function atualizaTexturaBanner() {
    reqTexturaAmarela.then((resposta) => {
      const imagemBuscada = resposta.dados.asset as Asset

      setTextura(imagemBuscada.url)
    })
  }

  useEffect(() => {
    atualizaTexturaBanner()
  }, [])

  return (
    <S.ContainerExternoLayout>
      <S.BannerLayout imagemFundo={textura} />
      <S.ContainerInternoLayout>
        <S.TituloLayout>{titulo}</S.TituloLayout>
        {children}
      </S.ContainerInternoLayout>
    </S.ContainerExternoLayout>
  )
}
