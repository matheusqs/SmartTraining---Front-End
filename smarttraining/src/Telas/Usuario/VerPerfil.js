import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { BotaoVoltar } from '../../Components/BotaoVoltar';

export class VerPerfil extends React.Component{
    constructor(props){
        super(props);

        this.state = ({
            usuario: {}
        });
    }

    componentDidMount = () => {
        let usuario;
        if(this.props.location.state.acao !== 'self'){
            usuario = this.props.location.state.usuario;
        }else{
            usuario = this.props.location.state.user;
        }

        let url = `http://localhost:8080/servletweb?acao=MostrarUsuario&codCpf=${usuario.cpf}`;
        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(resultado => this.setState({usuario: resultado}));
    }

    render(){
        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div>
                    <h2>Perfil:</h2>
                    <p>Nome: {this.state.usuario.nome}</p>
                    <p>Função: {this.state.usuario.tipo === 'A' ? 'Aluno' : this.state.usuario === 'I' ? 'Instrutor' : 'Coordenador'}</p>
                    <p>Email: {this.state.usuario.email}</p>
                    <p>Aniversário: {this.state.usuario.dataNascimento}</p>
                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        );
    }
}