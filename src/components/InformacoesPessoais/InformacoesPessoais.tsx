import {Avatar} from '@/components/Avatar'
import {TamanhosComponente} from '@/data/enums'
import * as S from './InformacoesPessoais.styled'

interface Props {
  nome: string
  imagem: string
}

export function InformacoesPessoais({nome, imagem}: Props) {
  return (
    <S.ContainerInformacoesPessoais>
      <Avatar
        src={imagem}
        alt="Imagem de perfil do usuario logado"
        tamanho={TamanhosComponente.P}
      />
      <S.Nome>Olá, {nome}!</S.Nome>
    </S.ContainerInformacoesPessoais>
  )
}
