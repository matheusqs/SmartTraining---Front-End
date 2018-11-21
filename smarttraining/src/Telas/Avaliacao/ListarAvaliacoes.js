import React from 'react';
import {Header} from '../../Components/Header';
import {Footer} from '../../Components/Footer';
import {BotaoVoltar} from '../../Components/BotaoVoltar';
import {Dropdown} from 'primereact/dropdown';
import {Link} from 'react-router-dom';

export class ListarAvaliacoes extends React.Component {
    constructor(props){
        super(props);

        this.state = ({ 
            aluno: {
                nome: null,
                cpf: null
            }
        });

        this.changeHandler = this.changeHandler.bind(this);
        this.montaLista = this.montaLista.bind(this);
    }

    componentDidMount(){
        let url;
        this.props.location.state.user.tipo === 'A' ? 
            url = `http://localhost:8080/servletweb?acao=ListarAvaliacoes&codCpf=${this.props.location.state.user.cpf}` :
            url = `http://localhost:8080/servletweb?acao=ListarAvaliacoes&codCpf=${this.state.aluno.cpf}`;

        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(resposta => resposta.json())
        .then(resultado => this.setState({avaliacoes: resultado}));

        if(this.props.location.state.user.tipo === 'I'){
            url = `http://localhost:8080/servletweb?acao=ListarAlunos`;

            fetch(url, {
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(resposta => resposta.json())
            .then(resultado => console.log(resultado));
        }
    }

    changeHandler = (e) => {
        this.setState({aluno: e.value});

        let url = `http://localhost:8080/servletweb?acao=ListarAvaliacoes&codCpf${this.state.aluno.cpf}`;
        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(resposta => resposta.json())
        .then(resultado => this.setState({avaliacoes: resultado}));
    }

    montaLista = () => {
        let lista = this.state.avaliacoes;
        if(this.props.location.state.user.tipo === 'A'){
            lista = lista.map(
                avaliacao => {
                    <li>
                        Avaliação: {avaliacao.data}
                        <Link to={{
                            pathname: '/verAvaliacao',
                            state:{
                                user: this.props.location.state.user,
                                avaliacao: avaliacao
                            }
                        }}
                        ><input type='button' value='Ver Avaliação'/></Link>
                    </li>
                }
            );
            return lista;
        }else{
            lista = lista.map(
                avaliacao => {
                    <li>
                        Avaliação: {avaliacao.data}
                        <Link to={{
                            pathname:'/verAvaliacao',
                            state: {
                                user: this.props.location.state.user,
                                aluno: this.state.aluno,
                                avaliacao: avaliacao
                            }
                        }}
                        ><input type='button' value='Ver Avaliação'/></Link>
                    </li>
                }
            );
            return lista;
        }
    }

    render(){     
        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                
                <div>
                    {
                        this.props.location.state.user.tipo === 'I' ?
                        <Dropdown placeholder='Selecione um aluno' value={this.state.aluno.nome} options={this.state.alunos}
                            onChange={this.changeHandler}/> :
                        null
                    }

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