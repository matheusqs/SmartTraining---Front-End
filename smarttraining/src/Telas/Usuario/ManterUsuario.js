import React from 'react';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import {Calendar} from 'primereact/calendar';
import {Checkbox} from 'primereact/checkbox';
import {Button} from 'primereact/button';
import {Header} from '../../Components/Header';
import {Footer} from '../../Components/Footer';
import {BotaoVoltar} from '../../Components/BotaoVoltar';

export class ManterUsuario extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      person: {
        cpf: null,
        nome: null,
        tipo: 'A',
        senha: null,
        email: null,
        dataNascimento: {
          year: null,
          month: null,
          day: null
        }
      },
      checked: null,
      data: null,
      confSenha: null
    });

    this.isInstrutor = this.isInstrutor.bind(this);
  }

  componentDidMount(){
    if(this.props.location.state.acao === 'alterar'){
      let url = `http://localhost:8080/servletweb?acao=TelaAlterarUsuario&cod=${this.props.location.state.user.cpf}`;
      
      fetch(url, {
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(resposta => resposta.json())
      .then(
        (resultado) => {
          this.setState({
            ...this.state.person.nome = resultado.nome,
            ...this.state.person.cpf = resultado.cpf,
            ...this.state.person.email = resultado.email,
            ...this.state.person.senha = resultado.senha,
            ...this.state.person.cref = resultado.cref,
            data: resultado.dataNascimento
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
    let url;

    dia < 10 ? dia = '0' + dia : null;
    mes < 10 ? mes = '0' + mes : null;

    this.setState({
      ...this.state.person.dataNascimento.day = dia,
      ...this.state.person.dataNascimento.month = mes,
      ...this.state.person.dataNascimento.year = ano
    });

    if(this.props.location.state.acao === 'cadastrar'){
      this.state.person.tipo === 'A' ? 
      url = 'http://localhost:8080/servletweb?acao=CadastrarAluno' : 
      url = 'http://localhost:8080/servletweb?acao=CadastrarInstrutor'; 
    }else{
      this.state.person.tipo === 'A' ? 
      url = 'http://localhost:8080/servletweb?acao=AlterarAluno' : 
      url = 'http://localhost:8080/servletweb?acao=AlterarInstrutor'; 
    }

    let data = Object.entries(this.state.person).map((estado) => {
      return encodeURIComponent(estado[0]) + '=' + encodeURIComponent(estado[1])
    }).join('&');

    fetch(url, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json; charset=utf-8'
      }
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error));

  }

  isInstrutor = (e) => {
    if(this.state.checked === false){
      this.setState({
        checked: true,
        ...this.state.person.tipo = 'I'
      });
      console.log(this.state);
    }else{
      this.setState({
        checked: false,
        ...this.state.person.cref = null,
        ...this.state.person.tipo = 'A'
      });
      console.log(this.state);
    }
  }

  render(){
    return(
      <div>
        <Header/>
        <form onSubmit={this.submitHandler} formAction='POST' >

          <label class="field a-field a-field_a1 page__field form_label">

                <input type='text' id='user' class="field__input"  placeholder="Ex. Fulano da Silva" value={this.state.person.nome} onChange={(e) => this.setState({...this.state.person.nome = e.target.value})}/>
                <span class="field__label-wrap">
                  <span class="field__label" htmlFor='user'>Nome</span>
                </span>
              </label>

          <br/>

            <label class="field a-field a-field_a1 page__field form_label">
                <input type='password' id='pass' class="field__input"  placeholder=" " value={this.state.person.senha} onChange={(e) => this.setState({...this.state.person.senha = e.target.value})} feedback={false}/>
                <span class="field__label-wrap">
                  <span class="field__label" htmlFor='pass'>Senha</span>
                </span>
              </label>

          <br/>

            <label class="field a-field a-field_a1 page__field form_label">
                <input type='password' id='confPass' class="field__input"  placeholder=" " value={this.state.confSenha} onChange={(e) => this.setState({confSenha: e.target.value})} feedback={false}/>
                <span class="field__label-wrap">
                  <span class="field__label" htmlFor='confPass'>Confirme sua senha</span>
                </span>
              </label>

          <br/>

            <label class="field a-field a-field_a1 page__field form_label">
                <input type='text' id='cpf' class="field__input"  placeholder="Ex. 111.111.111-11" value={this.state.person.cpf} onChange={(e) => this.setState({...this.state.person.cpf = e.target.value})} keyfilter='pint'/>
                <span class="field__label-wrap">
                  <span class="field__label" htmlFor='cpf'>CPF</span>
                </span>
              </label>

          <br/>

            <label class="field a-field a-field_a1 page__field form_label">
                <input type='text' id='email' class="field__input"  placeholder="Ex. 111.111.111-11" value={this.state.person.email} onChange={(e) => this.setState({...this.state.person.email = e.target.value})}/>
                <span class="field__label-wrap">
                  <span class="field__label" htmlFor='email'>E-mail</span>
                </span>
              </label>

          <br/>

            <label class="field a-field a-field_a1 page__field form_label">
                <input type='date' id='birthDate' class="field__input"  placeholder="Ex. 111.111.111-11" value={this.state.data} onChange={(e) => this.setState({data: e.value})}/>
                <span class="field__label-wrap">
                  <span class="field__label" htmlFor='birthDate'>Data de nascimento</span>
                </span>
              </label>

          <br/>

          {this.props.location.state.acao === 'cadastrar' ? [
              <div>
                <Checkbox inputId='inst' onChange={this.isInstrutor} chekced={this.state.checked}/>
                <label htmlFor='inst'>Instrutor</label>
              </div>
            ] : null
          }

          {this.state.person.tipo === 'I' ? [
              <div>
                <label htmlFor='cref'>Número CREF</label>
                <InputText id='cref' value={this.state.person.cref} onChange={(e) => this.setState({...this.state.person.cref = e.target.value})}/>
              </div>
            ] : null
          }

          <Button label='Cadastrar'/>
        </form>
        <BotaoVoltar/>
        <Footer/>
      </div>
    );
  }
}
