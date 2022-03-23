import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Especialidade {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  nome: string;

  constructor(especialidade?: Partial<Especialidade>) {
    this.nome = especialidade?.nome;
  }
}
