import React from 'react';

export class Exercicios extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    let children = this.props.children;
    let childnodes = null;

    if (children) {
      childnodes = this.cildren.map((childnode) => <Exercicios musculo={childnode} children={childnode.exercicios}/>);
    }

    return(
      <li>
        <span>{this.props.musculo.nome}</span>
        {childnodes ? <ul>{childnodes}</ul> : null}
      </li>
    );
  }
}
