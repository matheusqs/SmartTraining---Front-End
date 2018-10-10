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

export class Cadastro extends React.Component {
  constructor(props) {
    super(props);

    this.state = ({
      username: null,
      password: null,
      confPassword: null,
      cpf: null,
      email: null,
      date: null,
      checked: false,
      cref: null,
      desativado: true
    });

    this.isInstrutor = this.isInstrutor.bind(this);
  }

  isInstrutor(e){
    if(this.state.checked === false){
      this.setState({checked: true,
        desativado: false});
    }else{
      this.setState({checked: false,
        desativado: true});
    }
  }

  voltar(){

  }

  render(){
    return(
      <div>
        <Header/>
        <form>
          <label htmlFor='user'>Nome</label>
          <InputText id='user' value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}/>
          <br/>

          <label htmlFor='pass'>Senha</label>
          <Password id='pass' value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
          <br/>

          <label htmlFor='confPass'>Confirme sua senha</label>
          <Password id='confPass' value={this.state.confPassword} onChange={(e) => this.setState({confPassword: e.target.value})} feedback={false}/>
          <br/>

          <label htmlFor='cpf'>CPF</label>
          <InputText id='cpf' value={this.state.cpf} onChange={(e) => this.setState({cpf: e.target.value})} keyfilter='pint'/>
          <br/>

          <label htmlFor='email'>E-mail</label>
          <InputText id='email' value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
          <br/>

          <label htmlFor='birthDate'>Data de nascimento</label>
          <Calendar className='p-calendar' id='birthDate' value={this.state.date} onChange={(e) => this.setState({date: e.target.value})}/>
          <br/>

          <label htmlFor='instrutor' className='p-checkbox-label'>Instrutor</label>
          <Checkbox inputId='instrutor' onChange={this.isInstrutor} checked={this.state.checked}/>
          <br/>

          <label htmlFor='cref'>Número de CREF</label>
          <InputText id='cref' value={this.state.cref} onChange={(e) => this.setState({cref: e.target.value})} disabled={this.state.desativado}/>
          <br/>

          <input type='submit'/>
          <Link to='/'><Button label='Voltar'/></Link>
        </form>
        <Footer/>
      </div>
    );
  }
}
