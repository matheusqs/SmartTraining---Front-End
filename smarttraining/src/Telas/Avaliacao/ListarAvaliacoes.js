import React from 'react';
import { Header } from '../../Components/Header';
import { BotaoVoltar } from '../../Components/BotaoVoltar';
import { Footer } from '../../Components/Footer';
import { Link } from 'react-router-dom';

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
                    Avaliação: {avaliacao.data}

                    <Link to={{
                        pathname: '/verAvaliacao',
                        state: {
                            user: this.props.location.state.user,
                            avaliacao: avaliacao
                        }
                    }}><button type='button'>Ver</button></Link>
                    
                    {
                        this.props.location.state.user.tipo !== 'A' ?
                        <Link to={{
                            pathname: '/manterAvaliacao',
                            state: {
                                user: this.props.location.state.user,
                                acao: 'alterar',
                                avaliacao: avaliacao
                            }
                        }}><input type='button' value='alterar'/></Link> : null
                    }
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

                    <ul>{lista}</ul>
                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        )
    }
}