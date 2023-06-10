import { OpcaoMenu } from './Cabecalho.styled'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

describe('Estilo do Cabeçalho', () => {
  describe('OpcaoMenu', () => {
    it('DEVE sublinha quando a propriedade atual for "true"', () => {
      const tree = renderer.create(<OpcaoMenu atual="true" />).toJSON()
      expect(tree).toMatchSnapshot()
      expect(tree).toHaveStyleRule('text-decoration', 'underline')
    })
  })
})
