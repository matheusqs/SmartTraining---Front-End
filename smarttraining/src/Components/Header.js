import React from 'react';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Link} from 'react-router-dom';
import {Menubar} from 'primereact/menubar';
import {Button} from 'primereact/button';
import './../css/header.css';


export class Header extends React.Component{
  constructor(props) {
    super(props);
    this.analisaTipo =  this.analisaTipo.bind(this);
  }

  analisaTipo = () => {
    let items;

    switch (this.props.tipo) {
      case 'A':
        items = [
          {
            label: <Link to={{
              pathname: '/alunoIndex',
              state: {user: this.props.user}
            }}>Início</Link>
          },
          {
            label: <Link to={{
              pathname: '/perfil',
              state: {user: this.props.user}
            }}>Perfil</Link>
          },
          {
            label: <Link to={{
              pathname: '/listarFichas',
              state: {user: this.props.user}
            }}>Fichas</Link>
          },
          {
            label: <Link to={{
              pathname: '/listarExercicios',
              state: {user: this.props.user}
            }}>Exercícios</Link>
          },
          {
            label: <Link to={{
              pathname: '/listarAvaliacoes',
              state: {user: this.props.user}
            }}>Avaliações</Link>
          }
        ];
        return (
          <header>
            <Menubar model={items}>
            <Link to={{
                pathname: '/',
                state: {}
              }}><Button label='Sair' icon='pi pi-power-off'/></Link>
            </Menubar>
          </header>
        );

      case 'I':
        items = [
          {
            label: <Link to={{
              pathname: '/instrutorIndex',
              state: {user: this.props.user}
            }}>Início</Link>
          },
          {
            label: <Link to={{
              pathname: '/perfil',
              state: {user: this.props.user}
            }}>Perfil</Link>
          },
          {
            label: <Link to={{
              pathname: '/listarExercicios',
              state: {user: this.props.user}
            }}>Exercícios</Link>,
          },
          {
            label: <Link to={{
              pathname: '/listarAparelhos',
              state: {user: this.props.user}
            }}>Aparelhos</Link>,
          },
          {
            label: <Link to={{
              pathname: '/listarAlunos',
              state: {user: this.props.user}
            }}>Alunos</Link>
          },
          {
            label: <Link to={{
              pathname: '/listarInstrutores',
              state: {user: this.props.user}
            }}></Link>
          }
        ];

        return (
          <header>
            <Menubar model={items}>
            <Link to={{
                pathname: '/',
                state: {}
              }}><Button label='Sair' icon='pi pi-power-off'/></Link>
            </Menubar>
          </header>
        );

      case 'C':
        items = [
          {
            label: <Link to={{
              pathname: '/coordenadorIndex',
              state: {user: this.props.user}
            }}>Início</Link>
          },
          {
            label: <Link to={{
              pathname: '/perfil',
              state: {user: this.props.user}
            }}>Perfil</Link>
          },
          {
            label: <Link to={{
              pathname: '/listarAlunos',
              state: {user: this.props.user}
            }}>Alunos</Link>
          },
          {
            label: <Link to={{
              pathname: '/listarInstrutores',
              state: {user: this.props.user}
            }}>Instrutores</Link>
          },
          {
            label: <Link to={{
              pathname: '/listarExercicios',
              state: {user: this.props.user}
            }}>Exercícios</Link>,
          },
          {
            label: <Link to={{
              pathname: '/listarAparelhos',
              state: {user: this.props.user}
            }}>Aparelhos</Link>,
          }
        ];
        return (
          <header>
            <Menubar model={items} className="width: 100%">
              <Link to={{
                pathname: '/',
                state: {}
              }}><Button label='Sair' icon='pi pi-power-off'/></Link>
            </Menubar>
          </header>
        );

      default:
        return (
          <header>
            <h2>SmartTraining</h2>
          </header>
      );
    }
  }

  render(){
    return this.analisaTipo();
  }
}
