import {ReactNode} from 'react'
import * as S from './Stack.styled'

interface Props extends S.ContainerStackProps {
  children: ReactNode | Iterable<ReactNode>
  quebra?: boolean
  className?: string
}

export function Stack({
  children,
  quebra = false,
  alinhar = 'flex-start',
  justificar = 'flex-start',
  className,
  ...rest
}: Props) {
  return (
    <S.ContainerStack
      {...rest}
      wrap={String(quebra)}
      alinhar={alinhar}
      justificar={justificar}
      className={className}>
      {children}
    </S.ContainerStack>
  )
}
