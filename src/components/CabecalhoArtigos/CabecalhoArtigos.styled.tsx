import dispositivos from '@resources/dispositivos'
import margens from '@resources/margens'
import styled from 'styled-components'

import BannerAmareloDesktop from '@assets/imagens/BannerAmareloDesktop.png'
import BannerAmareloMobile from '@assets/imagens/BannerAmareloMobile.png'
import BannerAmareloTablet from '@assets/imagens/BannerAmareloTablet.png'
import {Input} from '@components/Input'

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

export const FiltroCategorias = styled.ul``

export const Categoria = styled.li``
