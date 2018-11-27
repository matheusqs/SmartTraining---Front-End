import React from 'react';
import {Link} from 'react-router-dom';
import {Dialog} from 'primereact/dialog';
import {Header} from '../Components/Header';
import {Footer} from '../Components/Footer';
import './../css/form.css';
import './../css/button.css';
import './../css/div.css';
import './../css/link.css';

export class Login extends React.Component{
  constructor(props) {
    super(props);

    this.state = ({
      cpf: null,
      senha: null,
      visible: false,
      person:{}
    });

    this.logar = this.logar.bind(this);
  }

  logar = (e) => {
    e.preventDefault();
    
    if(!this.state.cpf || !this.state.senha)
      return;

    let url = `http://localhost:8080/servletweb?acao=MostrarUsuario&codCpf=${this.state.cpf}`;

    fetch(url, {
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(resposta => resposta.json())
    .then(resultado => {
      this.setState({...this.state.person = resultado});
 
      if(!this.state.person){
        return;
      }

      if(this.state.senha !== this.state.person.senha){
        this.setState({senha: ''});
        return;
      }

      switch(this.state.person.tipo){
        case 'A':
          this.props.history.push({
            pathname: '/alunoIndex',
            state: {user: {cpf: this.state.person.cpf, tipo: this.state.person.tipo}}
          });
        break;
  
        case 'I':
          this.props.history.push({
            pathname: '/instrutorIndex',
            state: {user: {cpf: this.state.person.cpf, tipo: this.state.person.tipo}}
          });
        break;
        
        case 'C':
          this.props.history.push({
            pathname: '/coordenadorIndex',
            state: {user: {cpf: this.state.person.cpf, tipo: this.state.person.tipo}}
          });
        break;
      }
    });
  }

  render(){
    return(
      <div className="divzona">
        <Header/>

            
            
              <form onSubmit={this.logar} className="form">
              <div className="direita-login">
              <h1>Login</h1>
                <label className="field a-field a-field_a1 page__field form_label">
                  <input type='text' id='cpf' className="field__input" placeholder="Ex. 111.111.111-11" value={this.state.cpf} onChange={(e) => this.setState({cpf: e.target.value})}/>
                  <span className="field__label-wrap">
                    <span className="field__label">CPF</span>
                  </span>
                </label>

                
                <br/>

                <label className="field a-field a-field_a1 page__field form_label">
                  <input type='password' id='senha' className="field__input"  placeholder="Ex. ******" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})} feedback={false}/>
                  <span className="field__label-wrap">
                    <span className="field__label" htmlFor='senha'>Senha</span>
                  </span>
                </label>

                <br/>
                <button type='submit' className='btn'>Logar</button>
                </div>
                <p>Ainda não possui uma conta?
                  <Link className="link" to={{
                      pathname: '/manterUsuario',
                      state: {acao: 'cadastrar'}
                    }}
                  >
                  Cadastre-se!
                </Link>
                </p>
              </form>

        <Footer/>
      </div>
    );
  }
}