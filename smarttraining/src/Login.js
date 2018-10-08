import React from 'react';
import {Header} from './Components/Header';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import {Button} from 'primereact/button';

export class Login extends React.Component{
  constructor(props) {
    super(props);

    this.state = ({
      cpf: null
    });
  }

  render(){
    return(
      <div>
        <Header tipo='index'/>
        <div>
          <div>
            <p>ENCHER LINGUIÇA COLOCAR DISPLAY FLEX</p>
          </div>
          <div>
            <form>
              <label htmlFor='cpf'>CPF</label>
              <InputText keyfilter='pint' id='cpf' value={this.state.cpf} onChange={(e) => this.setState({cpf: e.target.value})}/>
              <br/>
              <label htmlFor='senha'>Senha</label>
              <Password id='senha'/>
              <br/>
              <Button label='Logar'/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
