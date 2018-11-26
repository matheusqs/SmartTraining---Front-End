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

                    <div className="div-lista">{aparelho.nome}</div>
                    <span className="lista-right">
                    <Link to={{
                        pathname: '/verAparelho',
                        state: {                        
                            user: this.props.location.state.user,
                            aparelho: aparelho
                        }
                    }}><button type='button' className="btn">Ver</button></Link>
                    </span>
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
                                pathname: '/removerAparelho',
                                state: {user: this.props.location.state.user}
                            }}><input type='button' value='Remover'/></Link> 
                        </span>: null
                    }
                    <br/>

                    <ul className="striped-list">{lista}</ul>
                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        );
    }
}