import React from 'react';
import {Header} from '../Components/Header';
import {Footer} from '../Components/Footer';
import {Dropdown} from 'primereact/dropdown';

export class ListarAvaliacoes extends React.Component {
    constructor(props){
        super(props);

        this.state({
            aluno: {
                nome: null,
                cpf: null
            }
        });
    }

    componentDidMount(){
        let url;
        this.props.location.state.user.tipo === 'A' ? 
            url = `http://localhost:8080/servletweb?acao=ListarAvaliacoes&codCpf=${this.props.location.state.user.cpf}` :
            url = `http://localhost:8080/servletweb?acao=ListarAvaliacoes&codCpf=${this.state.aluno.cpf}`;
    }

    render(){
        return(
            <div>
                <Header/>
                
                <div>
                    {
                        this.props.location.state.user.tipo === 'I' ?
                        <Dropdown placeholder='Selecione um aluno' value={this.state.aluno.nome} options={this.state.alunos}
                            onChange={(e) => this.setState({...this.state.aluno.nome = e.value})}/> :
                        null
                    }
                </div>
                
                <Footer/>
            </div>
        )
    }
}