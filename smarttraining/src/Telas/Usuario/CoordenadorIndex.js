import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { Link } from 'react-router-dom';
import './../../css/lista.css'

export class CoordenadorIndex extends React.Component{
    constructor(props){
        super(props);

        this.state = ({
            alunos: [],
            instrutores: []
        });
    }

    componentDidMount = () => {
        let url = 'http://localhost:8080/servletweb?acao=ListarAlunos';
        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(resultado => this.setState({alunos: resultado}));

        url = 'http://localhost:8080/servletweb?acao=ListarInstrutores';
        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(resultado => this.setState({instrutores: resultado}));
    }

    render(){
        let alunos;
        let instrutores;
        if(this.state.alunos && this.state.instrutores){
            alunos = this.state.alunos.map((aluno, i) =>
                <li key={i}>
                    <div className="div-lista">{aluno.nome}</div>

                    <Link to={{
                        pathname: '/verPerfil',
                        state: {
                            user: this.props.location.state.user,
                            aluno: aluno
                        }
                    }}><button type='button' className='btn btn-right'>Ver</button></Link>
                </li>
            );

            instrutores = this.state.instrutores.map((instrutor, i) => 
                <li key={i}>
                	<div className="div-lista">{instrutor.nome}</div>
                    

                    <Link to={{
                        pathname: '/verPerfil',
                        state: {
                            user: this.props.location.state.user,
                            instrutor: instrutor
                        }
                    }}><button type='button' className='btn btn-right'>Ver</button></Link>
                </li>
            );

            return(
                <div>
                    <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user} />
                    <div>
                        <h2 className="lista">Alunos:</h2>
                        <ul className="striped-list">{alunos}</ul>

                        <h2 className="lista">Instrutores:</h2>
                        <ul className="striped-list">{instrutores}</ul>
                    </div>
                    <Footer/>
                </div>
            )
        }
    }
}