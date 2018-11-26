import React from 'react';
import {Header} from '../../Components/Header';
import {Footer} from '../../Components/Footer';
import {SelectTable} from '../../Components/SelectTable';
import {BotaoVoltar} from '../../Components/BotaoVoltar';
import './../../css/table.css';

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

        if(this.props.location.state.acao === 'alterar'){
            url = `http://localhost:8080/servletweb?acao=MostrarExercicio&numero=${this.props.location.state.exercicio.numero}`;
            fetch(url, {
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(res => res.json())
            .then(resultado => this.setState({
                ...this.state.exercicio.numero = resultado.numero,
                ...this.state.exercicio.nome = resultado.nome,
                ...this.state.exercicio.descricao = resultado.descricao,
                ...this.state.exercicio.musculos = {}
            }));
        }
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
                        

                        <br/>
                        <div className="div-flex">

                            <div>
                                    <div className="form-centralizaco">
                                       <label className="field a-field a-field_a1 page__field form_label">
                                            <input type='text' id='nome' className="field__input" placeholder="Ex. Supino Reto" value={this.state.exercicio.nome} onChange={(e) => this.setState({...this.state.exercicio.nome = e.target.value})} />                            
                                            <span className="field__label-wrap">
                                                <span className="field__label">Nome</span>
                                            </span>
                                        </label>
                                    
                                 

                                    <br/>

                                    <label className="field a-field a-field_a1 page__field form_label">
                                        <input type='textarea'id='des' className="field__input" placeholder=" " value={this.state.exercicio.descricao} onChange={(e) => this.setState({...this.state.exercicio.descricao = e.target.value})} />
                                        <span className="field__label-wrap">
                                            <span className="field__label"htmlFor='des'>Descrição</span>
                                        </span>
                                    </label>
                                </div>
                                <p>*selecione novamente todos os músculos que deseja para este exercício</p>
                                <SelectTable opcoes={this.state.musculos} selecionados={this.state.exercicio.musculos}
                                    selectionHandler={(e) =>this.setState({...this.state.exercicio.musculos = e.data})} header='Musculo'/>
                            </div>

                            <div>
                                {
                                    this.props.location.state.acao === 'cadastrar' ?
                                    <span>
                                        <SelectTable opcoes={this.state.aparelhos} selecionados={this.state.exercicio.aparelhos}
                                            selectionHandler={(e) => this.setState({...this.state.exercicio.aparelhos = e.data})} header='Aparelho'/>
                                        <br/>
                                    </span>: null
                                }
                            </div>

                            
                        </div>
                        <BotaoVoltar/>
                        <button className="btn">Cadastrar</button>
                    </form>
                </div>
                <Footer/>
            </div>
        )
    }
}