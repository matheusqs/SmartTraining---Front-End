import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { SelectTable } from '../../Components/SelectTable';
import { Button } from 'primereact/button';
import { BotaoVoltar } from '../../Components/BotaoVoltar';

export class ManterAparelho extends React.Component{
    constructor(props){
        super(props);

        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);d
    }

    componentDidMount = () => {
        if(this.props.location.state.acao === 'alterar'){
            let url = 'http://localhost:8080/servletwev?acao=ListarAparelhos';
            fetch(url, {
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(resposta => resposta.json())
            .then(resultado => this.setState({aparelhos: resultado}));
        }
    }

    changeHandler = (e) => {
        this.setState({aparelho: e.data});

        let url = `http://localhost:8080/servletweb?acao=MostrarAparelho&cod=${this.state.aparelho.cod}`;
        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(resposta => resposta.json())
        .then(resultado => this.setState({aparelho: resultado}));
    }

    submitHandler = (e) => {
        e.preventDefault();

        let url = 'http://localhost:8080/servletweb?acao=CadastrarAparelho';
        let data = Object.entries(this.state).map(state => {
            return encodeURIComponent(state[0]) + '=' + encodeURIComponent(state[1])
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
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div>
                    {
                        this.props.location.state === 'alterar'?
                        <Dropdown placeholder='Selecione um aparelho' options={this.state.aparelhos} value={this.state.aparelho}
                            onChange={this.changeHandler}/> : 
                        null
                    }

                    <form onSubmit={this.submitHandler}>
                        <label htmlFor='nome'>Nome</label>
                        <InputText id='nome' value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value})}/>
                        <br/>

                        <label htmlFor='des'>Descrição</label>
                        <InputText id='des' value={this.state.descricao} onChange={(e) => this.setState({descricao: e.target.value})}/>
                        <br/>

                        <label htmlFor='ex'>Exercícios</label>
                        <SelectTable opcoes={this.state.listaExercicios} selecionados={this.state.exercicios} id='ex'
                            selectionHandler={(e) => this.setState({exercicios: e.data})} header='Exercício' />

                        <Button label='Cadastrar'/>
                    </form>
                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        );
    }
}