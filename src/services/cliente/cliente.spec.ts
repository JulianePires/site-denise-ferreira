import { gql } from '@apollo/client';
import { cliente } from './cliente';

describe('Apollo Client', () => {
  it('deve retornar valor informado pela query quando esta for resolvida', async () => {
    const result = await cliente.query({
      query: gql`
        query {
          test(bool: false)
        }
      `,
    });
    expect(result).toBeTruthy();
    expect(result.errors).toBeFalsy();
  });
});
