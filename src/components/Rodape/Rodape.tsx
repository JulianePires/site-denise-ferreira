import {BotaoIcone} from '@components/BotaoIcone'
import {Logo} from '@components/Logo'
import {ContainerRodape, TextoRodape} from './Rodape.styled'
import {FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'
import {Stack} from '@components/Stack'
import {Direcoes} from '@data/enums'
import conteudoTexto from '@resources/conteudoTexto'

export function Rodape() {
  return (
    <ContainerRodape>
      <Logo cor="terra" />
      <TextoRodape>{conteudoTexto.textoRodape}</TextoRodape>
      <Stack direcao={Direcoes.H} gap="4rem">
        <BotaoIcone
          corBackground="terra"
          corIcone="amarelo"
          icone={FaInstagram}
        />
        <BotaoIcone corBackground="terra" corIcone="amarelo" icone={GrMail} />
        <BotaoIcone
          corBackground="terra"
          corIcone="amarelo"
          icone={FaLinkedinIn}
        />
      </Stack>
    </ContainerRodape>
  )
}
