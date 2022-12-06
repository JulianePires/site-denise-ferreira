import {EstilosBotao, TamanhosComponente} from '@data/enums'
import {Tema, TemasCores} from '@data/tipos'
import cores from '@resources/cores'
import {paragrafo, subtitulo} from '@resources/textos'
import styled from 'styled-components'

interface ContainerBotaoProps {
  estilo: string
  tamanho: keyof typeof TamanhosComponente
  tema: TemasCores
  desabilitaTema?: string
  corFundo?: string
  corFonte?: string
}

function trataCoresPorTema(tema: TemasCores): Tema {
  if (tema === 'amarelo') {
    return {
      corPrimaria: cores.amarelo,
      corSecundaria: cores.azulPetroleo,
      corGhost: cores.amareloGhost,
    }
  }

  if (tema === 'azulPetroleo') {
    return {
      corPrimaria: cores.azulPetroleo,
      corSecundaria: cores.amarelo,
      corGhost: cores.azulPetroleoGhost,
    }
  }

  if (tema === 'terra') {
    return {
      corPrimaria: cores.terra,
      corSecundaria: cores.amarelo,
      corGhost: cores.terraGhost,
    }
  }

  return {
    corPrimaria: cores.vinho,
    corSecundaria: cores.branco,
    corGhost: cores.vinhoGhost,
  }
}

export const ContainerBotao = styled.button<ContainerBotaoProps>`
  background: ${({estilo, tema, desabilitaTema, corFundo}) => {
    if (desabilitaTema === 'true') {
      return corFundo
    }
    if (estilo === EstilosBotao.UNSTYLED) {
      return 'none'
    }
    if (estilo === EstilosBotao.OUTLINE) {
      return trataCoresPorTema(tema).corSecundaria
    }
    if (estilo === EstilosBotao.GHOST) {
      return trataCoresPorTema(tema).corGhost
    }
    if (tema) return trataCoresPorTema(tema).corPrimaria
  }};

  color: ${({estilo, tema, desabilitaTema, corFonte}) => {
    if (desabilitaTema === 'true') {
      return corFonte
    }
    if (estilo === EstilosBotao.SOLID) {
      return trataCoresPorTema(tema).corSecundaria
    }
    return trataCoresPorTema(tema).corPrimaria
  }};

  border: ${({estilo, tema}) => {
    if (estilo === EstilosBotao.OUTLINE) {
      return `2px solid ${trataCoresPorTema(tema).corPrimaria}`
    }
    return 'none'
  }};

  ${paragrafo}

  font-family: ${subtitulo.fontFamily};
  height: 45px;
  width: fit-content;
  border-radius: 8px;
  padding: 1.5rem;

  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s ease-in-out all;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`
