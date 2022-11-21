import {useState} from 'react'
import {
  ContainerTab,
  ControleTab,
  LayoutTab,
  OpcaoTab,
  TextoLayoutTab,
  TituloLayoutTab,
} from './Tab.styled'

type OpcoesTab = 'sonhar' | 'agir' | 'ser'

export function Tab() {
  const opcoesTab: OpcoesTab[] = ['sonhar', 'agir', 'ser']
  const [tabAtiva, setTabAtiva] = useState<OpcoesTab>('ser')

  function defineTabAtualComoAtiva(tab: OpcoesTab) {
    setTabAtiva(tab)
  }

  return (
    <ContainerTab>
      <ControleTab>
        {opcoesTab.map((opcao, index) => (
          <OpcaoTab
            ativa={String(opcao === tabAtiva)}
            onClick={() => defineTabAtualComoAtiva(opcao)}
            key={index}>
            {opcao}
          </OpcaoTab>
        ))}
      </ControleTab>
      <LayoutTab>
        <TituloLayoutTab>Quem eu sou</TituloLayoutTab>
        <TextoLayoutTab>
          Inserir aqui quem eu sou, quem eu sou, quem eu sou.Inserir aqui quem
          eu sou, quem eu sou, quem eu sou. Inserir aqui quem eu sou, quem eu
          sou, quem eu sou. Inserir aqui quem eu sou, quem eu sou, quem eu sou.
          Inserir aqui quem eu sou, quem eu sou, quem eu sou.
        </TextoLayoutTab>
      </LayoutTab>
    </ContainerTab>
  )
}
