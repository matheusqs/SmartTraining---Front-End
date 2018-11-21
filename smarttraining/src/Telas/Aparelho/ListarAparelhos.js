import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { BotaoVoltar } from '../../Components/BotaoVoltar';
import { Link } from 'react-router-dom';

export class ListarAparelhos extends React.Component{
    constructor(props){
        super(props);

        this.montarLista = this.montarLista.bind(this);
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

    montarLista = () => {
        if(!this.state.aparelhos){
            return;
        }

        let lista = this.state.aparelhos.map(aparelho => {
            <li>
                {aparelho.nome}
                <Link to={{
                    pathname: '/verAparelho',
                    state: {                        
                        user: this.props.location.state.user,
                        aparelho: aparelho
                    }
                }}><input type='button' value='Ver aparelho'/></Link>
            </li>
        });
        return lista;
    }

    render(){
        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div>
                    <ul>{this.montarLista}</ul>
                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        );
    }
}