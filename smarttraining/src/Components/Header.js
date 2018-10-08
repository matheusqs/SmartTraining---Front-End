import React from 'react';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Link} from 'react-router-dom';
import {Menubar} from 'primereact/menubar';
import {Button} from 'primereact/button'

export class Header extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    let items;
    let retorno;

    if (this.props.tipo === 'aluno') {
      items = [
        {
          label: 'Perfil',
          icon: 'pi pi-fw pi-user'
        },
        {
          label: 'Fichas',
        },
        {
          label: 'Exercícios',
        },
        {
          label: 'Avaliações',
        }
      ];
      retorno = [<header> <Menubar model={items}> <Button label='Sair' icon='pi pi-power-off'/> </Menubar> </header>];
    }else if (this.props.tipo === 'instrutor') {
      items = [
        {
          label: 'Perfil',
          icon: 'pi pi-fw pi-user'
        },
        {
          label: 'Exercícios',
          items: [
            {
              label: 'Listar',
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
            },
            {
              label: 'Avaliações',
              items: [
                {
                  label: 'Listar',
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
                  label: 'Listar'
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
      retorno = [<header> <Menubar model={items}> <Button label='Sair' icon='pi pi-power-off'/> </Menubar> </header>];
    }else if (this.props.tipo === 'coordenador') {
      items = [
        {
          label: 'Perfil',
          icon: 'pi pi-fw pi-user'
        },
        {
          label: 'Instrutores',
          items: [
            {
              label: 'Listar',
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

      retorno = [<header> <Menubar model={items}> <Button label='Sair' icon='pi pi-power-off'/> </Menubar> </header>];
    }else if(this.props.tipo === 'index'){
      retorno = [<header> <Menubar> <Link to='/cadastro'> <Button label='Cadastrar'/> </Link> </Menubar> </header>];
    }else{
      retorno = [<header> <Menubar> </Menubar> </header>];
    }

    return (retorno);
  }
}
