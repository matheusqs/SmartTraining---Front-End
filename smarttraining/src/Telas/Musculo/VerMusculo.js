import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { BotaoVoltar } from '../../Components/BotaoVoltar';

export class VerMusculo extends React.Component{
    constructor(props){
        super(props);
    }

    montarLista = () => {
        let lista = this.props.location.state.musculo.exercicios.map(exercicio => {
            <li>
                {exercicio.nome}
                <Link to={{
                    pathname: '/verExercicio',
                    user: this.props.location.state.user,
                    exercicio: exercicio
                }}><Button label='Ver exercício'/></Link>
            </li>
        });
    }

    render(){
        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div>
                    <h2>Nome</h2>
                    <p>{this.props.location.state.musculo.nome}</p>

                    <h2>Descrição</h2>
                    <textarea disabled>
                        {this.props.location.state.musculo.descricao}
                    </textarea>

                    <h2>Exercícios</h2>
                    <ul>{this.montarLista}</ul>
                    
                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        )
    }
}