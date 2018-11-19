import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { BotaoVoltar } from '../../Components/BotaoVoltar';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

export class ListarAlunos extends React.Component{
    constructor(props){
        super(props);

        this.state = ({
            alunos: []
        });

        this.montaLista = this.montaLista.bind(this);
    }

    componentDidMount(){
        let url = 'http://localhost:8080/servletweb?acao=ListarAlunos';

        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(resposta => resposta.json())
        .then(resultado => this.setState({alunos: resultado}));
    }

    montaLista = () => {
        if(!this.state.alunos){
            return;
        }

        let lista = this.state.alunos.map(aluno => {
            <li>
                {aluno.nome}
                <Link to={{
                    pathname: '/verPerfil',
                    state:{
                        user: this.props.location.state.user,
                        aluno: aluno
                    }
                }}><Button label ='Ver perfil'/></Link>
            </li>
        });

        return lista;
    }

    render(){
        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div>
                    <ul>
                        {this.montaLista}
                    </ul>
                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        )
    }
}