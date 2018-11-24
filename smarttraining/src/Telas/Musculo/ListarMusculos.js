import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { Link } from 'react-router-dom';
import { BotaoVoltar } from '../../Components/BotaoVoltar';

export class ListarMusculos extends React.Component{
    constructor(props){
        super(props);

        this.state = ({
            musculos: []
        });
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

    render(){
        let lista;
        if(this.state.musculos){
            lista = this.state.musculos.map((musculo, i) => 
                <li key={i}>
                    {musculo.nome}

                    <Link to={{
                        pathname: '/verMusculo',
                        state: {
                            user: this.props.location.state.user,
                            musculo: musculo
                        }                    
                    }}><input type='button' value='Ver'/></Link>
                </li>
            );
        }

        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div>
                    <h2>Músculos:</h2>
                    <ul>{lista}</ul>
                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        )
    }
}