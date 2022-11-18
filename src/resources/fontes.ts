import { ChaveValor } from '@data/tipos';
import { Barlow } from '@next/font/google';
import { FontModule } from 'next/font';

const barlowLight = Barlow({
  style: 'normal',
  weight: '300',
  subsets: ['latin'],
});

const barlowRegular = Barlow({
  style: 'normal',
  weight: '400',
  subsets: ['latin'],
});

const barlowMedium = Barlow({
  style: 'normal',
  weight: '500',
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
  barlowLight,
  barlowRegular,
  barlowMedium,
};

export default fontes;
