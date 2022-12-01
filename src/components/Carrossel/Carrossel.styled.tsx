import {Texto} from '@components/Texto'
import {TamanhosTexto} from '@data/enums'
import Image from 'next/image'
import styled from 'styled-components'

export const ContainerCarrossel = styled.div`
  width: 100%;

  overflow-x: hidden;
`

export const ImagensCarrossel = styled.div``

export const ImagemCarrossel = styled(Image)``

export const DescricaoImagemCarrossel = styled(Texto).attrs({
  tamanho: TamanhosTexto.P,
})``

export const BotaoImagemCarrossel = 

export const ControleCarrossel = styled.span``

export const IndexCarrossel = styled(Texto)``

export const SetaCarrossel = styled.div``
