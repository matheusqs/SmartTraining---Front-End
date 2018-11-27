import React from 'react';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Calendar } from 'primereact/calendar';
import { Checkbox } from 'primereact/checkbox';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { BotaoVoltar } from '../../Components/BotaoVoltar';

export class ManterUsuario extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      person: {
        cpf: null,
        nome: null,
        tipo: this.props.location.state.acao === 'cadastrar' ? 'A' : null,
        senha: null,
        email: null,
        dataNascimento: {
          year: null,
          month: null,
          day: null
        }
      },
      checked: false,
      data: null,
      confSenha: null
    });

    this.isInstrutor = this.isInstrutor.bind(this);
  }

  componentDidMount() {
    if (this.props.location.state.acao === 'alterar') {
      let url = `http://localhost:8080/servletweb?acao=MostrarUsuario&codCpf=${this.props.location.state.user.cpf}`;

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
            ...this.state.person.tipo = resultado.tipo,
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

    let dia;
    let mes;
    let ano;

    if(this.props.location.state.acao === 'cadastrar' || this.state.dataChange){
      dia = 2;
      mes = 6;
      ano = 1998;

      dia < 10 ? dia = '0' + dia : null;
      mes < 10 ? mes = '0' + mes : null;
    }

    if(this.props.location.state.acao === 'alterar'){
      let date = this.state.data.split('-');
      dia = date[2];
      mes = date[1];
      ano = date[0];
    }

    this.setState({
      ...this.state.person.dataNascimento.day = dia,
      ...this.state.person.dataNascimento.month = mes,
      ...this.state.person.dataNascimento.year = ano
    });

    console.log(this.state.person.dataNascimento);

    let url = 'http://localhost:8080/servletweb?acao=';

    if (this.props.location.state.acao === 'cadastrar') {
      this.state.person.tipo === 'A' ?
        url += 'CadastrarAluno' :
        url += 'CadastrarInstrutor';
    }

    if(this.props.location.state.acao === 'alterar'){
      url += 'AlterarUsuario';
    }

    let data = JSON.stringify(this.state.person);

    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: data
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error));

    if(this.props.location.state.acao === 'cadastrar'){
      this.props.history.push({pathname: '/'});
    }else{
      this.props.history.push({
        pathname: '/verPerfil',
        state: {
          user: this.props.location.state.user
        }
      });
    }

  }

  isInstrutor = (e) => {
    if(this.props.location.state.acao === 'cadastrar'){
      if (this.state.checked === false) {
        this.setState({
          checked: true,
          ...this.state.person.tipo = 'I'
        });
        console.log(this.state);
      } else {
        this.setState({
          checked: false,
          ...this.state.person.cref = null,
          ...this.state.person.tipo = 'A'
        });
        console.log(this.state);
      }
    }
  }

  render() {
    return (
      <div>
        {
          this.props.location.state.acao ===  'cadastrar' ? <Header/> : <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
        }
        <div className="form-div">
          <form onSubmit={this.submitHandler} formAction='POST' >
            <label className="field a-field a-field_a1 page__field form_label">
              <input type='text' id='user' className="field__input" placeholder="Ex. Fulano da Silva" value={this.state.person.nome} onChange={(e) => this.setState({ ...this.state.person.nome = e.target.value })} />
              <span className="field__label-wrap">
                <span className="field__label" htmlFor='user'>Nome</span>
              </span>
            </label>



            <label className="field a-field a-field_a1 page__field form_label">
              <input type='text' id='cpf' className="field__input" placeholder="Ex. 111.111.111-11" value={this.state.person.cpf} onChange={(e) => this.setState({ ...this.state.person.cpf = e.target.value })} keyfilter='pint' />
              <span className="field__label-wrap">
                <span className="field__label" htmlFor='cpf'>CPF</span>
              </span>
            </label>

            <br />

            <label className="field a-field a-field_a1 page__field form_label">
              <input type='password' id='pass' className="field__input" placeholder=" " value={this.state.person.senha} onChange={(e) => this.setState({ ...this.state.person.senha = e.target.value })} feedback={false} />
              <span className="field__label-wrap">
                <span className="field__label" htmlFor='pass'>Senha</span>
              </span>
            </label>

            <label className="field a-field a-field_a1 page__field form_label">
              <input type='password' id='confPass' className="field__input" placeholder=" " value={this.state.confSenha} onChange={(e) => this.setState({ confSenha: e.target.value })} feedback={false} />
              <span className="field__label-wrap">
                <span className="field__label" htmlFor='confPass'>Confirme sua senha</span>
              </span>
            </label>

            <br />



            <label className="field a-field a-field_a1 page__field form_label">
              <input type='text' id='email' className="field__input" placeholder="Ex. 111.111.111-11" value={this.state.person.email} onChange={(e) => this.setState({ ...this.state.person.email = e.target.value })} />
              <span className="field__label-wrap">
                <span className="field__label" htmlFor='email'>E-mail</span>
              </span>
            </label>


            <label className="field a-field a-field_a1 page__field form_label">
              <input type='date' id='birthDate' className="field__input" placeholder="Ex. 111.111.111-11" value={this.state.data} onChange={(e) => this.setState({ data: e.value, dataChange: true })} />
              <span className="field__label-wrap">
                <span className="field__label" htmlFor='birthDate'>Data de nascimento</span>
              </span>
            </label>

            <br />
            <br />

            {this.props.location.state.acao === 'cadastrar' ?
              <div>
                <Checkbox inputId='inst' onChange={this.isInstrutor} chekced={this.state.checked} />
                <label htmlFor='inst'>Instrutor</label>
              </div> : null
            }

            {this.state.person.tipo === 'I' ?
              <div>
                <label className="field a-field a-field_a1 page__field form_label">
                <input type='number' className="field__input" placeholder="Ex. 111.111.111-11" id='cref' value={this.state.person.cref}
                onChange={(e) => this.setState({ ...this.state.person.cref = e.target.value })} />                  <span className="field__label-wrap">
                    <span className="field__label"htmlFor='cref'>Número CREF</span>
                  </span>
                </label>
                
              </div> : null
            }
            
            <button type='submit' className="btn btn-right">Cadastrar</button>
          </form>
        </div>
        <BotaoVoltar />
        <Footer />
      </div>
    );
  }
}