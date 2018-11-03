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
      case 'A':
        items = [
          {
            label: 'Perfil',
            icon: 'pi pi-fw pi-user',
            command: (e) =>{
              this.props.history.push({
                pathname: '/perfil',
                state: {user: this.props.user}
              })
            }
          },
          {
            label: 'Fichas',
            command: (e) =>{
              this.props.history.push({
                pathname: '/listarFichas',
                state: {user: this.props.user}
              })
            }
          },
          {
            label: 'Exercícios',
            command: (e) =>{
              this.props.history.push({
                pathname: '/listarExercicios',
                state: {user: this.props.user}
              })
            }
          },
          {
            label: 'Avaliações',
            command: (e) =>{
              this.props.history.push({
                pathname: '/listarAvaliacoes',
                state: {user: this.props.user}
              })
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

      case 'I':
        items = [
          {
            label: 'Perfil',
            icon: 'pi pi-fw pi-user',
            command: (e) =>{
              this.props.history.push({
                pathname: '/perfil',
                state: {user: this.props.user}
              })
            }
          },
          {
            label: 'Exercícios',
            items: [
              {
                label: 'Listar',
                command: (e) =>{
                  this.props.history.push({
                    pathname: '/listarExercicios',
                    state: {user: this.props.user}
                  })
                }
              },
              {
                separator: true
              },
              {
                label: 'Inserir',
                command: (e) => {
                  this.props.history.push({
                    pathname: '/manterExercicio',
                    state: {
                      user: this.props.user,
                      acao: 'cadastrar'
                    }
                  })
                }
              },
              {
                label: 'Alterar',
                command: (e) => {
                  this.props.history.push({
                    pathname: '/manterExercicio',
                    state: {
                      user: this.props.user,
                      acao: 'alterar'
                    }
                  })
                }
              },
              {
                label: 'Remover',
                command: (e) => {
                  this.props.history.push({
                    pathname: '/removerExercicios',
                    state: {user: this.props.user}
                  })
                }
              }
            ]
          },
          {
            label: 'Alunos',
            items: [
              {
                label: 'Listar',
                command: (e) => {
                  this.props.history.push({
                    pathname: '/listarAlunos',
                    state: {user: this.props.user}
                  })
                }
              },
              {
                label: 'Avaliações',
                items: [
                  {
                    label: 'Listar',
                    command: (e) => {
                      this.props.history.push({
                        pathname: '/listarAvaliacoes',
                        state: {user: this.props.user}
                      })
                    }
                  },
                  {
                    separator: true
                  },
                  {
                    label: 'Inserir',
                    command: (e) => {
                      this.props.history.push({
                        pathname: '/manterAvaliacao',
                        state: {
                          user: this.props.user,
                          acao: 'cadastrar'
                        },
                      })
                    }
                  },
                  {
                    label: 'Alterar',
                    command: (e) => {
                      this.props.history.push({
                        pathname: '/manterAvaliacao',
                        state: {
                          user: this.props.user,
                          acao: 'alterar'
                        },
                      })
                    }
                  },
                  {
                    label: 'Remover',
                    command: (e) => {
                      this.props.history.push({
                        pathname: '/removerAvaliacoes',
                        state: {user: this.props.user},
                      })
                    }
                  }
                ]
              },
              {
                label: 'Fichas',
                items: [
                  {
                    label: 'Listar',
                    command: (e) => {
                      this.props.history.push({
                        pathname: '/listarFichas',
                        state: {user: this.props.user}
                      })
                    }
                  },
                  {
                    separator: true
                  },
                  {
                    label: 'Inserir',
                    command: (e) => {
                      this.props.history.push({
                        pathname: '/manterFicha',
                        state: {
                          user: this.props.user,
                          acao: 'cadastrar'
                        }
                      })
                    }
                  },
                  {
                    label: 'Alterar',
                    command: (e) => {
                      this.props.history.push({
                        pathname: '/manterFicha',
                        state: {
                          user: this.props.user,
                          acao: 'alterar'
                        }
                      })
                    }
                  },
                  {
                    label: 'Remover',
                    command: (e) => {
                      this.props.history.push({
                        pathname: '/removerFichas',
                        state: {user: this.props.user}
                      })
                    }
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

      case 'C':
        items = [
          {
            label: 'Perfil',
            icon: 'pi pi-fw pi-user',
            command: (e) =>{
              this.props.history.push({
                pathname: '/perfil',
                state: {user: this.props.user}
              })
            }
          },
          {
            label: 'Instrutores',
            items: [
              {
                label: 'Listar',
                command: (e) => {
                  this.props.history.push({
                    pathname: '/listarInstrutores',
                    state: {user: this.props.user}
                  })
                }
              },
              {
                separator: true
              },
              {
                label: 'Remover',
                command: (e) => {
                  this.props.history.push({
                    pathname: '/removerInstrutores',
                    state: {user: this.props.user}
                  })
                }
              }
            ]
          },
          {
            label: 'Alunos',
            items: [
              {
                label: 'Listar',
                command: (e) => {
                  this.props.history.push({
                    pathname: '/listarAlunos',
                    state: {user: this.props.user}
                  })
                }
              },
              {
                separator: true
              },
              {
                label: 'Remover',
                command: (e) => {
                  this.props.history.push({
                    pathname: '/removerAlunos',
                    state: {user: this.props.user}
                  })
                }
              }
            ]
          },
          {
            label: 'Exercícios',
            items: [
              {
                label: 'Listar',
                command: (e) => {
                  this.props.history.push({
                    pathname: '/listarExercicios',
                    state: {user: this.props.user}
                  })
                }
              },
              {
                separator: true
              },
              {
                label: 'Inserir',
                command: (e) => {
                  this.props.history.push({
                    pathname: '/manterExercicio',
                    state: {
                      user: this.props.user,
                      acao: 'cadastrar'
                    }
                  })
                }
              },
              {
                label: 'Alterar',
                command: (e) => {
                  this.props.history.push({
                    pathname: '/manterExercicio',
                    state: {
                      user: this.props.user,
                      acao: 'alterar'
                    }
                  })
                }
              },
              {
                label: 'Remover',
                command: (e) => {
                  this.props.history.push({
                    pathname: '/removerExercicios',
                    state: {user: this.props.user}
                  })
                }
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
