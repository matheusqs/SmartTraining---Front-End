import React from 'react';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Link} from 'react-router-dom';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import {Calendar} from 'primereact/calendar';
import {Checkbox} from 'primereact/checkbox';
import {Button} from 'primereact/button';
import {Header} from '../Components/Header';
import {Footer} from '../Components/Footer';
import {BotaoVoltar} from '../Components/BotaoVoltar';

export class ManterUsuario extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      user: {
        nome: null,
        senha: null,
        cpf: null,
        email: null,
        dataNascimento: null,
        tipo: 'a'
      },
      data: null,
      confSenha: null,
      checked: false,
      desativado: true
    });

    // this.isInstrutor = this.isInstrutor.bind(this);
  }

  componentDidMount(){
    if(this.props.location.state.acao === 'alterar'){
      fetch(`localhost:8080/servletweb?acao=alterarUsuario`, {
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(resposta => resposta.json())
      .then(
        (resultado) => {
          this.setState({
            user:{
              nome: resultado.nome,
              senha: resultado.senha,
              cpf: resultado.cpf,
              email: resultado.email,
              dataNascimento: resultado.data
            }
          });
        }
      );
    }
  }

  submitHandler = (e) => {
    e.preventDefault();
    let dia = this.state.data.getDate();
    let mes = this.state.data.getMonth()+1;
    let ano = this.state.data.getFullYear();

    if(dia < 10)
      dia = '0' + dia;

    if(mes < 10)
      mes = '0' + mes;

    let date = dia + '/' + mes + '/' + ano;
    this.setState({...this.state.user.dataNascimento = date});

    let url = 'https://localhost:8080/servletweb?acao=CadastrarAluno';

    let data = Object.entries(this.state.user).map((estado) => {
      return encodeURIComponent(estado[0]) + '=' + encodeURIComponent(estado[1])
    }).join('&');
    
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=utf-8'
      }
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error));

  }

  // isInstrutor = (e) => {
  //   if(this.state.checked === false){
  //     this.setState({
  //       checked: true,
  //       desativado: false,
  //       user: {
  //         tipo: 'i'
  //       }
  //     });
  //   }else{
  //     this.setState({
  //       checked: false,
  //       desativado: true,
  //       user:{
  //         tipo: 'a'
  //       }
  //     });
  //   }
  // }

  render(){
    return(
      <div>
        <Header/>
        <form onSubmit={this.submitHandler} formAction='POST' >
          <label htmlFor='user'>Nome</label>
          <InputText id='user' value={this.state.user.nome} onChange={(e) => this.setState({...this.state.user.nome = e.target.value})}/>
          <br/>

          <label htmlFor='pass'>Senha</label>
          <Password id='pass' value={this.state.user.senha} onChange={(e) => this.setState({...this.state.user.senha = e.target.value})} feedback={false}/>
          <br/>

          <label htmlFor='confPass'>Confirme sua senha</label>
          <Password id='confPass' value={this.state.confSenha} onChange={(e) => this.setState({confSenha: e.target.value})} feedback={false}/>
          <br/>

          <label htmlFor='cpf'>CPF</label>
          <InputText id='cpf' value={this.state.user.cpf} onChange={(e) => this.setState({...this.state.user.cpf = e.target.value})} keyfilter='pint'/>
          <br/>

          <label htmlFor='email'>E-mail</label>
          <InputText id='email' value={this.state.user.email} onChange={(e) => this.setState({...this.state.user.email = e.target.value})}/>
          <br/>

          <label htmlFor='birthDate'>Data de nascimento</label>
          <Calendar className='p-calendar' id='birthDate' value={this.state.data} onChange={(e) => this.setState({data: e.target.value})}/>
          <br/>

          {/*<label htmlFor='instrutor' className='p-checkbox-label'>Instrutor</label>
          <Checkbox inputId='instrutor' onChange={this.isInstrutor} checked={this.state.checked}/>
          <br/>

          <label htmlFor='cref'>Número de CREF</label>
          <InputText id='cref' value={this.state.user.cref} onChange={(e) => this.setState({user: {cref: e.target.value}})} disabled={this.state.desativado}/>
          <br/>*/}

          <Button label='Cadastrar'/>
        </form>
        <BotaoVoltar/>
        <Footer/>
      </div>
    );
  }
}
