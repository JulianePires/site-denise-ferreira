import { Lato } from '@next/font/google';

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

const xillian = {
  style: {
    fontFamily: 'Xillian',
    fontWeight: '400',
  },
};

const fonts = {
  xillian,
  latoLight,
  latoRegular,
};

export default fonts;
