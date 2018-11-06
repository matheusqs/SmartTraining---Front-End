import React from 'react';
import {Header} from '../../Components/Header';
import {Footer} from '../../Components/Footer';
import {BotaoVoltar} from '../../Components/BotaoVoltar';
 
export class VerAvaliacao extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount = () => {
        let cpf;
        this.props.location.state.user.tipo === 'A' ? cpf = this.props.location.state.user.cpf : cpf = this.props.location.state.aluno.cpf;
        
        let url = `http://localhost:8080/servletweb?acao=MostrarAvaliacao&data=${this.props.location.state.avaliacao.data}&codCpf=${cpf}`;
        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(resposta => resposta.json())
        .then(resultado => {
            this.setState({avaliacao: resultado})
        });
    }

    render(){
        let objetivos = this.state.avaliacao.listaObjetivos;
        objetivos = objetivos.map(objetivo => {
            <li>{objetivo.nome}</li>
        });

        return(
            <div>
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                    <div>
                        <h2>Data: {this.state.avaliacao.data}</h2>
                        <h3>Medidas:</h3>
                        <table>
                            <tr>
                                <th>Região</th>
                                <th>Medida</th>
                            </tr>
                            <tr>
                                <td>Peso:</td>
                                <td>{this.state.avaliacao.peso}</td>
                            </tr>
                            <tr>
                                <td>Percentual de gordura:</td>
                                <td>{this.state.avaliacao.percentualGordura}</td>
                            </tr>
                            <tr>
                                <td>Massa Gorda:</td>
                                <td>{this.state.avaliacao.massaGorda}</td>
                            </tr>
                            <tr>
                                <td>Pescoço:</td>
                                <td>{this.state.avaliacao.tamanhoPescoco}</td>
                            </tr>
                            <tr>
                                <td>Ombro:</td>
                                <td>{this.state.avaliacao.tamanhoOmbro}</td>
                            </tr>
                            <tr>
                                <td>Tórax:</td>
                                <td>{this.state.avaliacao.tamanhoTorax}</td>
                            </tr>
                            <tr>
                                <td>Abdômen:</td>
                                <td>{this.state.avaliacao.tamanhoAbdomen}</td>
                            </tr>
                            <tr>
                                <td>Cintura:</td>
                                <td>{this.state.avaliacao.tamanhoCintura}</td>
                            </tr>
                            <tr>
                                <td>Quadril:</td>
                                <td>{this.state.avaliacao.tamanhoQuadril}</td>
                            </tr>
                            <tr>
                                <td>Braço Esquerdo:</td>
                                <td>{this.state.avaliacao.tamanhoBracoEsquerdo}</td>
                            </tr>
                            <tr>
                                <td>Braço Direito:</td>
                                <td>{this.state.avaliacao.tamanhoBracoDireito}</td>
                            </tr>
                            <tr>
                                <td>Antebraço Esquerdo:</td>
                                <td>{this.state.avaliacao.tamanhoAntebracoEsquerdo}</td>
                            </tr>
                            <tr>
                                <td>Antebraço Direito:</td>
                                <td>{this.state.avaliacao.tamanhoAntebracoDireito}</td>
                            </tr>
                            <tr>
                                <td>Coxa Esquerda:</td>
                                <td>{this.state.avaliacao.tamanhoCoxaEsquerda}</td>
                            </tr>
                            <tr>
                                <td>Coxa Direita:</td>
                                <td>{this.state.avaliacao.tamanhoCoxaDireita}</td>
                            </tr>
                            <tr>
                                <td>Panturrilha Esquerda:</td>
                                <td>{this.state.avaliacao.tamanhoPanturrilhaEsquerda}</td>
                            </tr>
                            <tr>
                                <td>PanturrilhaDireita</td>
                                <td>{this.state.avaliacao.tamanhoPanturrilhaDireita}</td>
                            </tr>
                        </table>

                        <h3>Objetivos:</h3>
                        <ul>
                            {objetivos}
                        </ul>
                        <BotaoVoltar/>
                    </div>
                <Footer/>
            </div>
        );
    }
}