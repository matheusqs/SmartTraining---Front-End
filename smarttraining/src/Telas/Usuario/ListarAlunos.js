import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { BotaoVoltar } from '../../Components/BotaoVoltar';
import { Link } from 'react-router-dom';

export class ListarAlunos extends React.Component{
    constructor(props){
        super(props);

        this.state = ({
            alunos: []
        });
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

    render(){
        let lista;

        if(this.state.alunos){
            lista = this.state.alunos.map((aluno, i) =>
                <li key={i}>
                    {aluno.nome}
                    <Link to={{
                        pathname: '/verPerfil',
                        state:{
                            user: this.props.location.state.user,
                            aluno: aluno
                        }
                    }}><input type='button' value='Ver perfil'/></Link>
                </li>
            );
        }
        
        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div>
                    <ul>
                        {lista}
                    </ul>
                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        )
    }
}