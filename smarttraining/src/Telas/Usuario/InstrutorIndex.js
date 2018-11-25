import React from 'react';  
import {Header} from '../../Components/Header';
import {Footer} from '../../Components/Footer';
import {Link} from 'react-router-dom';

export class InstrutorIndex extends React.Component {
    constructor(props){
        super(props);

        this.state = ({
            alunos: []
        });
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

    render(){
        let lista;
        if(this.state.alunos){
            lista = this.state.alunos.map((aluno, i) => 
                <li key={i}>
                    {aluno.nome}

                    <Link to={{
                        pathname: '/verPerfil',
                        state: {
                            user: this.props.location.state.user,
                            aluno: aluno
                        }
                    }}><button type='button' className='btn btn-right'>Ver</button></Link>
                </li>
            );
        }

        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user} />
                <div>
                    <h2>Alunos:</h2>
                    <ul>{lista}</ul>
                </div>
                <Footer/>
            </div>
        )
    }
}