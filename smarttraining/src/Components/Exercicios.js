import React from 'react';
import {Checkbox} from 'primereact/checkbox';

export class Exercicios extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    let children = this.props.children;
    let musculo = this.props.musculo;
    let childnodes = null;

    if (children) {
      debugger;
      childnodes = children.map(childnode => <Exercicios musculo={childnode} children={childnode.exercicios}/>);
    }

    return(
      <li>
        {children ? <span>{musculo.nome}</span> : this.props.mustCheckbox ? [<span>
          <Checkbox value={musculo.nome} onChange={this.props.onExercicioChange}></Checkbox>
          <span>{musculo.nome}</span>
        </span>] : null}
        {childnodes ? <ul>{childnodes}</ul> : null}
      </li>
    );
  }
}
