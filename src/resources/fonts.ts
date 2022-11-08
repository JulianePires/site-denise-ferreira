import { Lato } from '@next/font/google';
import localFont from '@next/font/local';

import Xilian from '@assets/fonts/Xilian-Regular.otf';

const latoLight = Lato({
  style: 'normal',
  weight: '300',
});

const latoRegular = Lato({
  style: 'normal',
  weight: '400',
});

const xilian = localFont({
  src: Xilian,
});

const fonts = {
  xilian,
  latoLight,
  latoRegular,
};

export default fonts;
