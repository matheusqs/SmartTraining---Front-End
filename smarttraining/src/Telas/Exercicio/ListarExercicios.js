import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { BotaoVoltar } from '../../Components/BotaoVoltar';
import { Link } from 'react-router-dom';

export class ListarExercicios extends React.Component {
    constructor(props){
        super(props);

        this.state = ({
            exercicios: []
        });
    }

    componentDidMount(){
        let url = 'http://localhost:8080/servletweb?acao=ListarExercicios';

        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(resposta => resposta.json())
        .then(resultado => this.setState({exercicios: resultado}));
    }

    render(){
        let lista;
        if(this.state.exercicios){
            lista = this.state.exercicios.map((exercicio, i) => 
                <li key={i}>
                    {exercicio.nome}
                    
                    <Link to={{
                        pathname: '/verExercicio',
                        state: {
                            user: this.props.location.state.user,
                            exercicio: exercicio
                        }
                    }}><input type='button' value='Ver'/></Link>

                    <Link to={{
                        pathname: '/manterExercicio',
                        state: {
                            user: this.props.location.state.user,
                            acao: 'alterar',
                            exercicio: exercicio
                        }
                    }}><button>Alterar</button></Link>
                </li>
            );
        }

        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div>
                    <h2>Exercícios:</h2>
                    
                    {
                        this.props.location.state.user.tipo !== 'A' ?
                        <span> 
                            <Link to={{
                                pathname: '/manterExercicio',
                                state: {
                                    user: this.props.location.state.user,
                                    acao: 'cadastrar'
                                }
                            }}><input type='button' value='Inserir'/></Link>

                            <Link to={{
                                pathname: '/removerExercicio',
                                state: {user: this.props.location.state.user}
                            }}><input type='button' value='Remover'/></Link> 
                        </span> : null
                    }

                    <ul>{lista}</ul>
                    <BotaoVoltar/>
                </div>
                <Footer/> 
            </div>
        )
    }
}