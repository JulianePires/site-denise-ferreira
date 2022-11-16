import { ChaveValor } from '@data/tipos';
import { Barlow_Condensed } from '@next/font/google';
import { FontModule } from 'next/font';

const barlowCondensedLight = Barlow_Condensed({
  style: 'normal',
  weight: '400',
  subsets: ['latin'],
});

const barlowCondensedMedium = Barlow_Condensed({
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
  barlowCondensedLight,
  barlowCondensedMedium,
};

export default fontes;
