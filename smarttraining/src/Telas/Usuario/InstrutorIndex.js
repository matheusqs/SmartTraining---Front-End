import React from 'react';  
import {Header} from '../../Components/Header';
import {Footer} from '../../Components/Footer';
import {Link} from 'react-router-dom';

export class InstrutorIndex extends React.Component {
    constructor(props){
        super(props);

        this.montarLista = this.montarLista.bind(this);
    }

    componentDidMount = () => {
        let url = 'http://localhost:8080/servletweb?acao=ListarAlunos';
        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(resposta => resposta.json())
        .then(resultado => this.setState({alunos: resultado}));
    }

    montarLista = () => {
        let lista = this.state.alunos.map(aluno => {
            <li>
                {aluno.nome}
                <Link to={{
                    pathname: '/verAluno',
                    user: this.props.location.state.user,
                    aluno: aluno
                }}><input type='button' value='Ver aluno'/></Link>
            </li>
        });

        return lista;
    }

    render(){
        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user} />
                <div>
                    <h2>Alunos:</h2>
                    <ul>{this.montarLista}</ul>
                </div>
                <Footer/>
            </div>
        )
    }
}