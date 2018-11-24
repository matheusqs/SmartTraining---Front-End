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
              pathname: '/perfil',
              state: {user: this.props.user}
            }}>Perfil</Link>,
            icon: 'pi pi-fw pi-user',
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
              <Button label='Sair' icon='pi pi-power-off'/>
            </Menubar>
          </header>
        );

      case 'I':
        items = [
          {
            label: <Link to={{
              pathname: '/perfil',
              state: {user: this.props.user}
            }}>Perfil</Link>,
            icon: 'pi pi-fw pi-user'
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
              <Button label='Sair' icon='pi pi-power-off'/>
            </Menubar>
          </header>
        );

      case 'C':
        items = [
          {
            label: <Link to={{
              pathname: '/perfil',
              state: {user: this.props.user}
            }}>Perfil</Link>,
            icon: 'pi pi-fw pi-user'
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
              <Button label='Sair' icon='pi pi-power-off'/>
            </Menubar>
          </header>
        );

      default:
        return (
        
          <header>

            <p>SmartTraining</p>
          </header>
      );
    }
  }

  render(){
    return this.analisaTipo();
  }
}
