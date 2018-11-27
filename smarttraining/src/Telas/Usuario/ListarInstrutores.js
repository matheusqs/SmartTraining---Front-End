import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { BotaoVoltar } from '../../Components/BotaoVoltar';
import { Link } from 'react-router-dom';

export class ListarInstrutores extends React.Component{
    constructor(props){
        super(props);

        this.state = ({
            instrutores: []
        });
    }

    componentDidMount = () => {
        let url = 'http://localhost:8080/servletweb?acao=ListarInstrutores';
        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(resposta => resposta.json())
        .then(resultado => this.setState({instrutores: resultado}));
    }

    render(){
        let lista;
        if(this.state.instrutores){
            lista = this.state.instrutores.map((instrutor, i) => 
                <li key={i}>
                    <div className="div-lista">{instrutor.nome}</div>

                    <Link to={{
                        pathname: '/verPerfil',
                        state: {
                            user: this.props.location.state.user,
                            instrutor: instrutor
                        }
                    }}><button type="button" className="btn lista-right">Ver</button></Link>
                </li>
            );
        }

        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div>
                    <h2 className="lista">Instrutores</h2>

                    <ul className="striped-list gambiarra" >{lista}</ul>
                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        );
    }
}