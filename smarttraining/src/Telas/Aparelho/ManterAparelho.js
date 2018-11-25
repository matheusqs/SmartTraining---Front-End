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
                    <form onSubmit={this.submitHandler}>
                        <label htmlFor='nome'>Nome</label>
                        <input type='text' id='nome' value={this.state.aparelho.nome} onChange={(e) => this.setState({...this.state.aparelho.nome = e.target.value})}/>
                        <br/>

                        <label htmlFor='des'>Descrição</label>
                        <input type='text' id='des' value={this.state.aparelho.descricao} onChange={(e) => this.setState({...this.state.aparelho.descricao = e.target.value})}/>
                        <br/>

                        <label htmlFor='ex'>Exercícios</label>
                        <SelectTable opcoes={this.state.listaExercicios} selecionados={this.state.aparelho.exercicios} id='ex'
                            selectionHandler={(e) => this.setState({...this.state.aparelho.exercicios = e.data})} header='Exercício' />

                        <input type='submit' value='Cadastrar'/>
                    </form>
                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        );
    }
}