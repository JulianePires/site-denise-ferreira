/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {Direcoes} from '@data/enums'
import {ChaveValor} from '@data/tipos'
import cores from '@resources/cores'
import {isEmpty} from 'ramda'
import {ChangeEventHandler, HTMLInputTypeAttribute} from 'react'
import {IconType} from 'react-icons'
import {
  BsBuilding,
  BsFillBriefcaseFill,
  BsMailbox,
  BsPersonFill,
} from 'react-icons/bs'
import * as S from './Input.styled'

const iconesInput: ChaveValor<IconType> = {
  nome: BsPersonFill,
  email: BsMailbox,
  cidade: BsBuilding,
  organizacao: BsFillBriefcaseFill,
}

interface Props {
  id: string
  nomeCampo: string
  placeholder: string
  label: string
  erro?: string
  valor: string
  tipo?: HTMLInputTypeAttribute
  textArea?: boolean
  icone?: IconType
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
  icone,
  aoAlterar,
}: Props) {
  function verificaSePossuiErro(erro: string) {
    return String(!isEmpty(erro))
  }

  const Icone = iconesInput[nomeCampo]

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
        <S.WrapInput direcao={Direcoes.H} gap="0.5rem" alinhar="center">
          <Icone color={cores.branco} width={20} />
          <S.InputCampoTexto
            id={id}
            name={nomeCampo}
            type={tipo}
            value={valor}
            onChange={aoAlterar}
            placeholder={placeholder}
            possuiErro={verificaSePossuiErro(erro)}
          />
        </S.WrapInput>
      )}

      {verificaSePossuiErro(erro) && (
        <S.FeedbackCampoTexto>{erro}</S.FeedbackCampoTexto>
      )}
    </S.ContainerCampoTexto>
  )
}
