import React from 'react';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import {Calendar} from 'primereact/calendar';
import {Checkbox} from 'primereact/checkbox';
import {Button} from 'primereact/button';

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
      checked: false
    });

    this.isInstrutor = this.isInstrutor.bind(this);
  }

  isInstrutor(e){
    if(this.state.checked === false){
      this.setState({checked: true});
    }else{
      this.setState({checked: false});
    }
  }

  submit(){

  }

  voltar(){

  }

  render(){
    return(
      <div>
        <form>
          <label htmlFor='user'>Username</label>
          <InputText id='user' value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}/>
          <br/>

          <label htmlFor='pass'>Password</label>
          <Password id='pass' value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
          <br/>

          <label htmlFor='confPass'>Confirm your password</label>
          <Password id='confPass' value={this.state.confPassword} onChange={(e) => this.setState({confPassword: e.target.value})} feedback={false}/>
          <br/>

          <label htmlFor='cpf'>CPF</label>
          <InputText id='cpf' value={this.state.cpf} onChange={(e) => this.setState({cpf: e.target.value})} keyfilter='pint'/>
          <br/>

          <label htmlFor='email'>E-mail</label>
          <InputText id='email' value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
          <br/>

          <label htmlFor='birthDate'>Date of birth</label>
          <Calendar className='p-calendar' id='birthDate' value={this.state.date} onChange={(e) => this.setState({date: e.target.value})}/>
          <br/>

          <label htmlFor='instrutor' className='p-checkbox-label'>Instrutor</label>
          <Checkbox inputId='instrutor' onChange={this.isInstrutor} checked={this.state.checked}/>

          <Button label='Cadastrar' onClick={this.submit} className='p-button-success p-button-raised' />
          <Button label='Voltar' onClick={this.voltar} className='p-button-danger p-button-voltar' />
        </form>
      </div>
    );
  }
}
