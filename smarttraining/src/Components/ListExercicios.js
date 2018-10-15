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
              nome: 'ex2'
            }
          ]
        }
      ]
    };
  }

  render(){
    let lista = this.state.musculos;
    lista = lista.map((musculo) => <Exercicios musculo={musculo} children={musculo.exercicios}
                              onExercicioChange={this.props.onExercicioChange} mustCheckbox={this.props.mustCheckbox}/>);

    return(
      <ul>
        {lista}
      </ul>
    );
  }
}
