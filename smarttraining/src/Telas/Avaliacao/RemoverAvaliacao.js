import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { SelectTable } from '../../Components/SelectTable';
import { BotaoVoltar } from '../../Components/BotaoVoltar';

export class RemoverAvaliacao extends React.Component{
    constructor(props){
        super(props);

        this.alunoChange = this.alunoChange.bind(this);
        this.selectionHandler = this.selectionHandler.bind(this);
    }

    submitHandler = () => {
        let url;
        this.state.avaliacoesSelecionadas.forEach(aval => {
            url = `http://localhost:8080/servletweb?acao=RemoverAvaliacao&data=${aval.data}&codCpf=${aval.codCpfAluno}`
            fetch(url, {
                headers: {
                    'Accept': 'application/json'
                }
            })
        })
    }

    alunoChange = (e) => {
        this.setState({aluno: e.value});
        let url = `http://localhost:8080/servletweb?acao=ListarAvaliacoes&codCpf=${e.value.cpf}`;

        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(resposta => resposta.json())
        .then(resultado => this.setState({avaliacoes: resultado}))
    }

    selectionHandler = (e) => {
        this.setState({
            avaliacoesSelecionadas: e.data,
        })
    }

    render(){
        return(
            <div>
                <Header/>
                <div>
                    <Dropdown placeholder='Selecione um aluno' value={this.state.aluno.nome} options={this.state.alunos}
                        onChange={this.alunoChange}/>

                    <h2>Selecione as avaliações que deseja remover:</h2>
                    <SelectTable opcoes={this.state.avaliacoes} selecionados={this.state.avaliacoesSelecionadas}
                        selectionHandler={this.selectionHandler} header='Avaliação'/>

                    <Button label='Remover' onClick={this.submitHandler}/>
                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        );
    }
}