import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { BotaoVoltar } from '../../Components/BotaoVoltar';
import { Link } from 'react-router-dom';
import './../../css/lista.css'

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
                    <div className="div-lista">{exercicio.nome}</div>
                    <span className="lista-right">
                    <Link to={{
                        pathname: '/verExercicio',
                        state: {
                            user: this.props.location.state.user,
                            exercicio: exercicio
                        }
                    }}><button className="btn">Ver</button></Link>

                    {<Link to={{
                        pathname: '/manterExercicio',
                        state: {
                            user: this.props.location.state.user,
                            acao: 'alterar',
                            exercicio: exercicio
                        }
                    }}><button className="btn">Alterar</button></Link>}
                    </span>
                </li>
            );
        }

        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div>
                    <h2 className="lista">Exercícios</h2>
                    <span className="lista-right">
                    
                    {
                        this.props.location.state.user.tipo !== 'A' ?
                        <span> 
                            <Link to={{
                                pathname: '/manterExercicio',
                                state: {
                                    user: this.props.location.state.user,
                                    acao: 'cadastrar'
                                }
                            }}><button type="button" className="btn">Inserir</button></Link>

                            <Link to={{
                                pathname: '/removerExercicio',
                                state: {user: this.props.location.state.user}
                            }}><button type="button" className="btn">Remover</button></Link> 
                        </span> : null
                    }
                    </span>
                    <ul className="striped-list">{lista}</ul>
                    <BotaoVoltar/>
                </div>
                <Footer/> 
            </div>
        )
    }
}