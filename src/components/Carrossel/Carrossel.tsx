import { Stack } from '@components/Stack'
import { Direcoes } from '@data/enums'
import {DirecoesTipo, ElementoCarrosselTipo} from '@data/tipos'
import * as S from "./Carrossel.styled"

interface Props {
  direcao: DirecoesTipo
  elementos: ElementoCarrosselTipo[]
}

export function Carrossel({direcao, elementos}: Props){
    return(
        <S.ContainerCarrossel>
            <S.ImagensCarrossel>
                {elementos.map((elemento, index) =>(
                   <Stack key={index} direcao={Direcoes.V} gap='1rem'>
                   <S.ImagemCarrossel src={elemento.imagem} alt={elemento.descricao} width={400} height={400} />
                   <S.DescricaoImagemCarrossel>{elemento.descricao}</S.DescricaoImagemCarrossel>
                   
                   </Stack>
                )}
            </S.ImagensCarrossel>
        </S.ContainerCarrossel>
    )
}
