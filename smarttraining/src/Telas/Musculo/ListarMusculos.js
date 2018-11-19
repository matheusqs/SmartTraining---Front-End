import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { BotaoVoltar } from '../../Components/BotaoVoltar';

export class ListarMusculos extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let url = 'http://localhost:8080/servletweb?acao=ListarMusculos';
        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(resposta => resposta.json())
        .then(resultado => this.setState({musculos: resultado}));
    }

    montarLista = () => {
        if(!this.state.musculos){
            return;
        }

        let lista = this.state.musculos.map(musculo => {
            <li>
                {musculo.nome}
                <Link to={{
                    pathname: '/verMusculo',
                    state: {
                        user: this.props.location.state.user,
                        musculo: musculo
                    }                    
                }}><Button label='Ver músculo'/></Link>
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
        )
    }
}