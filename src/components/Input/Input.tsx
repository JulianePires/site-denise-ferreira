import {isEmpty} from 'ramda'
import {ChangeEventHandler, HTMLInputTypeAttribute} from 'react'
import * as S from './Input.styled'

interface Props {
  id: string
  nomeCampo: string
  placeholder: string
  label: string
  erro?: string
  valor: string
  tipo?: HTMLInputTypeAttribute
  textArea?: boolean
  aoAlterar: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

export function Input({
  id,
  nomeCampo,
  placeholder,
  label,
  erro = '',
  valor,
  tipo = 'text',
  textArea = false,
  aoAlterar,
}: Props) {
  function verificaSePossuiErro(erro: string) {
    return String(!isEmpty(erro))
  }

  return (
    <S.ContainerCampoTexto>
      <S.LabelCampoTexto htmlFor={id}>{label}</S.LabelCampoTexto>
      {textArea ? (
        <S.TextareaCampoTexto
          id={id}
          name={nomeCampo}
          value={valor}
          onChange={aoAlterar}
          placeholder={placeholder}
          possuiErro={verificaSePossuiErro(erro)}
        />
      ) : (
        <S.InputCampoTexto
          id={id}
          name={nomeCampo}
          type={tipo}
          value={valor}
          onChange={aoAlterar}
          placeholder={placeholder}
          possuiErro={verificaSePossuiErro(erro)}
        />
      )}

      {verificaSePossuiErro(erro) && (
        <S.FeedbackCampoTexto>{erro}</S.FeedbackCampoTexto>
      )}
    </S.ContainerCampoTexto>
  )
}
