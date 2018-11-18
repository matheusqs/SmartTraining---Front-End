import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { BotaoVoltar } from '../../Components/BotaoVoltar';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

export class VerExercicio extends React.Component{
    constructor(props){
        super(props);

        this.montaLista = this.montaLista.bind(this);
    }

    montaLista = () => {
        let lista = this.props.location.state.exercicio.musculos.map(musculo => {
            <li>
                {musculo.nome}
                <Link to={{
                    pathname: '/verMusculo',
                    user: this.props.location.state.user,
                    musculo: musculo
                }}><Button label='Ver músculo'/></Link>
            </li>
        })

        return lista;
    }

    render(){
        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div>
                    <h2>Nome:</h2>
                    <p>{this.props.location.state.exercicio.nome}</p>

                    <h2>Descrição</h2>
                    <textarea disabled>
                        {this.props.location.state.exercicio.descricao}
                    </textarea>

                    <h2>Músculos</h2>
                    <ul>{this.montaLista}</ul>

                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        )
    }
}