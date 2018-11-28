import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { Dropdown } from 'primereact/dropdown';
import { SelectTable } from '../../Components/SelectTable';
import { BotaoVoltar } from '../../Components/BotaoVoltar';

export class RemoverAvaliacao extends React.Component{
    constructor(props){
        super(props);

        this.state = ({
            avaliacoes: [],
            selecionadas: []
        });

        this.submitHandler = this.submitHandler.bind(this);
    }

    componentDidMount = () => {
        let aluno = this.props.location.state.aluno;
        let url = `http://localhost:8080/servletweb?acao=ListarAvaliacoes&codCpf=${aluno.cpf}`;
        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(resultado => this.setState({avaliacoes: resultado}))
        .catch(error => console.error(error));
        
    }

    submitHandler = () => {
        let url;
        this.state.selecionadas.forEach(aval => {
            url = `http://localhost:8080/servletweb?acao=RemoverAvaliacao&data=${aval.data}&codCpf=${aval.cpf}`
            fetch(url, {
                headers: {
                    'Accept': 'application/json'
                }
            });
        });

        this.props.history.push({
            pathname: '/listarAvaliacoes',
            state: {
                user: this.props.location.state.user,
                aluno: this.props.location.state.aluno
            }
        });
    }
    
    render(){
        return(
            <div>
                <Header/>
                <div>
                    <h2>Selecione as avaliações que deseja remover:</h2>
                    <SelectTable opcoes={this.state.avaliacoes} selecionados={this.state.selecionadas}
                        selectionHandler={(e) => this.setState({selecionadas: e.data})} header='Avaliação' fielder='data'/>

                    <input type='button' value='Remover' onClick={this.submitHandler}/>
                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        );
    }
}