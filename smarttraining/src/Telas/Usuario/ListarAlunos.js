import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { BotaoVoltar } from '../../Components/BotaoVoltar';
import { Link } from 'react-router-dom';

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
        .then(resultado => this.setState({alunos: resultado}));
    }

    render(){
        let lista;

        if(this.state.alunos){
            lista = this.state.alunos.map((aluno, i) =>
                <li key={i}>
                    <div className="div-lista">{aluno.nome}</div>
                    <span className="lista-right">
                    <Link to={{
                        pathname: '/verPerfil',
                        state:{
                            user: this.props.location.state.user,
                            aluno: aluno
                        }
                    }}><button type="button" className="btn">Perfil</button></Link>
                    
                    <Link to={{
                        pathname: '/listarAvaliacoes',
                        state:{
                            user: this.props.location.state.user,
                            aluno: aluno
                        }
                    }}><button type="button" className="btn">Avaliações</button></Link>

                    <Link to={{
                        pathname: '/listarFichas',
                        state:{
                            user: this.props.location.state.user,
                            aluno: aluno
                        }
                    }}><button type="button" className="btn">Fichas</button></Link></span>
                </li>
            );
        }
        
        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div>
                    <h2 className="lista">Alunos</h2>

                    <ul className="striped-list gambiarra">
                        {lista}
                    </ul>
                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        )
    }
}