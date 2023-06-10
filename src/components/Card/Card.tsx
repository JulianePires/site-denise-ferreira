import {memo} from 'react'
import * as S from './Card.styled'
import {Botao} from '../Botao'
import {BotaoIcone} from '../BotaoIcone'
import useNavegacao from '@/hooks/useNavegacao'
import {FaTrash} from 'react-icons/fa'
import cores from '@/resources/cores'

interface Props {
  imagem: string
  postId: string
}

function CardComponent({imagem, postId}: Props) {
  const {navegarParaEdicaoDePost} = useNavegacao()

  function acessarPost() {
    navegarParaEdicaoDePost(postId)
  }

  function removerPost() {
    alert('post removido')
  }

  return (
    <S.CardContainer>
      <S.CardCover imagemFundo={imagem} />
      <S.CardContent></S.CardContent>
      <S.CardActions>
        <Botao aoClicar={acessarPost} ariaLabel="Acessar">
          Acessar
        </Botao>
        <BotaoIcone
          ariaLabel="Remover post"
          corBackground="vinho"
          corIcone="amarelo"
          icone={FaTrash}
          aoClicar={removerPost}
        />
      </S.CardActions>
    </S.CardContainer>
  )
}

export const Card = memo(CardComponent)
