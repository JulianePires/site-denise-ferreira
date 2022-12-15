import {BotaoIcone} from '@components/BotaoIcone'
import {Logo} from '@components/Logo'
import {Stack} from '@components/Stack'
import {Direcoes} from '@data/enums'
import {abreUrlExternaEmNovaAba} from '@infrastructure/funcoes'
import conteudoTexto from '@resources/conteudoTexto'
import {FaInstagram, FaLinkedinIn} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'

import * as S from './Rodape.styled'

export function Rodape() {
  function redirecionarParaInstagram() {
    abreUrlExternaEmNovaAba('https://www.instagram.com/soudeniseferreira/')
  }

  function redirecionarParaLinkedin() {
    abreUrlExternaEmNovaAba('https://www.linkedin.com/in/soudeniseferreira/')
  }

  function acionarEnvioDeEmail() {
    abreUrlExternaEmNovaAba('mailto:contato@deniseferreira.com.br')
  }

  return (
    <S.ContainerRodape>
      <Logo cor="terra" />
      <S.TextoRodape>{conteudoTexto.textoRodape}</S.TextoRodape>
      <Stack largura="fit-content" direcao={Direcoes.H} gap="3rem">
        <BotaoIcone
          aoClicar={redirecionarParaInstagram}
          corBackground="terra"
          corIcone="amarelo"
          icone={FaInstagram}
          ariaLabel="Ir ao instagram"
        />
        <BotaoIcone
          aoClicar={acionarEnvioDeEmail}
          corBackground="terra"
          corIcone="amarelo"
          icone={GrMail}
          ariaLabel="Enviar email"
        />
        <BotaoIcone
          aoClicar={redirecionarParaLinkedin}
          corBackground="terra"
          corIcone="amarelo"
          icone={FaLinkedinIn}
          ariaLabel="Ir ao linkedin"
        />
      </Stack>
    </S.ContainerRodape>
  )
}
