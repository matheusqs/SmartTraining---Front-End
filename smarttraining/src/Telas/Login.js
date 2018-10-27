import React from 'react';
import {Link} from 'react-router-dom';
import {InputText} from 'primereact/inputtext';
import {Password} from 'primereact/password';
import {Button} from 'primereact/button';
import {Header} from '../Components/Header';
import {Footer} from '../Components/Footer';

export class Login extends React.Component{
  constructor(props) {
    super(props);

    this.state = ({
      cpf: null,
      senha: null
    });
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
            <form>
              <label htmlFor='cpf'>CPF</label>
              <InputText keyfilter='pint' id='cpf' value={this.state.cpf} onChange={(e) => this.setState({cpf: e.target.value})}/>
              <br/>
              <label htmlFor='senha'>Senha</label>
              <Password id='senha' value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})}/>
              <br/>
              <Button label='Logar'/>
              <p>Ainda não possui uma conta?
                <Link to={{
                    pathname: '/manterusuario',
                    state: {
                      acao: 'cadastrar'
                    }
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
