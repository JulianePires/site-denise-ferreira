import {DirecoesTipo} from '@data/tipos'
import cores from '@resources/cores'
import {
  BsArrowLeftCircleFill,
  BsArrowUpCircleFill,
  BsArrowRightCircleFill,
  BsArrowDownCircleFill,
} from 'react-icons/bs'
import * as S from './ControleElementos.styled'

interface Props {
  tamanhoArray: number
  elementoDestaque: number
  direcao: DirecoesTipo
  aoClicarEmProximo: () => void
  aoClicarEmAnterior: () => void
}

export function ControleElementos({
  tamanhoArray,
  elementoDestaque,
  direcao,
  aoClicarEmProximo,
  aoClicarEmAnterior,
}: Props) {
  const statusControleElementos = `0${elementoDestaque + 1} | 0${tamanhoArray}`

  return (
    <S.ContainerControleElementos>
      <S.StatusControleElemento>
        {statusControleElementos}
      </S.StatusControleElemento>
      <S.BotaoControleElemento onClick={aoClicarEmAnterior}>
        {direcao === 'horizontal' ? (
          <BsArrowLeftCircleFill color={cores.branco} />
        ) : (
          <BsArrowUpCircleFill color={cores.branco} />
        )}
      </S.BotaoControleElemento>
      <S.BotaoControleElemento onClick={aoClicarEmProximo}>
        {direcao === 'horizontal' ? (
          <BsArrowRightCircleFill color={cores.branco} />
        ) : (
          <BsArrowDownCircleFill color={cores.branco} />
        )}
      </S.BotaoControleElemento>
    </S.ContainerControleElementos>
  )
}
