import fetch from 'node-fetch';

describe('Especialidade', () => {
  it('Encontrando de lista de especialidade, contendo inicialmente 8 itens.', async () => {
    const especialidade = await fetch('http://localhost:3000/especialidade');
    const data = await especialidade.json();
    expect(data[1].length).toEqual(8);
  });
});
