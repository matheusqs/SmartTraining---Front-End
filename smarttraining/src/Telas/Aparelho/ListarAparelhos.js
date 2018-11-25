import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { BotaoVoltar } from '../../Components/BotaoVoltar';
import { Link } from 'react-router-dom';

export class ListarAparelhos extends React.Component{
    constructor(props){
        super(props);

        this.state = ({
            aparelhos: []
        });
    }

    componentDidMount = () => {
        let url = 'http://localhost:8080/servletweb?acao=ListarAparelhos';
        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(resposta => resposta.json())
        .then(resultado => this.setState({aparelhos: resultado}));
    }

    render(){
        let lista;
        if(this.state.aparelhos){
            lista = this.state.aparelhos.map((aparelho, i) => 
                <li key={i}>
                    {aparelho.nome}
                    
                    <Link to={{
                        pathname: '/verAparelho',
                        state: {                        
                            user: this.props.location.state.user,
                            aparelho: aparelho
                        }
                    }}><input type='button' value='Ver'/></Link>

                    {
                        this.props.location.state.user.tipo !== 'A' ?
                        <Link to={{
                            pathname: '/manterAparelho',
                            state: {
                                user: this.props.location.state.user,
                                acao: 'alterar'
                            }
                        }}><button type='button'>Alterar</button></Link> : null
                    }
                </li>
            );
        }

        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div>
                    <h2>Aparelhos:</h2>
                    
                    {
                        this.props.location.state.user.tipo === 'C' ?
                        <span>
                            <Link to={{
                                pathname: '/manterAparelho',
                                state: {
                                    user: this.props.location.state.user,
                                    acao: 'cadastrar'
                                }
                            }}><button type='button' className='btn btn-right'>Cadastrar</button></Link>

                            <Link to={{
                                pathname: '/removerAparelhos',
                                state: {user: this.props.location.state.user}
                            }}><input type='button' value='Remover'/></Link> 
                        </span>: null
                    }

                    <ul>{lista}</ul>
                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        );
    }
}