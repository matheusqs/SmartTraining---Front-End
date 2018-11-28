import React from 'react';
import {Header} from '../../Components/Header';
import {Footer} from '../../Components/Footer';
import {BotaoVoltar} from '../../Components/BotaoVoltar';


export class VerAvaliacao extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            avaliacao: {}
        });
    }

    componentDidMount = () => {
        let aval = this.props.location.state.avaliacao;
        let url = `http://localhost:8080/servletweb?acao=MostrarAvaliacao&data=${aval.data}&codCpf=${aval.cpf}`;
        fetch(url, {
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(resposta => resposta.json())
        .then(resultado => this.setState({avaliacao: resultado}))
        .catch(error => console.error(error));
    }

    render(){
        let lista;
        if(this.state.avaliacao.objetivos){
            lista = this.state.avaliacao.objetivos.map((objetivo, i) =>
                <li key={i}>
                    {objetivo.nome}
                </li>
            );
        }

        return(
            <div >
                <Header tipo={this.props.location.state.user.tipo} user={this.props.location.state.user}/>
                    <div className="center">
                        <h2>Avaliação - Data: {this.state.avaliacao.data}</h2>
                        <h2>Medidas:</h2>
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

                        <h2>Objetivos:</h2>
                        <ul class="striped-list">
                            {lista}
                        </ul>
                        <BotaoVoltar/>
                    </div>
                <Footer/>
            </div>
        );
    }
}