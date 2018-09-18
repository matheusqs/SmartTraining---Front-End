import React from 'react';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Menubar} from 'primereact/menubar';
import {Button} from 'primereact/button'

export class Header extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    const items;

    if (this.props.usertype == 'aluno') {
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
    }else if (this.props.usertype == 'instrutor') {
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
    }else if (this.props.usertype == 'coordenador') {
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
    }else{
      items = [];
    }

    return(
      <header>
        <Menubar model={items}>
          <Button label='Logout' icon='pi pi-power-off' className='p-button-raised p-button-danger'/>
        </Menubar>
      </header>
    );
  }
}
