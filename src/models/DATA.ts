export class DADOS {
  constructor(
    private nome: string,
    private cpf: string,
    private data_nascimento: Date,
    private saldo: Number,
    private limite: Number,
    private cep: string,
    private logradouro: string,
    private bairro: string,
    private numero: string,
    private cidade: string,
    private uf: string,
    private avatar_url: string
  ) { }
}

export type DATA = {
  nome: string,
  cpf: string,
  data_nascimento: Date,
  saldo: Number,
  limite: Number,
  cep: string,
  logradouro: string,
  bairro: string,
  numero: string,
  cidade: string,
  uf: string,
  avatar_url: string
} 
