import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { BotaoVoltar } from '../../Components/BotaoVoltar';

export class VerFicha extends React.Component{
    constructor(props){
        super(props);

        this.state = ({
            ficha: {},
        });
    }

    componentDidMount = () => {
        let ficha = this.props.location.state.ficha;
        let url = `http://localhost:8080/servletweb?acao=MostrarFicha&numero=${ficha.numero}&codCpf=${ficha.codCpf}`;
        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(resultado => this.setState({ficha: resultado}));
    }

    render(){
        let treinos;
        if(this.state.ficha.treinos){
            treinos = this.state.ficha.treinos.map((treino, i) =>
                <li key={i}>
                    <h2>Treino {treino.numero}</h2>
                    <table>
                        <tr>
                            <th>Aparelho</th>
                            <th>Exercício</th>
                            <th>Séries</th>
                            <th>Repetições</th>
                            <th>Peso</th>
                        </tr>
                        {treino.atividades.map((atividade, j) =>
                            <tr>
                                <th>{atividade.nroAparelho}</th>
                                <th>{atividade.nomExercicio}</th>
                                <th>{atividade.nroSeries}</th>
                                <th>{atividade.nroRepeticoes}</th>
                                <th>{atividade.qtdPeso}</th>
                            </tr>
                        )}
                    </table>
                </li>
            );
        }

        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div>
                    <ul>{treinos}</ul>
                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        )
    }
}