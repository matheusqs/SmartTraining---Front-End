import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { BotaoVoltar } from '../../Components/BotaoVoltar';

export class VerFicha extends React.Component{
    constructor(props){
        super(props);

        this.state = ({
            ficha: {},
            nTreioAtual: 0
        });
    }

    componentDidMount = () => {
        let ficha = this.props.location.state.ficha;
        let url = `http://localhost:8080/servletweb?acao=MostrarFicha&data=${ficha.data}&codCpf=${ficha.cpf}`;
        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(resultado => this.setState({ficha: resultado}));
    }

    changeHandler = (e) => {

    }

    render(){
        let opcoes;
        if(this.state.ficha.treinos){
            opcoes = this.state.ficha.treinos.map((treino) => 
                <option key={treino.numero} onClick={this.setState({nTreioAtual: treino.numero})}>Treino {treino.numero + 1}</option>
            );
        }

        let tabela;
        if(this.state.ficha.treino[this.state.nTreioAtual].atividades){
            tabela = this.state.ficha.treino[this.state.nTreioAtual].atividades.map((atividade, i) => 
                <tr>
                    <td>{atividade.nroAparelho}</td>
                    <td>{atividade.nomExercicio}</td>
                    <td>{atividade.series}</td>
                    <td>{atividade.repeticoes}</td>
                    <td>{atividade.peso}</td>
                </tr>
            );
        }

        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div>
                    <select onChange={this.changeHandler}>{opcoes}</select>

                    <table>
                        <tr>
                            <th>Aparelho</th>
                            <th>Exercício</th>
                            <th>Nº séries</th>
                            <th>Nº repetições</th>
                            <th>Peso</th>
                        </tr>
                        {tabela}
                    </table>
                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        )
    }
}