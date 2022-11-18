import dispositivos from "@resources/dispositivos";
import margens from "@resources/margens";
import { detalhe } from "@resources/textos";
import Image from "next/image";
import styled from "styled-components";

export const ContainerBanner = styled.span`
  display: flex;
  flex-direction: column;
  padding: ${margens.xxxlarge}px;

  width: 100%;
`;

export const LogoBanner = styled(Image)`
  width: 200px;
  height: max-content;

  @media ${dispositivos.tablet} {
    width: 400px;
  }
`

export const TextoDescricaoBanner = styled.p`
    ${detalhe}
`
