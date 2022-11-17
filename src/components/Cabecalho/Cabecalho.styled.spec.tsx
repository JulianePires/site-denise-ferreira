import { OpcaoMenu } from './Cabecalho.styled';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Estilo do Cabeçalho', () => {
  describe('OpcaoMenu', () => {
    it("DEVE ter cor laranja quando a propriedade atual for 'true'", () => {
      const tree = renderer.create(<OpcaoMenu atual="true" />).toJSON();
      expect(tree).toMatchSnapshot();
      expect(tree).toHaveStyleRule('color', '#F36B2B');
    });
  });
});
