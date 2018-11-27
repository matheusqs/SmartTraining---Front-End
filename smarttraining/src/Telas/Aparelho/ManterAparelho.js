import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { SelectTable } from '../../Components/SelectTable';
import { BotaoVoltar } from '../../Components/BotaoVoltar';

export class ManterAparelho extends React.Component{
    constructor(props){
        super(props);

        this.state = ({
            aparelho: {},
            listaExercicios: []
        });

        this.submitHandler = this.submitHandler.bind(this);
    }

    componentDidMount = () => {
        let url = 'http://localhost:8080/servletweb?acao=ListarExercicios';
        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(resultado => this.setState({listaExercicios: resultado}));
        
        if(this.props.location.state.acao === 'alterar'){
            let apar = this.props.location.state.aparelho;
            url = `http://localhost:8080/servletweb?acao=MostrarAparelho&numero=${apar.numero}`;
            fetch(url, {
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(resposta => resposta.json())
            .then(resultado => this.setState({aparelho: resultado}));
        }
    }

    submitHandler = (e) => {
        e.preventDefault();

        let url = 'http://localhost:8080/servletweb?';
        if(this.props.location.state.acao === 'cadastrar'){
            url += 'acao=CadastrarAparelho';
        }else{
            url += 'acao=AlterarAparelho';
        }

        let data = JSON.stringify(this.state.aparelho);

        fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(resposta => resposta.json())
        .catch(error => console.error('Error:', error));

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
                    <form onSubmit={this.submitHandler} >

                    <label className="field a-field a-field_a1 page__field form_label">
                    <input type='text' id='nome' value={this.state.aparelho.nome} className="field__input" placeholder="Ex. Aerobico" onChange={(e) => this.setState({...this.state.aparelho.nome = e.target.value})}/>
                                            <span className="field__label-wrap">
                                                <span className="field__label"htmlFor='nome'>Nome</span>
                                            </span>
                                        </label>
                        <br/>

                        <br/>
                        <SelectTable opcoes={this.state.listaExercicios} selecionados={this.state.aparelho.exercicios} id='ex'
                            selectionHandler={(e) => this.setState({...this.state.aparelho.exercicios = e.data})} header='Exercícios' />

                        <button className='btn'>{this.props.location.state.acao === 'cadastrar' ? 'Cadastrar' : 'Alterar'}</button>
                    </form>
                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        );
    }
}