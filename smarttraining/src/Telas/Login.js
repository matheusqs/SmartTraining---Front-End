import React from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';
import {Header} from '../Components/Header';
import {Footer} from '../Components/Footer';

export class Login extends React.Component{
  constructor(props) {
    super(props);

    this.state = ({
      cpf: null,
      senha: null,
      visible: false,
      confSenha: null,
      person:{}
    });
  }

  logar = (e) => {
    e.preventDefault();
    
    if(!this.state.cpf || !this.state.senha)
      return;

    let url = `http://localhost:8080/servletweb?acao=PesquisarUsuario&cod=${this.state.cpf}`;
    let senha;

    fetch(url, {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(resposta => resposta.json())
    .then(
      (resultado) => {
        this.setState({
          ...this.state.person.cpf = resultado.cpf,
          ...this.state.person.tipo = resultado.tipo,
          confSenha: resultado.senha
        })
      }
    );

    if(this.state.senha !== this.state.confSenha){
      this.setState({
        visible: true,
        senha: '',
        ...this.state.person = null
      });
      return;
    }else{
      switch(this.state.person.tipo){
        case 'a':
          <Redirect
            to={{
              pathname:'/alunoindex',
              state:{user: {cpf: this.state.person.cpf, tipo: this.state.person.tipo}}
            }}
          />
          break;

        case 'i':
          <Redirect
            to={{
              pathname:'/instrutorindex',
              state:{user: {cpf: this.state.person.cpf, tipo: this.state.person.tipo}}
            }}
          />
          break;
        
          case 'c':
          <Redirect
            to={{
              pathname:'/coordenadorindex',
              state:{user: {cpf: this.state.person.cpf, tipo: this.state.person.tipo}}
            }}
          />
          break;
      }
    }
  }

  render(){
    return(
      <div>
        <Header/>
        <div>
          <div>
            <p>ENCHER LINGUIÇA COLOCAR DISPLAY FLEX</p>
          </div>
          <div>
            <form onSubmit={this.logar}>
              <label htmlFor='cpf'>CPF</label>
              <InputText keyfilter='pint' id='cpf' value={this.state.cpf} onChange={(e) => this.setState({cpf: e.target.value})}/>
              <br/>
              <label htmlFor='senha'>Senha</label>
              <Password id='senha' value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})} feedback={false}/>
              <br/>
              <Button label='Logar'/>
              <p>Ainda não possui uma conta?
                <Link to={{
                    pathname: '/manterusuario',
                    state: {acao: 'cadastrar'}
                  }}
                >
                Cadastre-se!
              </Link>
              </p>
            </form>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
