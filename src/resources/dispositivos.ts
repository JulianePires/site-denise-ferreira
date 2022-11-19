import {ChaveValor} from '@data/tipos'
import tamanhosTela from './tamanhosTela'

const dispositivos: ChaveValor<string> = {
  mobileS: `(min-width: ${tamanhosTela.mobileS})`,
  mobileM: `(min-width: ${tamanhosTela.mobileM})`,
  mobileL: `(min-width: ${tamanhosTela.mobileL})`,
  tablet: `(min-width: ${tamanhosTela.tablet})`,
  laptop: `(min-width: ${tamanhosTela.laptop})`,
  laptopL: `(min-width: ${tamanhosTela.laptopL})`,
  desktop: `(min-width: ${tamanhosTela.desktop})`,
  desktopL: `(min-width: ${tamanhosTela.desktop})`,
}

export default dispositivos
