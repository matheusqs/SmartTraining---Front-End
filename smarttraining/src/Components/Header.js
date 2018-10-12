import React from 'react';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Link} from 'react-router-dom';
import {Menubar} from 'primereact/menubar';
import {Button} from 'primereact/button'

export class Header extends React.Component{
  constructor(props) {
    super(props);
    this.analisaTipo =  this.analisaTipo.bind(this);
  }

  analisaTipo = () => {
    let items;

    switch (this.props.tipo) {
      case 'aluno':
        items = [
          {
            label: 'Perfil',
            icon: 'pi pi-fw pi-user',
            command: (e) =>{
              window.location.pathname = '/perfil'
            }
          },
          {
            label: 'Fichas',
            command: (e) =>{
              window.location.pathname = '/fichas'
            }
          },
          {
            label: 'Exercícios',
            command: (e) =>{
              window.location.pathname = '/exercicios'
            }
          },
          {
            label: 'Avaliações',
            command: (e) =>{
              window.location.pathname = '/avaliacoes'
            }
          }
        ];
        return (
          <header>
            <Menubar model={items}>
              <Button label='Sair' icon='pi pi-power-off'/>
            </Menubar>
          </header>
        );

      case 'instrutor':
        items = [
          {
            label: 'Perfil',
            icon: 'pi pi-fw pi-user',
            command: (e) =>{
              window.location.pathname = '/perfil';
            }
          },
          {
            label: 'Exercícios',
            items: [
              {
                label: 'Listar',
                command: (e) =>{
                  window.location.pathname = '/exercicios'
                }
              },
              {
                separator: true
              },
              {
                label: 'Inserir',
              },
              {
                label: 'Alterar'
              },
              {
                label: 'Remover',
              }
            ]
          },
          {
            label: 'Alunos',
            items: [
              {
                label: 'Listar',
                command: (e) =>{
                  window.location.pathname = '/alunos';
                }
              },
              {
                label: 'Avaliações',
                items: [
                  {
                    label: 'Listar',
                    command: (e) =>{
                      window.location.pathname = '/avaliacoes';
                    }
                  },
                  {
                    separator: true
                  },
                  {
                    label: 'Inserir',
                  },
                  {
                    label: 'Alterar',
                  },
                  {
                    label: 'Remover',
                  }
                ]
              },
              {
                label: 'Fichas',
                items: [
                  {
                    label: 'Listar',
                    command: (e) =>{
                      window.location.pathname = '/fichas';
                    }
                  },
                  {
                    separator: true
                  },
                  {
                    label: 'Inserir'
                  },
                  {
                    label: 'Alterar'
                  },
                  {
                    label: 'Remover'
                  }
                ]
              }
            ]
          }
        ];

        return (
          <header>
            <Menubar model={items}>
              <Button label='Sair' icon='pi pi-power-off'/>
            </Menubar>
          </header>
        );

      case 'coordenador':
        items = [
          {
            label: 'Perfil',
            icon: 'pi pi-fw pi-user',
            command: (e) =>{
              window.location.pathname = '/perfil';
            }
          },
          {
            label: 'Instrutores',
            items: [
              {
                label: 'Listar',
                command: (e) =>{
                  window.location.pathname = '/instrutores';
                }
              },
              {
                separator: true
              },
              {
                label: 'Remover',
              }
            ]
          },
          {
            label: 'Alunos',

            item: [
              {
                label: 'Listar',
                command: (e) =>{
                  window.location.pathname = '/alunos';
                }
              },
              {
                separator: true
              },
              {
                label: 'Remover',
              }
            ]
          },
          {
            label: 'Exercícios',
            items: [
              {
                label: 'Listar',
                command: (e) =>{
                  window.location.pathname = '/exercicios';
                }
              },
              {
                separator: true
              },
              {
                label: 'Inserir',
              },
              {
                label: 'Alterar',
              },
              {
                label: 'Remover',
              }
            ]
          }
        ];
        return (
          <header>
            <Menubar model={items}>
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
