import React from 'react';
import { Header } from '../../Components/Header';
import { Footer } from '../../Components/Footer';
import { BotaoVoltar } from '../../Components/BotaoVoltar';
import { Link } from 'react-router-dom';

export class VerExercicio extends React.Component{
    constructor(props){
        super(props);

        this.state = ({
            exercicio: {}
        })
    }

    componentDidMount = () => {
        let exe = this.props.location.state.exercicio;
        let url = `http://localhost:8080/servletweb?acao=MostrarExercicio&numero=${exe.numero}`;
        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(resultado => this.setState({exercicio: resultado}));
    }

    render(){
        let lista;
        if(this.state.exercicio.musculos){
            lista = this.state.exercicio.musculos.map((musculo, i) => 
                <li key={i}>
                    <div className="div-lista">{musculo.nome}</div>

                    <Link to={{
                        pathname: '/verMusculo',
                        state: {
                            user: this.props.location.state.user,
                            musculo: musculo
                        }
                    }}><button type='button' className='btn lista-right'>Ver</button></Link>
                </li>
            );
        }

        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div className="container">
                    
                    <p>Nome: {this.state.exercicio.nome}</p>
                    <p>Descrição: {this.state.exercicio.descricao}</p>
                    <p>Músculos:
                    <ul className="striped-list">{lista}</ul></p>

                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        )
    }
}