import cores from '@resources/cores';
import Image from 'next/image';
import styled from 'styled-components';

export const ContainerAvatar = styled(Image)`
  border-radius: 50%;
  border: 2px solid ${cores.amarelo};
`;
