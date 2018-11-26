import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { SelectTable } from '../../Components/SelectTable';
import { BotaoVoltar } from '../../Components/BotaoVoltar';

export class RemoverExercicio extends React.Component{
    constructor(props){
        super(props);

        this.state = ({
            exercicios: {},
            selecionados: {}
        });

        this.submitHandler = this.submitHandler.bind(this);
    }

    componentDidMount(){
        let url = 'http://localhost:8080/servletweb?acao=ListarExercicios';

        fetch(url,{
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(resposta => resposta.json())
        .then(resultado => this.setState({exercicios: resultado}));
    }

    submitHandler = () => {
        let url;
        this.state.selecionados.forEach(ex => {
            url = `http://localhost:8080/servletwev?acao=RemoverExercicio&numero=${ex.numero}`;
            fetch(url, {
                headers: {
                    'Accept': 'application/json'
                }
            });
        });
    }

    render(){
        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div>
                    <h2>Selecione os exercícios os quais deseja remover</h2>
                    <SelectTable opcoes={this.state.exercicios} selecionados={this.state.selecionados}
                        selectionHandler={(e) => this.setState({selecionados: e.data})} header='Exercício'/>

                    <input type='button' value='Remover' onClick={this.submitHandler}/>
                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        );
    }
}