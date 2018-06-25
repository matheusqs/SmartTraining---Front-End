import React from 'react';
import {CampoForm} from './CampoForm';
import {Botao} from './Botao';

export class Cadastro extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <form>
        <CampoForm htmlFor = 'nome' valor = 'Nome: ' tipo = 'text' id = 'nome'/>
        <CampoForm htmlFor = 'cpf' valor = 'Cpf: ' tipo = 'number' id = 'cpf'/>
        <CampoForm htmlFor = 'data' valor = 'Data de Nascimento: ' tipo = 'date' id = 'data'/>
        <CampoForm htmlFor = 'email' valor = 'Email: ' tipo = 'text' id = 'email'/>
        <CampoForm htmlFor = 'senha' valor = 'Senha: ' tipo = 'text' id = 'senha'/>
        <CampoForm htmlFor = 'confirma' valor = 'Confirme sua senha: ' tipo = 'text' id = 'confirma'/>
        <CampoForm htmlFor = 'prof' valor = 'Professor' tipo = 'checkbox' id = 'prof'/>
        <Botao tipo = 'submit' nome = 'Confirmar'/>
      </form>
    );
  }
}
