import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { BotaoVoltar } from '../../Components/BotaoVoltar';
import { Link } from 'react-router-dom';

export class ListarExercicios extends React.Component {
    constructor(props){
        super(props);

        this.state = ({
            exercicios: null
        });

        this.montaLista = this.montaLista.bind(this);
    }

    componentDidMount(){
        let url = 'http://localhost:8080/servletweb?acao=ListarExercicios';

        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(resposta => resposta.json())
        .then(resultado => this.setState({exercicios: resultado}));
    }

    montaLista = () => {
        if(!this.state.exercicios){
            return;
        }

        let exercicios = this.state.exercicios.map(exercicio => {
            <li>
                {exercicio.nome}
                <Link to={{
                    pathname: '/verExercicio',
                    state: {
                        user: this.props.location.state.user,
                        exercicio: exercicio
                    }
                }}><input type='button' value='Ver exercício'/></Link>
            </li>
        });

        return exercicios;
    }

    render(){
        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div>
                    <ul>{this.montaLista}</ul>
                    <BotaoVoltar/>
                </div>
                <Footer/> 
            </div>
        )
    }
}