import Image from 'next/image';
import imagens from '@resources/imagens';
import { ContainerLogo } from './Logo.styled';

export function Logo() {
  return (
    <ContainerLogo>
      <Image src={imagens.logoBranca.src} alt={imagens.logoBranca.alt} width={120} />
    </ContainerLogo>
  );
}
