import {BotaoIcone} from '@components/BotaoIcone'
import {Logo} from '@components/Logo'
import * as S from './Rodape.styled'
import {FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'
import {Stack} from '@components/Stack'
import {Direcoes} from '@data/enums'
import conteudoTexto from '@resources/conteudoTexto'

export function Rodape() {
  return (
    <S.ContainerRodape>
      <Logo cor="terra" />
      <S.TextoRodape>{conteudoTexto.textoRodape}</S.TextoRodape>
      <Stack direcao={Direcoes.H} gap="3rem">
        <BotaoIcone
          corBackground="terra"
          corIcone="amarelo"
          icone={FaInstagram}
          ariaLabel="Ir ao instagram"
        />
        <BotaoIcone
          corBackground="terra"
          corIcone="amarelo"
          icone={GrMail}
          ariaLabel="Ir ao gmail"
        />
        <BotaoIcone
          corBackground="terra"
          corIcone="amarelo"
          icone={FaLinkedinIn}
          ariaLabel="Ir ao linkedin"
        />
      </Stack>
    </S.ContainerRodape>
  )
}
