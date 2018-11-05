import React from 'react';
import {Header} from '../../Components/Header';
import {Footer} from '../../Components/Footer';
import {BotaoVoltar} from '../../Components/BotaoVoltar';
import {Dropdown} from 'primereact/dropdown';
import {Button} from 'primereact/button';
import {Link} from 'react-router-dom';

export class ListarAvaliacoes extends React.Component {
    constructor(props){
        super(props);

        this.state({
            aluno: {
                nome: null,
                cpf: null
            }
        });
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
        .then(resultado => {
            this.setState({avaliacoes: resultado})
        })

        if(this.props.location.state.user.tipo === 'I'){
            url = `http://localhost:8080/servletweb?acao=ListarAlunos`;

            fetch(url, {
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(resposta => resposta.json())
            .then(resultado => {
                this.setState({alunos: resultado})
            })
        }
    }

    render(){
        let lista = this.state.avaliacoes;
        let usuario = this.props.location.state.user;
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
                        ><Button label='Ver Avaliação'/></Link>
                    </li>
                }
            );
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
                        ><Button label='Ver avaliação'/></Link>
                    </li>
                }
            )
        }        

        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                
                <div>
                    {
                        this.props.location.state.user.tipo === 'I' ?
                        <Dropdown placeholder='Selecione um aluno' value={this.state.aluno.nome} options={this.state.alunos}
                            onChange={(e) => this.setState({...this.state.aluno.nome = e.value})}/> :
                        null
                    }

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