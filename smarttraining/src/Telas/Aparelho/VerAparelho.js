import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { BotaoVoltar } from '../../Components/BotaoVoltar';
import { Link } from 'react-router-dom';

export class VerAparelho extends React.Component{
    constructor(props){
        super(props);

        this.state = ({
            aparelho: {}
        });
    }

    componentDidMount = () => {
        let apar = this.props.location.state.aparelho;
        let url = `http://localhost:8080/servletweb?acao=MostrarAparelho&numero=${apar.numero}`;
        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(resultado => this.setState({aparelho: resultado}))
        .catch(error => console.error(error));
    }

    render(){
        let lista;
        if(this.state.aparelho.exercicios){
            lista = this.state.aparelho.exercicios.map((exercicio, i) => 
                <li key={i}>
                    <div className='div-lista'>{exercicio.nome}</div>

                    <Link to={{
                        pathname: '/verExercicio',
                        state: {
                            user: this.props.location.state.user,
                            exercicio: exercicio
                        }
                    }}><button type='button' className='btn btn-right'>Ver</button></Link>
                </li>
            );
        }
        
        return(
            <div >
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div className='container'>
                    <h2>Nome</h2>
                    <p className='p'>{this.state.aparelho.nome}</p>

                    <h2>Exercícios</h2>
                    <ul className='striped-list gambiarra'>{lista}</ul>

                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        );
    }
}