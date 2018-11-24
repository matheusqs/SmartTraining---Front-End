import React from 'react';
import { Header } from '../../Components/Header';
import { BotaoVoltar } from '../../Components/BotaoVoltar';
import { Footer } from '../../Components/Footer';
import { Link } from 'react-router-dom';

export class ListarAvaliacoes extends React.Component{
    constructor(props){
        super(props);

        this.state = ({
            aluno: {},
            avaliacoes: []
        });
    }

    componentDidMount = () => {
        this.setState({aluno: this.props.location.state.aluno});

        let url = `http://localhost:8080/servletweb?acao=ListarAvaliacoes&codCpf=${this.state.aluno.cpf}`;
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
                </li>
            );
        }

        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div>
                    <h2>{this.props.location.state.user.tipo === 'A' ? 'Avaliações:' : 'Avaliações ' + this.props.aluno.nome + ':'}</h2>
                    
                    {
                        this.props.location.state.user.tipo !== 'A' ?
                        <span>
                            <Link to={{
                                pathname: '/inserirAvaliacao',
                                state: {
                                    user: this.props.location.state.user,
                                    aluno: this.state.aluno 
                                }
                            }}><button type='button' className='btn btn-right'>Inserir Avaliação</button></Link>

                            <Link to={{
                                pathname: '/removerAvaliacoes',
                                state: {user: this.props.location.state.user}
                            }}><button type='button' className='btn btn-right'>Remover</button></Link> 
                        </span>: null
                    }

                    <ul>{lista}</ul>
                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        )
    }
}