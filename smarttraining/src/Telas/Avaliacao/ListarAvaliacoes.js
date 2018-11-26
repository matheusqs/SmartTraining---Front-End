import React from 'react';
import { Header } from '../../Components/Header';
import { BotaoVoltar } from '../../Components/BotaoVoltar';
import { Footer } from '../../Components/Footer';
import { Link } from 'react-router-dom';
import './../../css/lista.css';

export class ListarAvaliacoes extends React.Component{
    constructor(props){
        super(props);

        this.state = ({
            avaliacoes: []
        });
    }

    componentDidMount = () => {
        let url = `http://localhost:8080/servletweb?acao=ListarAvaliacoes&codCpf=${this.props.location.state.aluno.cpf}`;
        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(resposta => resposta.json())
        .then(resultado => this.setState({avaliacoes: resultado}));
    }
    
    render(){
        let lista;
        if(this.state.avaliacoes){
            lista = this.state.avaliacoes.map((avaliacao, i) => 
                <li key={i}>
                    <div className="div-lista">Avaliação: {avaliacao.data}</div>
                    <span className="lista-right">
                    <Link to={{
                        pathname: '/verAvaliacao',
                        state: {
                            user: this.props.location.state.user,
                            avaliacao: avaliacao
                        }
                    }}><button type='button' className="btn">Ver</button></Link>
                    
                    {
                        this.props.location.state.user.tipo !== 'A' ?
                        <Link to={{
                            pathname: '/manterAvaliacao',
                            state: {
                                user: this.props.location.state.user,
                                acao: 'alterar',
                                avaliacao: avaliacao
                            }
                        }}><button type='button' className="btn">Alterar</button></Link> : null
                    }</span>
                </li>
            );
        }

        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div className='container'>
                    <h2>{this.props.location.state.user.tipo === 'A' ? 'Avaliações:' : 'Avaliações ' + this.props.location.state.aluno.nome + ':'}</h2>
                    
                    {
                        this.props.location.state.user.tipo !== 'A' ?
                        <span>
                            <Link to={{
                                pathname: '/removerAvaliacao',
                                state: {
                                    user: this.props.location.state.user,
                                    aluno: this.props.location.state.aluno
                                }
                            }}><button type='button' className='btn btn-right'>Remover</button></Link> 

                            <Link to={{
                                pathname: '/manterAvaliacao',
                                state: {
                                    user: this.props.location.state.user,
                                    acao: 'cadastrar',
                                    aluno: this.props.location.state.aluno 
                                }
                            }}><button type='button' className='btn btn-right'>Inserir</button></Link>

                        </span>: null
                    }
                    <br/>

                    <ul className="striped-list">{lista}</ul>
                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        )
    }
}