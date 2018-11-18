import React from 'react';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import { BotaoVoltar } from '../Components/BotaoVoltar';

export class ListarAlunos extends React.Component{
    constructor(props){
        super(props);

        this.state = ({
            alunos: []
        });

    }

    componentDidMount(){
        let url = 'http://localhost:8080/servletweb?acao=ListarAlunos';

        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(resposta => resposta.json())
        .then(resultado => this.setState({alunos: resultado, resultado: true}));
    }

    render(){
        let lista;

        if(this.state.resultado){
            lista = this.state.alunos.map(aluno => <li>aluno.nome</li>);
        }

        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div>
                    <ul>
                        {lista}
                    </ul>
                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        )
    }
}