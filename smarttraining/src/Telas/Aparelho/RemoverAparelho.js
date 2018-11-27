import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { SelectTable } from '../../Components/SelectTable';
import { BotaoVoltar } from '../../Components/BotaoVoltar';

export class RemoverAparelho extends React.Component{
    constructor(props){
        super(props);

        this.state = ({
            aparelhos: {},
            selecionados: {}
        });

        this.submitHandler = this.submitHandler.bind(this);
    }

    componentDidMount = () => {
        let url = 'http://localhost:8080/servletweb?acao=ListarAparelhos';
        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(resposta => resposta.json())
        .then(resultado => this.setState({aparelhos: resultado}));
    }

    submitHandler = () => {
        let url;
        this.state.selecionados.forEach(aparelho => {
            url = `http://localhost:8080/servletweb?acao=RemoverAparelho&numero=${aparelho.numero}`;
            fetch(url, {
                headers: {
                    'Accept': 'application/json'
                }
            })
        });

        this.props.history.push({
            pathname: '/listarAparelhos',
            state: {
                user: this.props.location.state.user
            }
        });
    }

    render(){
        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div>
                    <h2>Selecione os aparelhos os quais deseja remover:</h2>
                    <SelectTable opcoes={this.state.aparelhos} selecionados={this.state.selecionados}
                        selectionHandler={(e) => this.setState({selecionados: e.data})} header='Aparelho'/>

                    <button type='button' className='btn' onClick={this.submitHandler}>Remover</button>
                    
                </div><BotaoVoltar/>
                <Footer/>
            </div>
        )
    }
}