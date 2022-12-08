import {ContainerConteudo} from '@components/ContainerConteudo'
import {ImagemComFallback} from '@components/ImagemComFallback'
import {Stack} from '@components/Stack'
import {Texto} from '@components/Texto'
import {Titulo} from '@components/Titulo'
import {Direcoes, TamanhosTexto} from '@data/enums'
import dispositivos from '@resources/dispositivos'
import {detalhe, subtitulo} from '@resources/textos'
import styled from 'styled-components'

import BannerAmareloMobile from '@assets/imagens/BannerAmareloMobile.png'
import BannerAmareloTablet from '@assets/imagens/BannerAmareloTablet.png'
import BannerAmareloDesktop from '@assets/imagens/BannerAmareloDesktop.png'
import cores from '@resources/cores'
import margens from '@resources/margens'

export const ContainerDestaqueBlog = styled(ContainerConteudo)``

export const TituloDestaqueBlog = styled(Titulo)``

export const ConteudoDestaqueBlog = styled.p`
  ${detalhe}

  font-size: 1.2rem;

  @media ${dispositivos.laptop} {
    font-size: 1.3rem;
    line-height: ${subtitulo.lineHeight};
    width: 90%;
  }

  @media ${dispositivos.laptopL} {
    font-size: 1.5rem;
    width: 100%;
  }
`

export const ContainerImagemDestaqueBlog = styled(ImagemComFallback)``

export const InformacoesDestaqueBlog = styled(Texto).attrs({
  tamanho: TamanhosTexto.PP,
})``

export const AgrupamentoDestaqueBlog = styled(Stack).attrs({
  direcao: Direcoes.H,
  gap: '1rem',
  alinhar: 'center',
})`
  width: fit-content;
`

export const CabecalhoArtigos = styled.div`
  width: 100%;
  height: 140px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${margens.medium}px ${margens.xxxlarge}px;

  background: url(${BannerAmareloMobile.src});
  background-size: cover;
  background-position: center;

  @media ${dispositivos.tablet} {
    background: url(${BannerAmareloTablet.src});
  }

  @media ${dispositivos.laptopL} {
    background: url(${BannerAmareloDesktop.src});
  }
`
