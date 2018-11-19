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
            label: 'Exercícios',
            items: [
              {
                label: <Link to={{
                  pathname: '/listarExercicios',
                  state: {user: this.props.user}
                }}>Listar</Link>
              },
              {
                separator: true
              },
              {
                label: <Link to={{
                  pathname: '/manterExercicio',
                  state: {user: this.props.user, acao: 'cadastrar'}
                }}>Inserir</Link>
              },
              {
                label: <Link to={{
                  pathname: '/manterExercicio',
                  state: {user: this.props.user, acao: 'alterar'}
                }}>Alterar</Link>
              },
              {
                label: <Link to={{
                  pathname: '/removerExercicio',
                  state: {user: this.props.user}
                }}>Remover</Link>
              }
            ]
          },
          {
            label: 'Alunos',
            items: [
              {
                label: <Link to={{
                  pathname: '/listarAlunos',
                  state: {user: this.props.user}
                }}>Listar</Link>
              },
              {
                label: 'Avaliações',
                items: [
                  {
                    label: <Link to={{
                      pathname: '/listarAvaliacoes',
                      state: {user: this.props.user}
                    }}>Listar</Link>
                  },
                  {
                    separator: true
                  },
                  {
                    label: <Link to={{
                      pathname: '/manterAvaliacao',
                      state: {user: this.props.user, acao: 'cadastrar'}
                    }}>Inserir</Link>
                  },
                  {
                    label: <Link to={{
                      pathname: '/manterAvaliacao',
                      state: {user: this.props.user, acao: 'alterar'}
                    }}>Alterar</Link>
                  },
                  {
                    label: <Link to={{
                      pathname: '/removerAvaliacao',
                      state: {user: this.props.user}
                    }}>Remover</Link>
                  }
                ]
              },
              {
                label: 'Fichas',
                items: [
                  {
                    label: <Link to={{
                      pathname: '/listarFichas',
                      state: {user: this.props.user}
                    }}>Listar</Link>
                  },
                  {
                    separator: true
                  },
                  {
                    label: <Link to={{
                      pathname: '/manterFicha',
                      state: {user: this.props.user, acao: 'cadastrar'}
                    }}>Inserir</Link>
                  },
                  {
                    label: <Link to={{
                      pathname: '/manterFicha',
                      state: {user: this.props.user, acao: 'alterar'}
                    }}>Alterar</Link>
                  },
                  {
                    label: <Link to={{
                      pathname: '/removerFicha',
                      state: {user: this.props.user}
                    }}>Remover</Link>
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
            label: <Link to={{
              pathname: '/perfil',
              state: {user: this.props.user}
            }}>Perfil</Link>,
            icon: 'pi pi-fw pi-user'
          },
          {
            label: 'Instrutores',
            items: [
              {
                label: <Link to={{
                  pathname: '/listarInstrutores',
                  state: {user: this.props.user}
                }}>Listar</Link>
              },
              {
                separator: true
              },
              {
                label: <Link to={{
                  pathname: '/removerInstrutor',
                  state: {user: this.props.user}
                }}>Remover</Link>
              }
            ]
          },
          {
            label: 'Alunos',
            items: [
              {
                label: <Link to={{
                  pathname: '/listarAlunos',
                  state: {user: this.props.user}
                }}>Listar</Link>
              },
              {
                label: <Link to={{
                  pathname: '/removerAluno',
                  state: {user: this.props.user}
                }}>Remover</Link>
              },
              {
                separator: true
              },
              {
                label: 'Avaliações',
                items: [
                  {
                    label: <Link to={{
                      pathname: '/listarAvaliacoes',
                      state: {user: this.props.user}
                    }}>Listar</Link>
                  },
                  {
                    separator: true
                  },
                  {
                    label: <Link to={{
                      pathname: '/manterAvaliacao',
                      state: {user: this.props.user, acao: 'cadastrar'}
                    }}>Inserir</Link>
                  },
                  {
                    label: <Link to={{
                      pathname: '/manterAvaliacao',
                      state: {user: this.props.user, acao: 'alterar'}
                    }}>Alterar</Link>
                  },
                  {
                    label: <Link to={{
                      pathname: '/removerAvaliacao',
                      state: {user: this.props.user}
                    }}>Remover</Link>
                  }
                ]
              },
              {
                label: 'Fichas',
                items: [
                  {
                    label: <Link to={{
                      pathname: '/listarFichas',
                      state: {user: this.props.user}
                    }}>Listar</Link>
                  },
                  {
                    separator: true
                  },
                  {
                    label: <Link to={{
                      pathname: '/manterFicha',
                      state: {user: this.props.user, acao: 'cadastrar'}
                    }}>Inserir</Link>
                  },
                  {
                    label: <Link to={{
                      pathname: '/manterFicha',
                      state: {user: this.props.user, acao: 'alterar'}
                    }}>Alterar</Link>
                  },
                  {
                    label: <Link to={{
                      pathname: '/removerFicha',
                      state: {user: this.props.user}
                    }}>Remover</Link>
                  }
                ]
              }
            ]
          },
          {
            label: 'Exercícios',
            items: [
              {
                label: <Link to={{
                  pathname: '/listarExercicios',
                  state: {user: this.props.user}
                }}>Listar</Link>
              },
              {
                separator: true
              },
              {
                label: <Link to={{
                  pathname: '/manterExercicio',
                  state: {user: this.props.user, acao: 'cadastrar'}
                }}>Inserir</Link>
              },
              {
                label: <Link to={{
                  pathname: '/manterExercicio',
                  state: {user: this.props.user, acao: 'alterar'}
                }}>Alterar</Link>
              },
              {
                label: <Link to={{
                  pathname: '/removerExercicio',
                  state: {user: this.props.user}
                }}>Remover</Link>
              }
            ]
          },
          {
            label: 'Aparelhos',
            items: [
              {
                label: <Link to={{
                  pathname: '/listarAparelhos',
                  state: {user: this.props.user}
                }}>Listar</Link>
              },
              {
                separator: true
              },
              {
                label: <Link to={{
                  pathname: '/manterAparelho',
                  state: {user: this.props.user, acao: 'cadastrar'}
                }}>Inserir</Link>
              }, 
              {
                label: <Link to={{
                  pathname: '/manterAparelho',
                  state: {user: this.props.user, acao: 'alterar'}
                }}>Alterar</Link>
              },
              {
                label: <Link to={{
                  pathname: '/removerAparelho',
                  state: {user: this.props.user}
                }}>Remover</Link>
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
