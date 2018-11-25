import React from 'react';
import {Header} from '../../Components/Header';
import {Footer} from '../../Components/Footer';
import {SelectTable} from '../../Components/SelectTable';
import {BotaoVoltar} from '../../Components/BotaoVoltar';

export class ManterExercicio extends React.Component {
    constructor(props){
        super(props);

        this.state = ({
            exercicio: {},
            aparelhos: [],
            musculos: []
        });

        this.submitHandler = this.submitHandler.bind(this);
    }

    componentDidMount = () => {
        let url = 'http://localhost:8080/servletweb?acao=TelaCadastrarExercicio';
        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(resultado => this.setState({
            aparelhos: resultado.aparelhos,
            musculos: resultado.musculos
        }));
    }

    submitHandler = (e) => {
        e.preventDefault();

        let url;
        if(this.props.location.state.acao === 'alterar'){
            url = 'http://localhost:8080/servletweb?acao=AlterarExercicio';
        }else{
            url = 'http://localhost:8080/servletweb?acao=CadastrarExercicio';
        }

        let data = JSON.stringify(this.state.exercicio);

        fetch(url, {
            headers: {
                'Accept': 'application/json',
            },
            method: 'POST',
            body: data
        })
        .then(resposta => resposta.json())
        .catch(error => console.error('Error:', error));
    }

    render(){
        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div>
                    <form onSubmit={this.submitHandler}>
                        <label htmlFor='nome'>Nome</label>
                        <input type='text' id='nome' value={this.state.exercicio.nome} onChange={(e) => this.setState({...this.state.exercicio.nome = e.target.value})} />
                        <br/>

                        <label htmlFor='des'>Descrição</label>
                        <input type='textarea'id='des' value={this.state.exercicio.descricao} onChange={(e) => this.setState({...this.state.exercicio.descricao = e.target.value})} />
                        <br/>

                        <SelectTable opcoes={this.state.aparelhos} selecionados={this.state.exercicio.aparelhos}
                            selectionHandler={(e) => this.setState({...this.state.exercicio.aparelhos = e.data})} header='Aparelho'/>
                        <br/>

                        <SelectTable opcoes={this.state.musculos} selecionados={this.state.exercicio.musculos}
                            selectionHandler={(e) => this.setState({...this.state.exercicio.musculos = e.data})} header='Musculo'/>
                        
                        
                        <BotaoVoltar/>
                        <input type='submit' value='Cadastrar'/>
                    </form>
                </div>
                <Footer/>
            </div>
        )
    }
}