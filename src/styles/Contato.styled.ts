import {Botao} from '@components/Botao'
import {Texto} from '@components/Texto'
import {Titulo} from '@components/Titulo'
import {TamanhosTexto} from '@data/enums'
import dispositivos from '@resources/dispositivos'
import {detalhe, subtitulo} from '@resources/textos'
import styled from 'styled-components'

export const FormularioContato = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const TituloContato = styled(Titulo)``

export const BotaoEnviarMensagemContato = styled(Botao)``

export const TextoDescricaoContato = styled.p`
  ${detalhe}

  font-size: 1rem;

  @media ${dispositivos.tablet} {
    width: 320px;
  }

  @media ${dispositivos.laptop} {
    font-size: 1.1rem;
    line-height: ${subtitulo.lineHeight};
    width: 470px;
  }

  @media ${dispositivos.laptopL} {
    font-size: 1.5rem;
    width: 600px;
  }
`
