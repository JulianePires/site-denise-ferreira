import {ChangeEventHandler, HTMLInputTypeAttribute} from 'react'
import {
  ContainerCampoTexto,
  FeedbackCampoTexto,
  InputCampoTexto,
  LabelCampoTexto,
} from './Input.styled'

interface Props {
  id: string
  nomeCampo: string
  label: string
  possuiErro?: boolean
  erro?: string
  valor: string
  tipo?: HTMLInputTypeAttribute
  aoAlterar: ChangeEventHandler<HTMLInputElement>
}

export function Input({
  id,
  nomeCampo,
  label,
  possuiErro = false,
  erro,
  valor,
  tipo = 'text',
  aoAlterar,
}: Props) {
  return (
    <ContainerCampoTexto>
      <LabelCampoTexto htmlFor={id}>{label}</LabelCampoTexto>
      <InputCampoTexto
        id={id}
        name={nomeCampo}
        type={tipo}
        value={valor}
        onChange={aoAlterar}
      />
      {possuiErro && <FeedbackCampoTexto>{erro}</FeedbackCampoTexto>}
    </ContainerCampoTexto>
  )
}
