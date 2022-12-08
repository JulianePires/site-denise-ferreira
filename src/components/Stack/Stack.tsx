import * as S from './Stack.styled'

interface Props extends S.ContainerStackProps {
  children: JSX.Element | JSX.Element[]
  quebra?: boolean
}

export function Stack({
  children,
  quebra = false,
  alinhar = 'flex-start',
  justificar = 'flex-start',
  ...rest
}: Props) {
  return (
    <S.ContainerStack
      {...rest}
      wrap={String(quebra)}
      alinhar={alinhar}
      justificar={justificar}>
      {children}
    </S.ContainerStack>
  )
}
