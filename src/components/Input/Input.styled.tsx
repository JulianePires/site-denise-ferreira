import cores from '@resources/cores'
import margens from '@resources/margens'
import {detalhe, paragrafo, subtitulo} from '@resources/textos'
import styled from 'styled-components'

export const ContainerCampoTexto = styled.div`
  display: flex;
  flex-direction: column;
`

export const LabelCampoTexto = styled.label`
  ${paragrafo}

  font-family: ${subtitulo.fontFamily};

  color: ${cores.branco};
`

interface InputCampoTextoProps {
  possuiErro: string
}

export const InputCampoTexto = styled.input<InputCampoTextoProps>`
  ${detalhe}

  height: 2.5rem;

  border: 2px solid;
  border-color: ${(props) =>
    props.possuiErro === 'true' ? cores.erro : cores.vinho};
  border-radius: 8px;
  background: ${cores.terra};

  padding: ${margens.xxsmall}px ${margens.xsmall}px;

  font-family: ${paragrafo.fontFamily};

  &::placeholder {
    color: ${cores.vinho};
  }
`

interface TextareaCampoTextoProps {
  possuiErro: string
}

export const TextareaCampoTexto = styled.textarea<TextareaCampoTextoProps>`
  ${detalhe}

  height: 8rem;

  border: 2px solid;
  border-color: ${(props) =>
    props.possuiErro === 'true' ? cores.erro : cores.vinho};
  border-radius: 8px;
  background: ${cores.terra};

  padding: ${margens.xsmall}px;

  font-family: ${paragrafo.fontFamily};

  &::placeholder {
    color: ${cores.vinho};
  }
`

export const FeedbackCampoTexto = styled.p`
  ${detalhe}
  font-family: ${subtitulo.fontFamily};
  font-size: 13px;

  margin: 0 0 0.5rem 0;
  padding: 0;

  color: ${cores.erro};
`
