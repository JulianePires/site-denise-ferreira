import { ChaveValor } from '@data/tipos';
import { Lato } from '@next/font/google';
import { FontModule } from 'next/font';

const latoLight = Lato({
  style: 'normal',
  weight: '300',
  subsets: ['latin'],
});

const latoRegular = Lato({
  style: 'normal',
  weight: '400',
  subsets: ['latin'],
});

const xillian: FontModule = {
  className: 'xillian',
  style: {
    fontFamily: 'Xillian',
    fontWeight: 400,
  },
};

const fontes: ChaveValor<FontModule> = {
  xillian,
  latoLight,
  latoRegular,
};

export default fontes;
