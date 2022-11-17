import Image from 'next/image';
import imagens from '@resources/imagens';
import { ContainerLogo } from './Logo.styled';

export function Logo() {
  return (
    <ContainerLogo>
      <Image
        src={imagens.sankofaLongaBranco.src}
        alt={imagens.sankofaLongaBranco.alt}
        width={94}
        height={70}
      />
    </ContainerLogo>
  );
}
