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
        if(this.props.location.state.user.tipo !== 'A'){
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
        .then(resultado => this.setState({fichas: resultado}))
        .catch(error => console.error(error));
    }

    render(){
        let lista;
        if(this.state.fichas){
            lista = this.state.fichas.map((ficha, i) =>
                <li key={i}>
                    <div className="div-lista">Ficha: {ficha.data}</div>

                    <Link to={{
                        pathname: '/verFicha',
                        state: {
                            user: this.props.location.state.user,
                            ficha: ficha
                        }
                    }}><button type='button' className="btn lista-right">Ver</button></Link>
                </li>    
            );
        }

        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div>
                    <h2 className="lista">{this.props.location.state.user.tipo === 'A' ? 'Fichas' : 'Fichas ' + this.props.location.state.aluno.nome }</h2>
                    <br/>

                    <ul className="striped-list gambiarra">{lista}</ul>
                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        )
    }
}