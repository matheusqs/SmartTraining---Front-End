import React from 'react';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Link} from 'react-router-dom';
import {Menubar} from 'primereact/menubar';
import {Button} from 'primereact/button'

export class Header extends React.Component{
  constructor(props) {
    super(props);
    this.analisaTipo.bind
  }

  analisaTipo = () => {
    let items;

    switch (this.props.tipo) {
      case 'aluno':
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
        return ([
          <header>
            <Menubar model={items}>
              <Button label='Sair' icon='pi pi-power-off'/>
            </Menubar>
          </header>
        ]);

      case 'instrutor':
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

        return ([
          <header>
            <Menubar model={items}>
              <Button label='Sair' icon='pi pi-power-off'/>
            </Menubar>
          </header>
        ]);

      case 'coordenador':
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
        return ([
          <header>
            <Menubar model={items}>
              <Button label='Sair' icon='pi pi-power-off'/>
            </Menubar>
          </header>
        ]);

      default:
        return ([
          <header>
            <p>SmartTraining</p>
          </header>
        ]
      );
    }
  }

  render(){
    return this.analisaTipo();
  }
}
