import React from 'react';

export class Botao extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return <button type = {this.props.tipo}>{this.props.nome}</button>;
  }
}
