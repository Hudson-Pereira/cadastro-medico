import fetch from 'node-fetch';

describe('Especialidade', () => {
  it('Encontrando de lista de especialidade, contendo inicialmente 8 itens.', async () => {
    const especialidade = await fetch('http://localhost:3000/especialidade');
    const data = await especialidade.json();
    expect(data[1].length).toEqual(8);
  });

  it('Criando Especialidade já criada, espera-se erro.', async () => {
    const body = { nome: 'Alergologia' };
    const response = await fetch('http://localhost:3000/especialidade', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    expect(data.message).toContain('Erro ao cadastrar, tente novamente.');
  });

  it('Criando Especialidade nova', async () => {
    const body = { nome: 'Clinico Geral' };
    const response = await fetch('http://localhost:3000/especialidade', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    console.log(data[1].nome);
    expect(data[1].nome).toContain('Clinico Geral');
  });
});
