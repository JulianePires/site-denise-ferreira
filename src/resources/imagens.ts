import imagemLogo from '@assets/images/Logo.png';
import { ChaveValor, Imagem } from '@data/tipos';

const imagens: ChaveValor<Imagem> = {
  logo: {
    src: imagemLogo.src,
    alt: 'Logotipo Denise Ferreira',
  },
};

export default imagens;
