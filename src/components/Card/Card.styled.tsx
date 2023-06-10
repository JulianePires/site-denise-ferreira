import cores from '@/resources/cores'
import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: fit-content;
  background: ${cores.branco};
`

interface CardCoverProps {
  imagemFundo: string
}

export const CardCover = styled.span<CardCoverProps>`
  width: 280px;
  height: 200px;
  background: url(${(props) => props.imagemFundo});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`

export const CardContent = styled.span`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

export const CardTitle = styled.h3`
 
`

export const CardSubtitle = styled.h4``

export const CardCreatedAt = styled.p``

export const CardActions = styled.span`
    display: flex;
`
