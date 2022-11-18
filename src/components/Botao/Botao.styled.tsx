import { EstilosBotao, TamanhosComponente } from "@data/enums";
import { Tema, TemasCores } from "@data/tipos";
import cores from "@resources/cores";
import { detalhe } from "@resources/textos";
import styled from "styled-components";

interface ContainerBotaoProps {
  estilo: string;
  tamanho: keyof typeof TamanhosComponente;
  tema: TemasCores;
}

function trataCoresPorTema(tema: TemasCores): Tema {
  if (tema === "amarelo") {
    return {
      corPrimaria: cores.amarelo,
      corSecundaria: cores.azulPetroleo,
      corGhost: cores.amareloGhost,
    };
  }

  if (tema === "azulPetroleo") {
    return {
      corPrimaria: cores.azulPetroleo,
      corSecundaria: cores.amarelo,
      corGhost: cores.azulPetroleoGhost,
    };
  }

  if (tema === "terra") {
    return {
      corPrimaria: cores.terra,
      corSecundaria: cores.amarelo,
      corGhost: cores.terraGhost,
    };
  }

  return {
    corPrimaria: cores.vinho,
    corSecundaria: cores.branco,
    corGhost: cores.vinhoGhost,
  };
}

export const ContainerBotao = styled.button<ContainerBotaoProps>`
  background: ${(props) => {
    if (props.estilo === EstilosBotao.UNSTYLED) {
      return "none";
    }
    if (props.estilo === EstilosBotao.OUTLINE) {
      return trataCoresPorTema(props.tema).corSecundaria;
    }
    if (props.estilo === EstilosBotao.GHOST) {
      return trataCoresPorTema(props.tema).corGhost;
    }
    if (props) return trataCoresPorTema(props.tema).corPrimaria;
  }};

  color: ${(props) => {
    if (props.estilo === EstilosBotao.SOLID) {
      return trataCoresPorTema(props.tema).corSecundaria;
    }
    return trataCoresPorTema(props.tema).corPrimaria;
  }};

  border: ${(props) => {
    if (props.estilo === EstilosBotao.OUTLINE) {
      return `2px solid ${trataCoresPorTema(props.tema).corPrimaria}`;
    }
    return "none";
  }};

  ${detalhe}

  height: 70px;
  width: ${(props) => TamanhosComponente[props.tamanho] + "px"};
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
