import React from 'react';
import {Header} from '../../Components/Header';
import {Footer} from '../../Components/Footer';
import {SelectTable} from '../../Components/SelectTable';
import {BotaoVoltar} from '../../Components/BotaoVoltar';
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import {Button} from 'primereact/button';

export class ManterExercicio extends React.Component {
    constructor(props){
        super(props);

        this.submitHandler = this.submitHandler.bind(this);
    }

    componentDidMount(){
        let url = 'http://localhost:8080/servletweb?acao=ListarAparelhos';

        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(resposta => resposta.json())
        .then(resultado => this.setState({listaAparelhos: resultado}));
    }

    submitHandler = (e) => {
        e.preventDefault();

        let url = 'http://localhost:8080/servletweb?acao=CadastrarExercicio';
        let data = Object.entries(this.state).map(state => {
            return encodeURIComponent(state[0]) + '=' + encodeURIComponent(state[1]);
        }).join('&');

        fetch(url, {
            method: 'POST',
            body: data, 
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(resposta => resposta.json())
        .catch(error => console.error('Error:', error));

    }

    render(){
        return(
            <div>
                <Header/>
                <div>
                    <form onSubmit={this.submitHandler}>
                        <label htmlFor='nome'>Nome</label>
                        <InputText id='nome' value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value})} />
                        <br/>

                        <label htmlFor='des'>Descrição</label>
                        <InputTextarea id='des' value={this.state.descricao} onChange={(e) => this.setState({descricao: e.target.value})} />
                        <br/>

                        <h2>Aparelhos:</h2>
                        <SelectTable opcoes={this.state.listaAparelhos} selecionados={this.state.aparelhos}
                            selectionHandler={(e) => this.setState({aparelhos: e.data})} header='Aparelho'/>
                        <br/>

                        <Button label='Cadastrar'/>
                    </form>
                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        )
    }
}