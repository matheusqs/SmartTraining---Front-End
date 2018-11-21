import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { SelectTable } from '../../Components/SelectTable';
import { BotaoVoltar } from '../../Components/BotaoVoltar';

export class RemoverAparelho extends React.Component{
    constructor(props){
        super(props);

        this.selectionHandler = this.selectionHandler.bind(this);
    }

    componentDidMount = () => {
        let url = 'http://localhost:8080/servletwev?acao=ListarAparelhos';
        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(resposta => resposta.json())
        .then(resultado => this.setState({aparelhos: resultado}));
    }

    selectionHandler = (e) => {
        this.setState({
            selecionados: e.data
        });
    }

    submitHandler = () => {
        let url;
        this.state.selecionados.forEach(aparelho => {
            url = `http://localhost:8080/servletweb?acao=RemoverAparelho&cod=${aparelho.cod}`;
            fetch(url, {
                headers: {
                    'Accept': 'application/json'
                }
            })
        });
    }

    render(){
        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div>
                    <h2>Selecione os aparelhos os quais deseja remover:</h2>
                    <SelectTable opcoes={this.state.aparelhos} selecionados={this.state.selecionados}
                        selectionHandler={this.selectionHandler} header='Aparelho'/>

                    <input type='button' value='Remover' onClick={this.submitHandler}/>
                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        )
    }
}