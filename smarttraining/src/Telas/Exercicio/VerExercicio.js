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
                    {musculo.nome}

                    <Link to={{
                        pathname: '/verMusculo',
                        state: {
                            user: this.props.location.state.user,
                            musculo: musculo
                        }
                    }}><button type='button' className='btn btn-right'>Ver</button></Link>
                </li>
            );
        }

        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                <div>
                    <h2>Nome:</h2>
                    <p>{this.state.exercicio.nome}</p>

                    <h2>Descrição</h2>
                    <textarea disabled>
                        {this.state.exercicio.descricao}
                    </textarea>

                    <h2>Músculos</h2>
                    <ul>{lista}</ul>

                    <BotaoVoltar/>
                </div>
                <Footer/>
            </div>
        )
    }
}