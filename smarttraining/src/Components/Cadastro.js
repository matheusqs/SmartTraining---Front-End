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

    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    if(this.state.checked === false){
      this.setState({checked: true});
    }else{
      this.setState({checked: false});
    }
  }

  render(){
    return(
      <div>
        <form>
          <span className='p-float-label'>
            <InputText id='user' value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}/>
            <label htmlFor='user'>Username</label>
          </span>
          <br/>

          <span className='p-float-label'>
            <Password id='pass' value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
            <label htmlFor='pass'>Password</label>
          </span>
          <br/>

          <span className='p-float-label'>
            <Password id='confPass' value={this.state.confPassword} onChange={(e) => this.setState({confPassword: e.target.value})} feedback={false}/>
            <label htmlFor='confPass'>Confirm your password</label>
          </span>
          <br/>

          <span className='p-float-label'>
            <InputText id='cpf' value={this.state.cpf} onChange={(e) => this.setState({cpf: e.target.value})} keyfilter='pint'/>
            <label htmlFor='cpf'>CPF</label>
          </span>
          <br/>

          <span className='p-float-label'>
            <InputText id='email' value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
            <label htmlFor='email'>E-mail</label>
          </span>
          <br/>

          <span className='p-float-label'>
            <Calendar className='p-calendar' id='birthDate' value={this.state.date} onChange={(e) => this.setState({date: e.target.value})}/>
            <label htmlFor='birthDate'>Date of birth</label>
          </span>
          <br/>

          <Checkbox inputId='instrutor' onChange={this.onChange} checked={this.state.checked}/>
          <label htmlFor='instrutor' className='p-checkbox-label'>Instrutor</label>
        </form>
      </div>
    );
  }
}
