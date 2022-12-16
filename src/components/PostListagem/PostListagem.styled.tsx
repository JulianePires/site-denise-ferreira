import { Stack } from '@components/Stack'
import cores from '@resources/cores'
import dispositivos from '@resources/dispositivos'
import margens from '@resources/margens'
import {detalhe, paragrafo, subtitulo} from '@resources/textos'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

export const CartaoPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: all 0.3s ease-in-out;

  background: ${cores.terra};
  border-radius: 12px;
  cursor: pointer;

  text-justify: newspaper;

  width: 250px;
  height: 700px;

  @media ${dispositivos.mobileM} {
    width: 300px;
  }

  &:hover {
    transform: scale(1.06);
  }
`

export const ImagemCartaoPost = styled(Image)`
  border-radius: 12px 12px 0 0;
  width: 250px;
  height: 250px;

  @media ${dispositivos.mobileM} {
    width: 300px;
    height: 300px;
  }
`

export const ConteudoCartaoPost = styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  padding: ${margens.medium}px;
`

export const TituloPost = styled(Link)`
  color: ${cores.amarelo};

  font-family: ${subtitulo.fontFamily};
  font-size: 1.2rem;
  text-align: justify;
`

export const SubtituloPost = styled.p``

export const AmostraConteudoPost = styled.p`
  color: ${cores.branco};

  font-family: ${paragrafo.fontFamily};
  text-align: justify;
`

interface RodapeCartaoPost {
  imagemFundo?: string
}

export const RodapeCartaoPost = styled.span<RodapeCartaoPost>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background: ${({imagemFundo}) =>
    imagemFundo ? `url(${imagemFundo})` : cores.vinho};
  background-size: cover;

  height: 160px;
  border-radius: 0 0 12px 12px;
  padding: ${margens.small}px;

  @media ${dispositivos.mobileM} {
    height: 160px;
  }
`

export const CategoriasPost = styled(Stack)`
  flex-wrap: wrap;
`