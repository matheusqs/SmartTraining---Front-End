import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { BotaoVoltar } from '../../Components/BotaoVoltar';

export class ListarFichas extends React.Component{
    constructor(props){
        super(props);

        this.state = ({
            fichas: []
        });
    }

    componentDidMount = () => {
        let url;
        if(this.props.location.state.user.tipo !== 'a'){
            url = `http://localhost:8080/servletweb?acao=ListarFichas&codCpf=${this.props.location.state.aluno.cpf}`;
        }else{
            url = `http://localhost:8080/servletweb?acao=ListarFichas&codCpf=${this.props.location.state.user.cpf}`;
        }
        
        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(resultado => this.setState({fichas: resultado}));
    }

    render(){
        let lista;
        if(this.state.fichas){
            lista = this.state.fichas.map((ficha, i) =>
                <li key={i}>
                    Ficha: {ficha.data}

                    <Link to={{
                        pathname: '/verFicha',
                        state: {
                            user: this.props.location.state.user,
                            ficha: ficha
                        }
                    }}><button type='button'>Ver</button></Link>
                </li>    
            );
        }

        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div>
                    <h2>{this.props.location.state.user.tipo === 'A' ? 'Fichas:' : 'Fichas ' + this.props.location.state.aluno.nome + ':'}</h2>
                    <br/>

                    <ul>{lista}</ul>
                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        )
    }
}