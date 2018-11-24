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
      <div>
        <Header/>
        <div className='flex'>
          <div className='metade metade-esquerda'>
            <p>ENCHER LINGUIÇA COLOCAR DISPLAY FLEX</p>
          </div>
<<<<<<< HEAD
          <div className="metade metade-direita">
            <h1>Login</h1>
            <div className='form_div '>
              <form onSubmit={this.logar} className="form">
                <label className="field a-field a-field_a1 page__field form_label">
                  <input type='text' id='cpf' className="field__input" placeholder="Ex. 111.111.111-11" value={this.state.cpf} onChange={(e) => this.setState({cpf: e.target.value})}/>
                  <span className="field__label-wrap">
                    <span className="field__label">CPF</span>
                  </span>
                </label>
=======
          <div className="div-form-login metade metade-direita">
            <form onSubmit={this.logar} className="form ">
              <label className="field a-field a-field_a1 page__field form_label">
                <input type='text' id='cpf' className="field__input" placeholder="Ex. 111.111.111-11" value={this.state.cpf} onChange={(e) => this.setState({cpf: e.target.value})}/>
                <span className="field__label-wrap">
                  <span className="field__label">CPF</span>
                </span>
              </label>
>>>>>>> aab625166869eba240f87edadc9f8b1af88c3d61

                
                <br/>

                <label className="field a-field a-field_a1 page__field form_label">
                  <input type='password' id='senha' className="field__input"  placeholder="Ex. ******" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})} feedback={false}/>
                  <span className="field__label-wrap">
                    <span className="field__label" htmlFor='senha'>Senha</span>
                  </span>
                </label>

<<<<<<< HEAD
                <br/>
                <input type='submit' value='Logar' className='btn'/>
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
            </div>
=======
              <br/>
              <button type='submit' className='btn'>Logar</button>
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
>>>>>>> aab625166869eba240f87edadc9f8b1af88c3d61
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}