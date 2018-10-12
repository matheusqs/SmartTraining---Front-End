import React from 'react';
import {Exercicios} from './Exercicios';

export class ListExercicios extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      musculos: [
        {
          nome: 'teste',
          exercicios: [
            {
              nome: 'exTeste'
            },
            {
              nome:'ex1'
            },
            {
              nome: 'já deu'
            }
          ]
        }
      ]
    };
  }

  render(){
    let lista = this.state.musculos;
    lista.map((musculo) => <Exercicios musculo={musculo} children={musculo.exercicios}/>);

    return(
      <ul>
        {lista}
      </ul>
    );
  }
}
