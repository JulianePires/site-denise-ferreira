import Image from 'next/image';
import images from '@resources/images';
import { ContainerLogo } from './Logo.styled';

export function Logo() {
  return (
    <ContainerLogo>
      <Image src={images.logo.src} alt={images.logo.alt} />
    </ContainerLogo>
  );
}
