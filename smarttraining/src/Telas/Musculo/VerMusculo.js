import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { Link } from 'react-router-dom';
import { BotaoVoltar } from '../../Components/BotaoVoltar';

export class VerMusculo extends React.Component{
    constructor(props){
        super(props);

        this.state = ({
            musculo: {}
        });
    }

    componentDidMount = () => {
        let musc = this.props.location.state.musculo;
        let url = `http://localhost:8080/servletweb?acao=MostrarMusculo&numero=${musc.numero}`;
        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(resultado => this.setState({musculo: resultado}));
    }

    render(){
        let lista;
        if(this.state.musculo.exercicios){
            lista = this.state.musculo.exercicios.map((exercicio, i) => 
                <li key={i}>
                    <div className="div-lista">{exercicio.nome}</div>

                    <Link to={{
                        pathname: '/verExercicio',
                        state: {
                            user: this.props.location.state.user,
                            exercicio: exercicio
                        }
                    }}><button type='button' className='btn lista-right'>Ver</button></Link>
                </li>
            );
        }

        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div className='container'>
                    <p><h1>Músculo: {this.state.musculo.nome}</h1></p>

                    <p><h2>Exercícios</h2></p>
                    <p><ul className="striped-list">{lista}</ul></p>
                    
                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        )
    }
}