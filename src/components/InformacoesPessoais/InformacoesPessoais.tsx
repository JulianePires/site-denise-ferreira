import {Avatar} from '@components/Avatar'
import {TamanhosComponente} from '@data/enums'
import {ContainerInformacoesPessoais, Nome} from './InformacoesPessoais.styled'

interface Props {
  nome: string
  imagem: string
}

export function InformacoesPessoais({nome, imagem}: Props) {
  return (
    <ContainerInformacoesPessoais>
      <Avatar
        src={imagem}
        alt="Imagem de perfil do usuario logado"
        tamanho={TamanhosComponente.M}
      />
      <Nome>Olá, {nome}!</Nome>
    </ContainerInformacoesPessoais>
  )
}
