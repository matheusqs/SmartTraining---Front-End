import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { BotaoVoltar } from '../../Components/BotaoVoltar';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

export class VerAparelho extends React.Component{
    constructor(props){
        super(props);
    }

    montarLista = () => {
        let lista = this.props.location.state.aparelho.exercicios(exercicio => {
            <li>
                {exercicio.nome}
                <Link to={{
                    pathname: '/verExercicio',
                    state: {
                        user: this.props.location.state.user,
                        exercicio: exercicio
                    }                    
                }}><Button label='Ver exercício'/></Link>
            </li>
        });
        return lista;
    }

    render(){
        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div>
                    <h2>Nome</h2>
                    <p>{this.props.location.state.aparelho.nome}</p>

                    <h2>Exercícios</h2>
                    <ul>{this.montarLista}</ul>

                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        );
    }
}