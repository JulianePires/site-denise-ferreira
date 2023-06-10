import {render, screen} from '@testing-library/react'
import {Avatar} from './Avatar'
import FallbackAvatar from '@/assets/imagens/FallbackAvatar.png'
import {TamanhosComponente} from '@/data/enums'
import '@testing-library/jest-dom'

describe('Componente Avatar', () => {
  beforeEach(() => {
    render(<Avatar src={FallbackAvatar.src} alt="imagem" tamanho={TamanhosComponente.M} />)
  })

  it('DEVE renderizar corretamente', () => {
    const componenteImagem = screen.getByTestId('componente-imagem')

    expect(componenteImagem).not.toBeNull()
  })

  it('DEVE conter altura e largura como definido na propriedade tamanho', () => {
    const componenteImagem = screen.getByTestId('componente-imagem')

    expect(componenteImagem).toHaveAttribute(
      'width',
      TamanhosComponente.M.toString(),
    )
    expect(componenteImagem).toHaveAttribute(
      'height',
      TamanhosComponente.M.toString(),
    )
  })

  it('DEVE conter texto alterativo como definido em propriedade', () => {
    const componenteImagem = screen.getByTestId('componente-imagem')

    expect(componenteImagem).toHaveAttribute('alt', 'imagem')
  })
})
