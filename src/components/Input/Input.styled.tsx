import {Stack} from '@/components/Stack'
import cores from '@/resources/cores'
import margens from '@/resources/margens'
import {detalhe, paragrafo, subtitulo} from '@/resources/textos'
import styled from 'styled-components'

export const ContainerCampoTexto = styled.div`
  display: flex;
  flex-direction: column;
`

interface LabelCampoTextoProps {
  cor: string
}

export const LabelCampoTexto = styled.label<LabelCampoTextoProps>`
  ${paragrafo}

  font-family: ${subtitulo.fontFamily};

  color: ${({cor}) => cor};
`

export const WrapInput = styled(Stack)`
  width: 100%;
`

interface InputCampoTextoProps {
  possuiErro: string
  largura: string
  corCampo: string
  corTexto: string
}

export const InputCampoTexto = styled.input<InputCampoTextoProps>`
  ${detalhe}

  height: 2.5rem;
  width: ${({largura}) => largura};

  border: none;
  border-bottom: 2px solid;
  border-color: ${({possuiErro, corCampo}) =>
    possuiErro === 'true' ? cores.erro : corCampo};
  color: ${({corTexto}) => corTexto};
  background: none;

  padding: ${margens.xxsmall}px ${margens.xsmall}px;

  font-family: ${paragrafo.fontFamily};

  &::placeholder {
    color: ${({corCampo}) => corCampo};
  }
`

interface TextareaCampoTextoProps {
  possuiErro: string
}

export const TextareaCampoTexto = styled.textarea<TextareaCampoTextoProps>`
  ${detalhe}

  height: 8rem;

  border: none;
  border-bottom: 2px solid;
  border-color: ${(props) =>
    props.possuiErro === 'true' ? cores.erro : cores.terra};
  color: ${cores.branco};
  background: none;

  padding: ${margens.xxsmall}px ${margens.xsmall}px;

  font-family: ${paragrafo.fontFamily};

  &::placeholder {
    color: ${cores.terra};
    align-self: flex-end;
  }

  resize: none;
`

export const FeedbackCampoTexto = styled.p`
  ${detalhe}
  font-family: ${subtitulo.fontFamily};
  font-size: 13px;

  margin: 0 0 0.5rem 0;
  padding: 0;

  color: ${cores.erro};
`
