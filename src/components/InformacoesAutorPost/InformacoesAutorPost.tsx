import {Avatar} from '@components/Avatar'
import {Stack} from '@components/Stack'
import {Direcoes} from '@data/enums'
import {AlinhamentoTipo} from '@data/tipos'
import {formataDataParaPadrao} from '@infrastructure/funcoes'
import * as S from './InformacoesAutorPost.styled'

interface Props {
  imagemAvatar: string
  nomeAutor: string
  dataCriacaoPost: string
  alinhar?: AlinhamentoTipo
  justificar?: AlinhamentoTipo
  autoAlinhar?: AlinhamentoTipo
}

export function InformacoesAutorPost({
  dataCriacaoPost,
  imagemAvatar,
  nomeAutor,
  alinhar = 'flex-start',
  justificar = 'center',
  autoAlinhar = 'flex-start'
}: Props) {
  const dataCriacaoFormatada = formataDataParaPadrao(dataCriacaoPost)

  const textoAlternativoFotoAutor = `Foto de perfil de ${nomeAutor}`

  return (
    <Stack
      direcao={Direcoes.H}
      gap="1rem"
      alinhar={alinhar}
      justificar={justificar} autoAlinhar={autoAlinhar}>
      <Avatar src={imagemAvatar} alt={textoAlternativoFotoAutor} tamanho={50} />
      <Stack direcao={Direcoes.V} gap="0.1rem" largura='fit-content'>
        <S.NomeAutorPost>{nomeAutor}</S.NomeAutorPost>
        <S.DataCriacaoPost>{dataCriacaoFormatada}</S.DataCriacaoPost>
      </Stack>
    </Stack>
  )
}
