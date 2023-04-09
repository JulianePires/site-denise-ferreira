/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {Direcoes} from '@/data/enums'
import {ChaveValor} from '@/data/tipos'
import cores from '@/resources/cores'
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
  corLabel?: string
  corCampo?: string
  corTexto?: string
  erro?: string
  valor: string
  tipo?: HTMLInputTypeAttribute
  textArea?: boolean
  icone?: IconType
  largura?: string
  aoAlterar: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

export function Input({
  id,
  nomeCampo,
  placeholder,
  label,
  corLabel = cores.branco,
  corCampo = cores.terra,
  corTexto = cores.branco,
  erro = '',
  valor,
  tipo = 'text',
  textArea = false,
  icone,
  largura = '100%',
  aoAlterar,
}: Props) {
  function verificaSePossuiErro(erro: string) {
    return String(!isEmpty(erro))
  }

  const Icone = icone ? icone : iconesInput[nomeCampo]

  return (
    <S.ContainerCampoTexto>
      <S.LabelCampoTexto cor={corLabel} htmlFor={id}>
        {label}
      </S.LabelCampoTexto>
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
          <Icone color={corLabel} width={20} />
          <S.InputCampoTexto
            id={id}
            name={nomeCampo}
            type={tipo}
            value={valor}
            largura={largura}
            onChange={aoAlterar}
            placeholder={placeholder}
            possuiErro={verificaSePossuiErro(erro)}
            corCampo={corCampo}
            corTexto={corTexto}
          />
        </S.WrapInput>
      )}

      {verificaSePossuiErro(erro) && (
        <S.FeedbackCampoTexto>{erro}</S.FeedbackCampoTexto>
      )}
    </S.ContainerCampoTexto>
  )
}
