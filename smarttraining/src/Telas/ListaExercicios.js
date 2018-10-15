import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'primereact/button';
import {Header} from '../Components/Header';
import {Footer} from '../Components/Footer';
import {ListExercicios} from '../Components/ListExercicios';

export class ListaExercicios extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tipo: 'aluno'
    };
    this.definePaginaAnterior = this.definePaginaAnterior.bind(this);
  }

  definePaginaAnterior = () => {
    switch (this.state.tipo) {
      case 'aluno':
        return 'alunoindex';
      case 'instrutor':
        return 'instrutorindes';
      case 'coordenador':
        return 'coordenadorindex';
    }
  }

  render(){
    let paginaAnterior = this.definePaginaAnterior();

    return(
      <div>
        <Header tipo='aluno'/>
        <ListExercicios/>
        <Link to={paginaAnterior}> <Button label='Voltar'/> </Link>
        <Footer/>
      </div>
    );
  }
}
