import React from 'react';
import {Header} from '../../Components/Header';
import {Footer} from '../../Components/Footer';
import {SelectTable} from '../../Components/SelectTable';
import {BotaoVoltar} from '../../Components/BotaoVoltar';
import {Dropdown} from 'primereact/dropdown';

export class ManterExercicio extends React.Component {
    constructor(props){
        super(props);

        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    componentDidMount(){
        if(this.props.location.state.acao === 'alterar'){
            let url = 'http://localhost:8080/servletweb?acao=ListarAparelhos';

            fetch(url, {
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(resposta => resposta.json())
            .then(resultado => this.setState({listaAparelhos: resultado}));
        }        
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

    changeHandler = (e) => {
        this.setState({exercicio: e.data});

        let url = `http://localhost:8080/servletweb?acao=MostrarExercicio&cod=${this.state.exercicio.cod}`;
        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(resposta => resposta.json)
        .then(resultado => {
            this.setState({
                ...this.state.exercicio.nome = resultado.nome,
                ...this.state.exercicio.descricao = resultado.descricao,
                ...this.state.exercicio.aparelhos = resultado.aparelhos
            })
        });
    } 

    render(){
        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div>
                    {
                        this.props.location.state.acao === 'alterar' ?
                        <Dropdown placeholder='Selecione um exercício' options={this.state.exercicios} value={this.state.exercicio}
                            onChange={this.changeHandler} /> :
                        null
                    }

                    <form onSubmit={this.submitHandler}>
                        <label htmlFor='nome'>Nome</label>
                        <input type='text' id='nome' value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value})} />
                        <br/>

                        <label htmlFor='des'>Descrição</label>
                        <input type='textarea'id='des' value={this.state.descricao} onChange={(e) => this.setState({descricao: e.target.value})} />
                        <br/>

                        <label htmlFor='apar'>Aparelhos</label>
                        <SelectTable opcoes={this.state.listaAparelhos} selecionados={this.state.aparelhos} id='apar'
                            selectionHandler={(e) => this.setState({aparelhos: e.data})} header='Aparelho'/>
                        <br/>

                        <input type='submit' value='Cadastrar'/>
                    </form>
                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        )
    }
}